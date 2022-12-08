interface ILoggerItem {
	userName: string;
	icon: string;
	formattedDate: string;
	message: string;
	status: string;
	extraMessage?: string;
	details: Function;
}

export default ILoggerItem;
