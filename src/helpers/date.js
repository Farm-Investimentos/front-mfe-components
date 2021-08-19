export const defaultFormat = (data, UTCTimeZone = true) => {
	const options = {
		timeZone: 'UTC',
	};
	return data ? new Date(data).toLocaleDateString('pt-BR', UTCTimeZone ? options : {}) : null;
};
