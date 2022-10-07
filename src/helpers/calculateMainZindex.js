export default () => {
	const all_z = [];
	document.querySelectorAll('*').forEach(function (elem) {
		all_z.push(elem.style.zIndex);
	});
	const zIndex = Math.max.apply(
		null,
		all_z.map(x => Number(x))
	);

	return zIndex > 5 ? zIndex : 5;
};
