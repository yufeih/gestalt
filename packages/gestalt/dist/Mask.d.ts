import { ReactNode } from 'react';
type Rounding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 'circle';
type Props = {
    /**
     * The content to be masked.
     */
    children?: ReactNode;
    /**
     * Use numbers for pixels (`height={100}`) and strings for percentages (`height="100%"`).
     */
    height?: number | string;
    /**
     * Specifies the corner radius to apply. See the [Rounding example](https://gestalt.pinterest.systems/web/mask#roundingCombinations) for more details.
     */
    rounding?: Rounding;
    /**
     * Applies a wash to provide contrast when the masked content is nearly white. See the [Wash example](https://gestalt.pinterest.systems/web/mask#wash) for more details.
     */
    wash?: boolean;
    /**
     * Use numbers for pixels (`width={100}`) and strings for percentages (`width="100%"`).
     */
    width?: number | string;
    /**
     * Mask applies the style `will-change: transform` by default as a performance optimization. In certain specific scenarios, this can be problematic. This prop can be used to turn off that optimization. See the [willChangeTransform example](https://gestalt.pinterest.systems/web/mask#willChangeTransform) for more details.
     */
    willChangeTransform?: boolean;
};
/**
 * [Mask](https://gestalt.pinterest.systems/web/mask) is used to display content in a specific shape.
 *
 * ![Mask light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/Mask.spec.ts-snapshots/Mask-chromium-darwin.png)
 *
 */
declare function Mask({ children, rounding, width, height, willChangeTransform, wash, }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace Mask {
    var displayName: string;
}
export default Mask;
