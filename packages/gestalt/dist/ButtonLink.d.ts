import { ComponentProps } from 'react';
import Button from './Button';
import icons from './icons/index';
type ButtonProps = {
    /**
     * Label to provide more context around ButtonLink’s function or purpose. See the [Accessibility guidelines](/foundations/accessibility) to learn more.,
     */
    accessibilityLabel?: string;
    /**
     * The background color of ButtonLink.
     */
    color?: ComponentProps<typeof Button>['color'];
    /**
     * Available for testing purposes, if needed. Consider [better queries](https://testing-library.com/docs/queries/about/#priority) before using this prop.
     */
    dataTestId?: string;
    /**
     * Indicates if ButtonLink is disabled. Disabled Buttons are inactive and cannot be interacted with.
     */
    disabled?: boolean;
    /**
     * Indicates whether this component is hosted in a light or dark container.
     * Used for improving focus ring color contrast.
     */
    focusColor?: 'lightBackground' | 'darkBackground';
    /**
     * An icon displayed after the text to help clarify the usage of ButtonLink. See the [icon variant](#Icons) to learn more.
     */
    iconEnd?: keyof typeof icons;
    /**
     * An icon displayed before the text to help clarify the usage of ButtonLink. See the [icon variant](#Icons) to learn more.
     */
    iconStart?: keyof typeof icons;
    /**
     * Default Buttons are sized by the text within the ButtonLink whereas full-width Buttons expand to the full width of their container.
     */
    fullWidth?: boolean;
    /**
     * Use "-1" to remove ButtonLink from keyboard navigation. See the [Accessibility guidelines](/foundations/accessibility) to learn more.
     */
    tabIndex?: -1 | 0;
    /**
       * Callback invoked when the user clicks (press and release) on ButtonLink with the mouse or keyboard.
         See [GlobalEventsHandlerProvider](/web/utilities/globaleventshandlerprovider#Link-handlers) to learn more about link navigation.
       */
    onClick?: (arg1: {
        event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>;
        dangerouslyDisableOnNavigation: () => void;
    }) => void;
    /**
     * sm: 32px, md: 40px, lg: 48px
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Text to render inside the ButtonLink to convey the function and purpose of the ButtonLink.
     */
    text: string;
    /**
     * Specifies a link URL.
     */
    href: string;
    /**
     * Provides hints for SEO. See the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel) to learn more.
     */
    rel?: 'none' | 'nofollow';
    /**
       * Indicates the browsing context where an href will be opened:
    - 'null' opens the anchor in the same window.
    - 'blank' opens the anchor in a new window.
    - 'self' opens an anchor in the same frame.
       */
    target?: null | 'self' | 'blank';
};
/**
 * [ButtonLink](https://gestalt.pinterest.systems/buttonlink) is mainly used as a navigational element to direct users to a new page or location.
 *
 * ![ButtonLink light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/ButtonLink.spec.ts-snapshots/ButtonLink-chromium-darwin.png)
 * ![ButtonLink dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/ButtonLink-dark.spec.ts-snapshots/ButtonLink-dark-chromium-darwin.png)
 */
declare const ButtonLinkWithForwardRef: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLAnchorElement>>;
export default ButtonLinkWithForwardRef;
