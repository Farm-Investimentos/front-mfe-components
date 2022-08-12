import DialogFooter from './DialogFooter.vue';

export default {
	title: 'API/Dialog/DialogFooter',
	component: DialogFooter,
};

export const Primary = () => ({
	components: { DialogFooter },
	template: '<DialogFooter />',
});
