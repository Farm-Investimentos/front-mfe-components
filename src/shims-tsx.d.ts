import Vue, { VNode } from 'vue';

declare global {
	namespace JSX {
		interface Element extends VNode {}
		interface ElementClass extends Vue {}
		interface IntrinsicElements {
			[elem: string]: any;
		}
	}
}

declare module '*.svg' {
	const content: string;
	export default content;
}
