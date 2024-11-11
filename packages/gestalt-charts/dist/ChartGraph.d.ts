import { ReactElement, ReactNode } from 'react';
interface Indexable {
    index(): number;
}
type Props = {
    /**
     * Label to provide more context around ChartGraph’s content.
     *
     * See the [accessibility guidelines on ARIA attributes](https://gestalt.pinterest.systems/web/chartgraph#ARIA-attributes) to learn more.
     */
    accessibilityLabel: string;
    /**
     * Must be instances of [TagData](https://gestalt.pinterest.systems/web/tagdata) or [TileData](https://gestalt.pinterest.systems/web/tiledata)
     *
     * See the [selector variant](https://gestalt.pinterest.systems/web/chartgraph#Selectors) to learn more.
     */
    children?: ReactNode;
    /**
     * The source data, in which each element is an object. Each object must specify a "name" associated to each category (string value) or timestamp (numberic value) in time series charts.
     *
     * The additional key-values represent one or more series of data presented on ChartGraph for each category or timestamp. A sequence of source data objects generate one or more series of data across categories or timestamps.
     */
    data: ReadonlyArray<{
        name: string | number;
        [key: string]: number;
    }>;
    /**
     * The series elements, bars or lines, of the ChartGraph.
     *
     * See the [combo variants](https://gestalt.pinterest.systems/web/chartgraph#Layout), [color variant](https://gestalt.pinterest.systems/web/chartgraph#Combo), [layout](https://gestalt.pinterest.systems/web/chartgraph#Layout), [color variant](https://gestalt.pinterest.systems/web/chartgraph#Color), [precision in line graphs variant](https://gestalt.pinterest.systems/web/chartgraph#Precision-in-line-graphs) to learn more about configuring bars and lines.
     */
    elements: ReadonlyArray<{
        axis?: 'left' | 'right' | 'bottom' | 'top';
        color?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
        id: string;
        precision?: 'exact' | 'estimate';
        type: 'line' | 'bar';
    }>;
    /**
     * [HelpButton](https://gestalt.pinterest.systems/web/helpbutton) to be placed after the title for to provide supplemental support to the user. See the [header variant](https://gestalt.pinterest.systems/web/chartgraph#Header) to learn more.
     */
    helpButton?: ReactElement;
    /**
     * Callback fired when the Accessibility IconButton in ChartGraph is clicked. ChartGraph's visual patterns is a controlled feature. `onVisualPatternChange` is used to enable/disable visual patterns in ChartGraph.
     *
     * See the [accessibility guidelines on visual patterns](https://gestalt.pinterest.systems/web/chartgraph#Visual-patterns) to learn more.
     */
    onVisualPatternChange: () => void;
    /**
     * ChartGraph's visual patterns is a controlled feature. `visualPatternSelected` manages visual patterns in ChartGraph. When ChartGraph represents a standalone data series that don't require comparison, the Accessibility IconButton can be hidden with "disabled".
     *
     * See the [accessibility guidelines on visual patterns](https://gestalt.pinterest.systems/web/chartgraph#Visual-patterns) to learn more.
     */
    visualPatternSelected: 'disabled' | 'default' | 'visualPattern';
    /**
     * Description of ChartGraph. Be sure to localize the text.
     *
     * See the [header variant](https://gestalt.pinterest.systems/web/chartgraph#Header) to learn more.
     */
    description?: string;
    /**
     * The start and end values of the axis.
     *
     * See the [range variant](https://gestalt.pinterest.systems/web/chartgraph#Range) to learn more.
     */
    range?: [
        number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
        number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
    ] | {
        xAxisBottom?: [
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
        ];
        xAxisTop?: [
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
        ];
        yAxisLeft?: [
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
        ];
        yAxisRight?: [
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
        ];
    };
    /**
     * Replaces the labels from `data` in default tooltips, legends, and axis. Use for lacalization.
     *
     * See the [localizations section](https://gestalt.pinterest.systems/web/chartgraph#Localization) to learn more.
     */
    labelMap?: {
        [key: string]: string;
    };
    /**
     * Sets the horizontal or vertical layout of bars and lines and the single or double axis in the chart.
     *
     * See the [layout variant](https://gestalt.pinterest.systems/web/chartgraph#Layout) to learn more.
     */
    layout?: 'horizontal' | 'vertical' | 'horizontalBiaxial' | 'verticalBiaxial';
    /**
     * Displays data about the datasets that are appearing on the chart.
     *
     * See the [legend variant](https://gestalt.pinterest.systems/web/chartgraph#Legend) to learn more.
     */
    legend?: 'auto' | 'none';
    /**
     * Sets non-data visual areas in ChartGraph.
     *
     * See the [reference area variant](https://gestalt.pinterest.systems/web/chartgraph#ReferenceArea) to learn more.
     */
    referenceAreas?: ReadonlyArray<{
        id: string;
        label: string;
        x1: string | number;
        x2: string | number;
        y1: string | number;
        y2: string | number;
        yAxisId: string;
        style?: 'default';
    }>;
    /**
     * Displays data about the datasets on hover over each data point.
     *
     * See the [tooltip variant](https://gestalt.pinterest.systems/web/chartgraph#Tooltip) to learn more.
     */
    renderTooltip?: 'auto' | 'none' | ((arg1: {
        active: boolean | null | undefined;
        payload: Record<any, any> | null | undefined;
        label: string | number;
    }) => ReactNode);
    /**
     * When set to "true", bars are stacked.
     *
     * See the [stacked bars variant](https://gestalt.pinterest.systems/web/chartgraph#Stacked-bars) to learn more.
     */
    stacked?: boolean;
    /**
     * Title of ChartGraph. Be sure to localize the text.
     *
     * See the [header variant](https://gestalt.pinterest.systems/web/chartgraph#Header) to learn more.
     */
    title: string;
    /**
     * Whether the title should be visible or not. If hidden, the title is still available in the tabular representation modal.
     */
    titleDisplay?: 'visible' | 'hidden';
    /**
     * ChartGraph is responsive. If your ChartGraph's width is below the 576 px breakpoint, ChartGraph will flick and correct the amount of ticks. To prevent that, set initialTicks to 3. ChartGraph above 576 px, don't require this adjusment.
     *
     * See the [color variant](https://gestalt.pinterest.systems/web/chartgraph#Colors) for implementation guidance.
     */
    initialTicks?: 'auto' | 3;
    /**
     * A function for formatting ticks on the axis.
     *
     * Timeseries require the 'timeseries' key for formatting dates in the axis and tooltip. The 'xAxisBottom' overrides 'timeseries' when are both present.
     *
     * See the [tick format variant](https://gestalt.pinterest.systems/web/chartgraph#Tick-format) and [time series variant](https://gestalt.pinterest.systems/web/chartgraph#Time-series) to learn more
     */
    tickFormatter?: {
        timeseries?: (arg1: number) => string | number;
        xAxisTop?: (arg1: number, arg2: number) => string | number;
        xAxisBottom?: (arg1: number, arg2: number) => string | number;
        yAxisRight?: (arg1: number, arg2: number) => string | number;
        yAxisLeft?: (arg1: number, arg2: number) => string | number;
    };
    /**
     * Type of chart.
     * See the [types variant](https://gestalt.pinterest.systems/web/chartgraph#Types) to learn more.
     */
    type?: 'combo' | 'line' | 'bar';
    /**
     * An object representing the zIndex value of the tabular representation modal. Learn more about [zIndex classes](https://gestalt.pinterest.systems/web/zindex_classes)
     */
    modalZIndex?: Indexable;
};
/**
 * [ChartGraph](https://gestalt.pinterest.systems/web/chartgraph) is used for displaying various types of graphs plotted on an x and y axis. It makes it easier to identify and understand patterns over time across different categories, enabling people to make informed decisions quickly.
 * ![ChartGraph light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/ChartGraph.spec.ts-snapshots/ChartGraph-chromium-darwin.png)
 * ![ChartGraph dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/ChartGraph-dark.spec.ts-snapshots/ChartGraph-dark-chromium-darwin.png)
 */
declare function ChartGraph({ accessibilityLabel, visualPatternSelected, data, description, initialTicks, range, helpButton, elements, layout: externalLayout, labelMap, legend, modalZIndex, onVisualPatternChange, stacked, tickFormatter, children, titleDisplay, title, type, referenceAreas, renderTooltip, }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace ChartGraph {
    var LegendIcon: typeof import("./ChartGraph/LegendIcon").default;
    var displayName: string;
}
export default ChartGraph;
