import { ReactNode } from 'react';
type Props = {
    /**
     * The content of the label, typically [Text](https://gestalt.pinterest.systems/web/text) or similar.
     */
    children?: ReactNode;
    /**
     * Unique id of the element this label is describing.
     */
    htmlFor: string;
};
/**
 * Use the [Label](https://gestalt.pinterest.systems/web/label) component to connect a label with a form component in an accessible way.
 *
 * ![Label light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/Label.spec.ts-snapshots/Label-chromium-darwin.png)
 * ![Label dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/Label-dark.spec.ts-snapshots/Label-dark-chromium-darwin.png)
 *
 */
declare function Label({ children, htmlFor }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace Label {
    var displayName: string;
}
export default Label;
