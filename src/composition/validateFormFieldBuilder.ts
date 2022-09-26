export default function (rules) {
	return value => {
		const innerErrorBucket = [];
		for (let index = 0; index < rules.length; index++) {
			const rule = rules[index];
			const valid = typeof rule === 'function' ? rule(value) : rule;

			if (valid === false || typeof valid === 'string') {
				innerErrorBucket.push(valid || '');
			} else if (typeof valid !== 'boolean') {
				console.error(
					`Rules should return a string or boolean, received '${typeof valid}' instead`,
					this
				);
			}
		}
		return innerErrorBucket;
	};
}
