import { withDesign } from 'storybook-addon-designs';

export default {
	title: 'Display/Dialog/Vuejs-dialog',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Dialog created by vuejs-dialog`,
			},
		},
	},
};

export const Primary = () => ({
	methods: {
		openDialog() {
			this.$dialog
				.confirm(
					{
						title: 'Dialog title',
						body: 'Dialog content',
					},
					{
						html: true,
						okText: 'OK',
						cancelText: 'Cancel',
					}
				)
				.then(() => {
					alert('OK Clicked');
				})
				.catch(() => {
					alert('Cancel clicked');
				});
		},
	},
	template: `<div style="display: flex; flex-direction: column; max-width: 160px; width: 100%;">
        <farm-btn @click="openDialog">
            Open
        </farm-btn>
	</div>`,
});

export const ErrorColor = () => ({
	methods: {
		openDialog() {
			this.$dialog
				.alert(
					{
						title: 'Dialog title - Error',
						body: 'Dialog content with error layout',
					},
					{
						html: true,
						okText: 'OK',
						customClass: 'dg-parent-error',
					}
				)
				.then(() => {
					alert('OK Clicked');
				})
				.catch(() => {});
		},
	},
	template: `<div style="display: flex; flex-direction: column; max-width: 160px; width: 100%;">
        <farm-btn @click="openDialog">
            Open
        </farm-btn>
	</div>`,
});

export const NoFooter = () => ({
	methods: {
		openDialog() {
			this.$dialog
				.confirm(
					{
						title: 'Dialog title - No footer',
						body: 'Dialog content for notifications without footer (must be closed programmatically)',
					},
					{
						html: true,
						okText: '',
						customClass: 'dg-parent-nofooter',
					}
				)
				.then(() => {})
				.catch(() => {});

			setTimeout(() => {
				this.$dialog.destroy();
			}, 2000);
		},
	},
	template: `<div style="display: flex; flex-direction: column; max-width: 160px; width: 100%;">
        <farm-btn @click="openDialog">
            Open
        </farm-btn>
	</div>`,
});

export const CustomHtml = () => ({
	methods: {
		openDialog() {
			this.$dialog
				.alert(
					{
						title: 'Dialog title',
						body: `This is a text with <strong>html markup</strong> and<br />break line!<br />
						Also with an <i class="mdi mdi-book"></i>book icon<br />
						and some <span style="color: var(--farm-warning-base)">color</span>`,
					},
					{
						html: true,
						okText: 'Button with icon <i class="mdi mdi-book"></i>',
					}
				)
				.then(() => {})
				.catch(() => {});
		},
	},
	template: `<div style="display: flex; flex-direction: column; max-width: 160px; width: 100%;">
        <farm-btn @click="openDialog">
            Open
        </farm-btn>
	</div>`,
});
