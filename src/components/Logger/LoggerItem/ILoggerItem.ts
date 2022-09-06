interface ILoggerItem {
	userName: string;
	icon: string;
	formattedDate: string;
	message: string;
	status: string;
	details: Function;
}

export default ILoggerItem;
