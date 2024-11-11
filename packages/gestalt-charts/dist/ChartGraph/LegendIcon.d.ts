type Props = {
    /**
      Data received from  the `renderTooltip`.
  
      See the [custom tooltip variant](https://gestalt.pinterest.systems/web/chartgraph#Tooltip) for implementation guidance.
      */
    payloadData: {
        dataKey: string;
        name: string;
        stroke: string | null | undefined;
        value: number;
        strokeDasharray: string | null | undefined | number;
        strokeWidth?: number;
        color: string | null | undefined;
        fill: string | null | undefined;
        legendType?: 'line' | 'rect';
        isLegend?: boolean;
    } | {
        referenceArea: 'default';
        isLegend?: boolean;
    };
};
/**
 * [LegendIcon](https://gestalt.pinterest.systems/web/chartgraph) should only be used within custom tooltips. See the [custom tooltip variant](https://gestalt.pinterest.systems/web/chartgraph#Tooltip) for implementation guidance.
 */
declare function LegendIcon({ payloadData }: Props): import("react/jsx-runtime").JSX.Element | undefined;
export default LegendIcon;
