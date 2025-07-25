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

	const margin = 8;
	if (left < margin) left = margin;
	if (left + tooltipRect.width > window.innerWidth - margin) {
		left = window.innerWidth - tooltipRect.width - margin;
	}
	if (top < margin) top = margin;
	if (top + tooltipRect.height > window.innerHeight - margin) {
		top = window.innerHeight - tooltipRect.height - margin;
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
