const gtagMixins = origin => {
	return {
		methods: {
			tagExportEvent: function({ page, format }) {
				this.$gtag.event('export', {
					format,
					page,
					origin,
				});
			},
		},
	};
};

export { gtagMixins };
