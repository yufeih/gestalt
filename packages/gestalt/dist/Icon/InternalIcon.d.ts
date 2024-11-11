import icons from '../icons/index';
import compactIconsVR from '../icons-vr-theme/compact/index';
export type IconColor = 'default' | 'disabled' | 'subtle' | 'success' | 'error' | 'warning' | 'info' | 'recommendation' | 'inverse' | 'shopping' | 'brandPrimary' | 'light' | 'dark';
type IconName = keyof typeof icons | keyof typeof compactIconsVR;
type Props = {
    accessibilityLabel: string;
    color?: IconColor;
    dataTestId?: string;
    icon?: IconName;
    dangerouslySetSvgPath?: {
        __path: string;
    };
    inline?: boolean;
    size?: number | string;
};
/**
 * [Icons](https://gestalt.pinterest.systems/web/icon) are the symbolic representation of an action or information, providing visual context and improving usability.
 *
 * See the [Iconography and SVG guidelines](https://gestalt.pinterest.systems/foundations/iconography/library) to explore the full icon library.
 *
 * ![Icon light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/Icon-list.spec.ts-snapshots/Icon-list-chromium-darwin.png)
 * ![Icon dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/Icon-list-dark.spec.ts-snapshots/Icon-list-dark-chromium-darwin.png)
 *
 */
declare function InternalIcon({ accessibilityLabel, color, dangerouslySetSvgPath, dataTestId, icon, inline, size, }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace InternalIcon {
    var icons: readonly IconName[];
    var displayName: string;
}
export default InternalIcon;
