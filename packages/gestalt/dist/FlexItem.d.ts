import { ReactNode } from 'react';
type Dimension = number | string;
export type Props = {
    /**
     * Allows the default alignment (or the one specified by `align-items`) to be overridden for the individual flex item.
     */
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    /**
     *
     */
    children?: ReactNode;
    /**
     * Used to identify the element for testing purposes.
     */
    dataTestId?: string;
    /**
     * Defines how the flex item will be sized. `"grow"`, equivalent to `"flex: 1 1 auto"`, will size Flex.Item relative to its parent, growing and shrinking based on available space. `"shrink"`, equivalent to `"flex: 0 1 auto"` (the browser default), allows Flex.Item to shrink if compressed but not grow if given extra space. Finally, `"none"`, equivalent to `"flex: 0 0 auto"`, preserves Flex.Item's size based on child content regardless of its container's size.
     * Default: 'shrink'
     */
    flex?: 'grow' | 'shrink' | 'none';
    /**
     * Defines the initial main size of the flex item. Use numbers for pixels: `flexBasis={100}` and strings for other units: `flexBasis="100vh"`.
     */
    flexBasis?: string | number;
    /**
     * Use numbers for pixels: `maxWidth={100}` and strings for percentages: `maxWidth="100%"`.
     */
    maxWidth?: Dimension;
    /**
     * Use numbers for pixels: `minWidth={100}` and strings for percentages: `minWidth="100%"`. Can be used to fix overflowing children; see [the example](https://gestalt.pinterest.systems/web/flex#FlexItem-minWidth) to learn more.
     */
    minWidth?: Dimension;
    /**
     *  Ref that is forwarded to the underlying div element.
     */
    ref?: HTMLDivElement;
};
/**
 * Use [Flex.Item](https://gestalt.pinterest.systems/web/flex) within a Flex container for more precise control over the child element. Flex children that are not explicitly wrapped in Flex.Item will be wrapped in the the component automatically to apply `gap` spacing.
 */
declare const FlexItemWithForwardRef: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default FlexItemWithForwardRef;
