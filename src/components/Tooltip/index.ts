import Tooltip from './Tooltip.vue';

export default Tooltip;

export { Tooltip };

// Export types for external use
export type {
	TooltipPlacement,
	TooltipTrigger,
	TooltipVariant,
	TooltipSize,
	TooltipProps,
	TooltipEvents,
	Position,
} from './types/tooltip.types';

// Export utilities
export { calculateTooltipPosition, moveToBody, moveToContainer } from './utils/tooltip.utils';

export type { TooltipPosition, TooltipRect } from './utils/tooltip.utils';
