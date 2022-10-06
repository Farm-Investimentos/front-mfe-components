export const defaultFormat = (data, UTCTimeZone = true) => {
	const options = {
		timeZone: 'UTC',
	};
	return data ? new Date(data).toLocaleDateString('pt-BR', UTCTimeZone ? options : {}) : null;
};

export const convertDate = (data) => {
	if(!data) {
		return null;
	}
	let newdate = data.split("/").reverse().join("-");
	return newdate;
};
