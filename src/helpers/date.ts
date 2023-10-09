export const defaultFormat = (data, UTCTimeZone = true) => {
	const options = {
		timeZone: 'UTC',
	};
	return data ? new Date(data).toLocaleDateString('pt-BR', UTCTimeZone ? options : {}) : null;
};

export const convertDate = (data) => {
	if(!data) {
		return '';
	}
	let newdate = data.split("/").reverse().join("-");
	return newdate;
};

export const revertDate = (data: string): string => {
	if(!data) {
		return '';
	}
	let newdate = data.split("-").reverse().join("/");
	return newdate;
};


const checkLength = (value, length) => {
	return parseInt(value.length, 10) === length;
};

const dateFormatting = (date) => {
	if(date.includes('/')){
		let dateSplit = date.split('/');
		return {
			day: dateSplit[0],
			month: dateSplit[1],
			year: dateSplit[2]
		};
	}
	let dateSplit = date.split('-');
	return {
		day: dateSplit[2],
		month: dateSplit[1],
		year: dateSplit[0]
	};
};

const checkLeapYear = (year) => {
	if (parseInt(year, 10) % 400 === 0){
		return true;
	}
	if(parseInt(year, 10) % 4 === 0 && parseInt(year, 10) % 100 !== 0) {
		return true;
	}else{
		return false;
	}
};

const getTotalDays = (month, isLeapYear) => {	
	const numberMonth = parseInt(month, 10);
	if(numberMonth === 2) {
		return isLeapYear ? 29 : 28;
	}
	const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
	return monthsWith31Days.includes(numberMonth) ? 31 : 30;
};

const checkDay = (day, totalDays) => {	
	if(parseInt(day, 10) > 0 && parseInt(day, 10) <= totalDays) {
		return true;
	}
	return false;
};

const checkMonth = (month) => {	
	if(parseInt(month, 10) > 0 && parseInt(month, 10) <= 12) {
		return true;
	}
	return false;
};

export const checkDateValid = (date) => {
	if(!checkLength(date, 10)){
		return false;
	}
	const {day, month, year} = dateFormatting(date);
	if(!checkMonth(month)){
		return false;
	}
	const isLeapYear = checkLeapYear(year);
	const totalDays = getTotalDays(month, isLeapYear);
	if(!checkDay(day, totalDays)){
		return false;
	}
	return true;
};
