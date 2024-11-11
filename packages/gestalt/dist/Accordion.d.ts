import { ReactElement, ReactNode } from 'react';
import AccordionExpandable from './AccordionExpandable';
import icons from './icons/index';
type BadgeType = {
    text: string;
    type?: 'info' | 'error' | 'warning' | 'success' | 'neutral' | 'recommendation' | 'darkWash' | 'lightWash';
};
type Props = {
    /**
     * Add a badge displayed after the title. Will not be displayed if `title` is not provided. Not to be used with `icon` or `iconButton`. Be sure to localize the text. See the [badge variant](https://gestalt.pinterest.systems/web/accordion#Static-Badge) for more details.
     */
    badge?: BadgeType;
    /**
     * Specify a border. See [Box's border options](https://gestalt.pinterest.systems/web/box#Borders)
     */
    borderStyle?: 'sm' | 'shadow' | 'none';
    /**
     * Content to display underneath Accordion title.
     */
    children?: ReactNode;
    /**
     * Available for testing purposes, if needed. Consider [better queries](https://testing-library.com/docs/queries/about/#priority) before using this prop.
     */
    dataTestId?: string;
    /**
     * Name of icon to display in front of title. Will not be displayed if `title` is not provided. Not to be used with `badge` or `iconButton`. For a full list of icons, see [Iconography and SVGs](https://gestalt.pinterest.systems/foundations/iconography/library#Search-icon-library). See the [icon variant](https://gestalt.pinterest.systems/web/accordion#Static-Icon) for more details.
     */
    icon?: keyof typeof icons;
    /**
     * Label to provide information about the icon used for screen readers. Can be used in two scenarios: to describe the error icon that appears when `type` is `error`, and to describe the provided `icon` prop when `type` is `info`. Be sure to localize the label. See the [icon variant](https://gestalt.pinterest.systems/web/accordion#Static-Icon) for more details.
     */
    iconAccessibilityLabel?: string;
    /**
     * IconButton element to be placed after the `title` for a supplemental Call To Action (CTA). Will not be displayed if `title` is not provided. Not to be used with `badge` or `icon`. See the [icon button variant](https://gestalt.pinterest.systems/web/accordion#Static-IconButton) for more details.
     */
    iconButton?: ReactElement;
    /**
     * Unique id to identify this Accordion
     */
    id: string;
    /**
     * Sets the size of the Accordion. See the [size variant](https://gestalt.pinterest.systems.com/web/accordion#size) to learn more.
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Title of this Accordion. Be sure to localize the text.
     */
    title?: string;
    /**
     * If set to `error`, displays error icon and changes title to red text. Be sure to provide an `iconAccessibilityLabel` when set to `error`. See the [error variant](https://gestalt.pinterest.systems/web/accordion#Static-Error) for more details.
     */
    type?: 'error' | 'info';
};
/**
 * [Accordion](https://gestalt.pinterest.systems/web/accordion) is a container that can be expanded and collapsed to show content about a single subject. Its contents can be visible at all items, or expand and collapse as an individual item or a group of items.
 *
 * ![Accordion light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/Accordion.spec.ts-snapshots/Accordion-chromium-darwin.png)
 * ![Accordion dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/Accordion-dark.spec.ts-snapshots/Accordion-dark-chromium-darwin.png)
 *
 */
declare function Accordion({ badge, borderStyle, children, dataTestId, icon, iconAccessibilityLabel, iconButton, id, title, size, type, }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace Accordion {
    var displayName: string;
    var Expandable: typeof AccordionExpandable;
}
export default Accordion;