interface IExtraButton {
	label: string;
	color: string;
	outlined: boolean;
	disabled: boolean;
	listener: Function | null;
}

export default IExtraButton;
