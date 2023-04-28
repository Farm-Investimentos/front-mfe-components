import ResourceMetaInfo from './ResourceMetaInfo.vue';

export default {
	title: 'Display/ResourceMetaInfo',
	component: ResourceMetaInfo,
	parameters: {
		docs: {
			description: {
				component: `ResourceMetaInfo<br />
				selector: <em>farm-resource-metainfo</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			value: false,
			info: {
				createdAt: '21/10/2022',
				updatedAt: '21/10/2022',
				username: 'Test User',
				updatedHours: '10:10:10',
			},
		};
	},
	template: `<div>
	<farm-resource-metainfo :infos="info" />
	</div>`,
});

export const WithCreatedBy = () => ({
	data() {
		return {
			value: false,
			info: {
				createdAt: '21/10/2022',
				createdBy: 'Test User',
				createdHours: '10:10:10',
				updatedAt: '21/10/2022',
				username: 'Test User',
				updatedHours: '10:10:10',
			},
		};
	},
	template: `<div>
	<farm-resource-metainfo :infos="info" />
	</div>`,
});

export const WithoutUpdate = () => ({
	data() {
		return {
			value: false,
			info: {
				createdAt: '21/10/2022',
				updatedAt: null,
				username: 'Test User',
				updatedHours: '10:10:10',
			},
		};
	},
	template: `<div>
	<farm-resource-metainfo :infos="info" />
	</div>`,
});

export const WithoutCreate = () => ({
	data() {
		return {
			value: false,
			info: {
				createdAt: null,
				updatedAt: '21/10/2022',
				username: 'Test User',
				updatedHours: '10:10:10',
			},
		};
	},
	template: `<div>
	<farm-resource-metainfo :infos="info" />
	</div>`,
});

export const ShowUpdateWithNA = () => ({
	data() {
		return {
			value: false,
			info: {
				createdAt: null,
				updatedAt: null,
				username: null,
				updatedHours: null,
			},
		};
	},
	template: `<div>
	<farm-resource-metainfo :infos="info" show-empty-update />
	</div>`,
});

export const ShowCreateWithNA = () => ({
	data() {
		return {
			value: false,
			info: {
				createdAt: null,
				updatedAt: null,
				username: null,
				updatedHours: null,
			},
		};
	},
	template: `<div>
	<farm-resource-metainfo :infos="info" show-empty-create />
	</div>`,
});

export const ShowBothWithNA = () => ({
	data() {
		return {
			value: false,
			info: {
				createdAt: null,
				updatedAt: null,
				username: null,
				updatedHours: null,
			},
		};
	},
	template: `<div>
	<farm-resource-metainfo :infos="info" show-empty-create show-empty-update />
	</div>`,
});
