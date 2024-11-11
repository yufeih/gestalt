import { ReactNode } from 'react';
type FocusEventHandler = (arg1: {
    event: React.FocusEvent<HTMLAnchorElement>;
}) => void;
type MouseEventHandler = (arg1: {
    event: React.MouseEvent<HTMLAnchorElement>;
}) => void;
type KeyboardEventHandler = (arg1: {
    event: React.KeyboardEvent<HTMLAnchorElement>;
}) => void;
type Props = {
    /**
     * For accessibility purposes. When you have a group of related elements with one element in the group styled differently from the others to indicate that this is the current element within its group, accessibilityCurrent should be used to inform the assistive technology user what has been indicated via styling.
     * Accessibility: It populates aria-current.
     */
    accessibilityCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | 'section';
    /**
     * Supply a short, descriptive label for screen-readers to replace TapArea texts that do not provide sufficient context about the button component behavior.
     * Accessibility: It populates aria-label.
     */
    accessibilityLabel?: string;
    /**
     * TapAreaLink is a wrapper around non-button components (or children) that provides clicking / touching functionality as if they were a unified button area.
     */
    children: ReactNode;
    /**
     * Available for testing purposes, if needed. Consider [better queries](https://testing-library.com/docs/queries/about/#priority) before using this prop.
     */
    dataTestId?: string;
    /**
     * Set disabled state so TapAreaLink cannot be interacted with and actions are not available.
     */
    disabled?: boolean;
    /**
     * Indicates whether this component is hosted in a light or dark container.
     * Used for improving focus ring color contrast.
     */
    focusColor?: 'lightBackground' | 'darkBackground';
    /**
     * Indicates whether this component presents a light ('default') or dark ('inverse') inner focus border when focused.
     * Used for improving focus ring color contrast.
     */
    innerFocusColor?: 'default' | 'inverse';
    /**
     * Set the TapAreaLink height to expand to the full height of the parent.
     */
    fullHeight?: boolean;
    /**
     * Set the TapAreaLink width to expand to the full width of the parent.
     */
    fullWidth?: boolean;
    /**
     * Specify a link URL.
     */
    href: string;
    /**
     * Select a mouse cursor type to convey the TapAreaLink expected behavior
     */
    mouseCursor?: 'copy' | 'grab' | 'grabbing' | 'move' | 'noDrop' | 'pointer' | 'zoomIn' | 'zoomOut';
    /**
     * Callback fired when a TapAreaLink component loses focus
     */
    onBlur?: FocusEventHandler;
    /**
     * Callback fired when a TapAreaLink component gets focus via keyboard navigation, mouse click (pressed), or focus method
     */
    onFocus?: FocusEventHandler;
    /**
     * Callback fired when a keyboard key is pressed
     */
    onKeyDown?: KeyboardEventHandler;
    /**
     * Callback fired when a click event begins
     */
    onMouseDown?: MouseEventHandler;
    /**
     * Callback fired when a click event ends
     */
    onMouseUp?: MouseEventHandler;
    /**
     * Callback fired when a mouse pointer moves onto a TapAreaLink component
     */
    onMouseEnter?: MouseEventHandler;
    /**
     * Callback fired when a mouse pointer moves out a TapAreaLink component
     */
    onMouseLeave?: MouseEventHandler;
    /**
     * Callback fired when a TapAreaLink component is clicked (pressed and released) with a mouse or keyboard
     */
    onTap?: (arg1: {
        event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>;
        dangerouslyDisableOnNavigation: () => void;
    }) => void;
    /**
     * Provides hints for SEO. See the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel) to learn more
     */
    rel?: 'none' | 'nofollow';
    /**
     * .
     */
    rounding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 'circle' | 'pill';
    /**
     * Use "-1" to remove Button from keyboard navigation. See the [Accessibility guidelines](/foundations/accessibility) to learn more.
     */
    tabIndex?: -1 | 0;
    /**
       * Indicates the browsing context where an href will be opened:
    - 'null' opens the anchor in the same window.
    - 'blank' opens the anchor in a new window.
    - 'self' opens an anchor in the same frame.
       */
    target?: null | 'self' | 'blank';
    /**
       * Set a compressing behavior when the TapAreaLink is clicked / touched
    - 'none' does not compress TapArea.
    - 'compress' scales down TapArea.
       */
    tapStyle?: 'none' | 'compress';
};
/**
 * [TapAreaLink](https://gestalt.pinterest.systems/tapArea) is mainly used as navigational element
 *
 * ![TapAreaLink](https://raw.githubusercontent.com/pinterest/gestalt/master/docs/graphics/building-blocks/TapArea.svg)
 */
declare const TapAreaLinkWithForwardRef: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLAnchorElement>>;
export default TapAreaLinkWithForwardRef;
