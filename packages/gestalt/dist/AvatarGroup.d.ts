type UnionRefs = HTMLDivElement | HTMLAnchorElement;
type Props = {
    /**
     * Label for screen readers to announce AvatarGroup.
     *
     * See the [Accessibility guidelines](https://gestalt.pinterest.systems/web/avatargroup#Accessibility) for details on proper usage.
     */
    accessibilityLabel: string;
    /**
     * Specify the `id` of an associated element (or elements) whose contents or visibility are controlled by a component so that screen reader users can identify the relationship between elements. Optional with button-role component.
     *
     * See the [Accessibility guidelines](https://gestalt.pinterest.systems/web/avatargroup#Accessibility) for details on proper usage.
     */
    accessibilityControls?: string;
    /**
     * Indicate that a component hides or exposes collapsible components and expose whether they are currently expanded or collapsed. Optional with button-role component.
     *
     * See the [Accessibility guidelines](https://gestalt.pinterest.systems/web/avatargroup#Accessibility) for details on proper usage.
     */
    accessibilityExpanded?: boolean;
    /**
     * Indicate that a component controls the appearance of interactive popup elements, such as menu or dialog. Optional with button-role component.
     *
     * See the [Accessibility guidelines](https://gestalt.pinterest.systems/web/avatargroup#Accessibility) for details on proper usage.
     */
    accessibilityHaspopup?: boolean;
    /**
     * When supplied, it appends an `add` [icon](https://gestalt.pinterest.systems/web/icon) to the avatar pile as a call to action to the user. Not available for 'xs' size. See [Best Practices](https://gestalt.pinterest.systems/web/avatargroup#Best-practices) for more info.
     */
    addCollaborators?: boolean;
    /**
     * The user group data. See the [collaborators display](https://gestalt.pinterest.systems/web/avatargroup#Collaborators-display) variant to learn more.
     */
    collaborators: ReadonlyArray<{
        color?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
        name: string;
        src?: string;
    }>;
    /**
     * When supplied, wraps the component in a link, and directs users to the url when item is selected. See the [role](https://gestalt.pinterest.systems/web/avatargroup#Role) variant to learn more.
     */
    href?: string;
    /**
     * Callback fired when the component is clicked (pressed and released) with a mouse or keyboard. See the [role](https://gestalt.pinterest.systems/web/avatargroup#Role) variant to learn more and see [TapArea's `onTap`](https://gestalt.pinterest.systems/web/taparea#Props-onTap) for more info about `OnTapType`.
     */
    onClick?: (arg1: {
        event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>;
        dangerouslyDisableOnNavigation: () => void;
    }) => void;
    /**
     * Forward the ref to the underlying div or anchor element. See the [role](https://gestalt.pinterest.systems/web/avatargroup#Role) variant to learn more.
     */
    ref?: UnionRefs;
    /**
     * Allows user interaction with the component. See the [role](https://gestalt.pinterest.systems/web/avatargroup#Role) variant to learn more.
     */
    role?: 'link' | 'button';
    /**
     * The maximum height of AvatarGroup. If size is `fit`, AvatarGroup will fill 100% of the parent container width. See the [fixed size](https://gestalt.pinterest.systems/web/avatargroup#Fixed-sizes) and [responsive size](https://gestalt.pinterest.systems/web/avatargroup#Responsive-sizing) variant to learn more.
     */
    size?: 'xs' | 'sm' | 'md' | 'fit';
};
/**
 * [AvatarGroup](https://gestalt.pinterest.systems/web/avatargroup) is used to both display a group of user avatars and, optionally, control actions related to the users group.
 *
 * ![AvatarGroup light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/AvatarGroup.spec.ts-snapshots/AvatarGroup-chromium-darwin.png)
 * ![AvatarGroup dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/AvatarGroup-dark.spec.ts-snapshots/AvatarGroup-dark-chromium-darwin.png)
 */
declare const AvatarGroupWithForwardRef: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<UnionRefs>>;
export default AvatarGroupWithForwardRef;
