export interface TooltipPosition {
	left: number;
	top: number;
}

export interface TooltipRect {
	width: number;
	height: number;
	left: number;
	top: number;
	right: number;
	bottom: number;
}

const ARROW_OFFSET = 24;

export function calculateTooltipPosition(
	activatorRect: TooltipRect,
	tooltipRect: TooltipRect,
	placement: string,
	offset: number = 8
): TooltipPosition {
	const [verticalPos, horizontalAlign] = placement.split('-');

	let left = 0;
	let top = 0;

	if (verticalPos === 'top') {
		top = activatorRect.top - tooltipRect.height - offset;
	} else {
		top = activatorRect.bottom + offset;
	}

	switch (horizontalAlign) {
		case 'left':
			left = activatorRect.left + activatorRect.width / 2 - ARROW_OFFSET;
			break;
		case 'right':
			left =
				activatorRect.left + activatorRect.width / 2 - (tooltipRect.width - ARROW_OFFSET);
			break;
		case 'center':
		default:
			left = activatorRect.left + activatorRect.width / 2 - tooltipRect.width / 2;
			break;
	}

	if (left < offset) left = offset;
	if (left + tooltipRect.width > window.innerWidth - offset) {
		left = window.innerWidth - tooltipRect.width - offset;
	}
	if (top < offset) top = offset;
	if (top + tooltipRect.height > window.innerHeight - offset) {
		top = window.innerHeight - tooltipRect.height - offset;
	}

	return { left, top };
}

export function moveToBody(element: HTMLElement): void {
	if (element.parentNode !== document.body) {
		document.body.appendChild(element);
	}
}

export function moveToContainer(element: HTMLElement, container: HTMLElement): void {
	if (element.parentNode === document.body) {
		container.appendChild(element);
	}
}
