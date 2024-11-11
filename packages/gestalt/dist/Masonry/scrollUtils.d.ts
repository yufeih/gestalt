/**
 * Measuring scroll positions, element heights, etc is different between
 * different browsers and the window object vs other DOM nodes. These
 * utils abstract away these differences.
 */
export declare function getElementHeight(element: HTMLElement): number;
export declare function getWindowScrollPos(): number;
export declare function getRelativeScrollTop(element: HTMLElement): number;
export declare function getScrollHeight(element: HTMLElement): number;
export declare function getScrollPos(element: HTMLElement): number;
