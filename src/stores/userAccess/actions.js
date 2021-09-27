export default {
	updateCurrentUserRoles({ commit }, roles) {
		commit('setCurrentUserRoles', roles);
	},

	updateCurrentRouteRole({ commit }, role) {
		commit('setCurrentRouteRole', role);
	},
};
