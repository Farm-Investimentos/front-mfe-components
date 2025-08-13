export interface TooltipPosition {
    left: number;
    top: number;
    placementUsed: string; // ex.: 'top-left', 'bottom-center'
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
    const parts = placement.split('-');
    let verticalPos = parts[0];
    const horizontalAlign = parts[1];

	let left = 0;
	let top = 0;

    const computeTop = (vert: string) =>
        vert === 'top'
            ? activatorRect.top - tooltipRect.height - offset
            : activatorRect.bottom + offset;

    top = computeTop(verticalPos);

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

    // Flip vertical if not enough space
    const tooHigh = top < offset;
    const tooLow = top + tooltipRect.height > window.innerHeight - offset;
    if ((verticalPos === 'top' && tooHigh) || (verticalPos === 'bottom' && tooLow)) {
        verticalPos = verticalPos === 'top' ? 'bottom' : 'top';
        top = computeTop(verticalPos);
    }

    // Clamp within viewport horizontally and vertically
    if (left < offset) left = offset;
    if (left + tooltipRect.width > window.innerWidth - offset) {
        left = window.innerWidth - tooltipRect.width - offset;
    }
    if (top < offset) top = offset;
    if (top + tooltipRect.height > window.innerHeight - offset) {
        top = window.innerHeight - tooltipRect.height - offset;
    }

    const placementUsed = `${verticalPos}-${horizontalAlign || 'center'}`;
    return { left, top, placementUsed };
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
