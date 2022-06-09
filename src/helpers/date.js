export const defaultFormat = (data, UTCTimeZone = true) => {
	const options = {
		timeZone: 'UTC',
	};
	return data ? new Date(data).toLocaleDateString('pt-BR', UTCTimeZone ? options : {}) : null;
};

export const convertDate = (data) => {
	let newdate = data.split("/").reverse().join("-");
	return newdate;
};
