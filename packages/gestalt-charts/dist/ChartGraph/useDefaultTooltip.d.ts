import { ReactNode } from 'react';
export default function useDefaultTooltip({ isDarkMode, labelMap, isTimeSeries, isRtl, tickFormatter, }: {
    isDarkMode: boolean;
    labelMap: {
        [key: string]: string;
    } | null | undefined;
    tickFormatter?: {
        timeseries?: (arg1: number) => string | number;
        xAxisTop?: (arg1: number, arg2: number) => string | number;
        xAxisBottom?: (arg1: number, arg2: number) => string | number;
        yAxisRight?: (arg1: number, arg2: number) => string | number;
        yAxisLeft?: (arg1: number, arg2: number) => string | number;
    };
    isTimeSeries?: boolean;
    isRtl: boolean;
}): (arg1: {
    active: boolean;
    payload: ReadonlyArray<{
        dataKey: string;
        name: string;
        stroke: string | null | undefined;
        value: number;
        strokeDasharray: string | null | undefined | number;
        color: string | null | undefined;
        fill: string | null | undefined;
        legendType?: 'line' | 'rect';
        isLegend?: boolean;
        strokeWidth?: number;
    }>;
    label: number | string;
}) => ReactNode;
