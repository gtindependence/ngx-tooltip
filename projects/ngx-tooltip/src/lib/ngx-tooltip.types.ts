import { Instance, Props, Content, roundArrow } from 'tippy.js';

export { Placement as TooltipPlacement } from 'tippy.js';

export type TooltipAnimation = string | boolean;

export type TooltipArrowType = string | boolean | DocumentFragment | SVGElement;

export type TooltipState = Partial<Instance['state']>;

export type TooltipOptions = Props & { group?: string | number };

export type TooltipContent = Content;

export type TooltipInstance = Exclude<Instance, 'props' | 'state'>
    & {
        props: TooltipOptions;
        state: TooltipState;
        group?: string | number
    };
