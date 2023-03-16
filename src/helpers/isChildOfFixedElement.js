function isChildOfFixedElement(element) {
	const parent = element.parentNode;

	if (!parent || !(parent instanceof Element)) {
		return false;
	}
	const style = window.getComputedStyle(parent);

	if (style.position === 'fixed') {
		return true;
	}

	return isChildOfFixedElement(parent);
}

export default isChildOfFixedElement;
