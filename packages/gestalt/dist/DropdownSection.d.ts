import { ReactNode } from 'react';
type Props = {
    /**
     * Any [Dropdown.Items](https://gestalt.pinterest.systems/web/dropdown#Dropdown.ItemProps) and/or [Dropdown.Links](https://gestalt.pinterest.systems/web/dropdown#Dropdown.LinkProps) to be rendered
     */
    children: ReactNode;
    /**
     * Label for the section. See the [Sections](https://gestalt.pinterest.systems/web/dropdown#Sections) variant for more info.
     */
    label: string;
};
/**
 * Use [Dropdown.Section](https://gestalt.pinterest.systems/web/dropdown#Dropdown.Section) to create hierarchy within a single Dropdown.
 */
declare function DropdownSection({ label, children }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace DropdownSection {
    var displayName: string;
}
export default DropdownSection;
