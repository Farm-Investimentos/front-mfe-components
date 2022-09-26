export default (errorBucket: any, valid: any, fieldValidator: Function) => {
	const validate = (value?: any) => {
		errorBucket.value = fieldValidator(value);
		valid.value = errorBucket.value.length === 0;
		return valid.value;
	};

	return validate;
};
