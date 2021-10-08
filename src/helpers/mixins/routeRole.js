export default (_Vue, mapGetters, mapActions, moduleName) => {
	_Vue.mixin({
		data() {
			return {
				userHasAccess: true,
			};
		},
		computed: {
			...mapGetters(moduleName, {
				currentRouteRole: 'currentRouteRole',
				currentUserRoles: 'currentUserRoles',
			}),
			canWrite() {
				return this.currentRouteRole === 'WRITE';
			},
		},
		methods: {
			...mapActions(moduleName, {
				updateCurrentUserRoles: 'updateCurrentUserRoles',
				updateCurrentRouteRole: 'updateCurrentRouteRole',
			}),
			checkAccess() {
				const rolesList = this.currentUserRoles;
				let roleKey = this.$route.meta.roleKey;

				const rolesPath = roleKey.split('.').map(item => {
					if (item.indexOf(':') === 0) {
						return this.$route.params[item.split(':')[1]];
					}
					return item;
				});
				roleKey = rolesPath.join('.');

				if (!roleKey || !rolesList) {
					this.updateCurrentRouteRole('WRITE');
					return (this.userHasAccess = true);
				}
				const routeRole = rolesList[roleKey];

				if (routeRole && routeRole > 0) {
					this.updateCurrentRouteRole(routeRole === 2 ? 'WRITE' : 'READ');
					return (this.userHasAccess = true);
				}
				this.updateCurrentRouteRole(0);
				this.userHasAccess = false;
			},
			listenToUserRolesChange() {
				window.addEventListener('CURRENT_USER_ROLES', data => {
					this.updateCurrentUserRoles(data.detail.message);
					this.checkAccess();
				});
			},
		},
	});
};
