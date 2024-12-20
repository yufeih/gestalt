type Props = {
    /**
     * Used to hide the element. See the [paused variant](https://gestalt.pinterest.systems/web/pulsar#Paused) for more details.
     */
    paused?: boolean;
    /**
     * The size of the element in pixels. See the [size variant](https://gestalt.pinterest.systems/web/pulsar#Size) for more details.
     */
    size?: number;
};
/**
 * [Pulsar](https://gestalt.pinterest.systems/web/pulsar ) brings focus to a specific element on the screen, acting like "training wheels" to guide people towards the intended way to perform the action. Pulsar is used in isolation or combination with other education components for more instruction.
 *
 * ![Pulsar light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/Pulsar.spec.ts-snapshots/Pulsar-chromium-darwin.png)
 * ![Pulsar dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/Pulsar-dark.spec.ts-snapshots/Pulsar-dark-chromium-darwin.png)
 */
declare function Pulsar({ paused, size }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace Pulsar {
    var displayName: string;
}
export default Pulsar;
