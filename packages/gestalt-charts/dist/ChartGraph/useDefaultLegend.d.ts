import { ReactNode } from 'react';
type ReferenceAreaSummaryItem = {
    label: string;
    style?: 'default';
};
export default function useDefaultLegend({ isHorizontalBiaxialLayout, isVerticalBiaxialLayout, isRtl, height, labelMap, setLegendHeight, referenceAreaSummary, }: {
    isHorizontalBiaxialLayout: boolean;
    isVerticalBiaxialLayout: boolean;
    isRtl: boolean;
    height: number;
    labelMap: {
        [key: string]: string;
    } | null | undefined;
    setLegendHeight: (arg1: number) => void;
    referenceAreaSummary: null | ReadonlyArray<ReferenceAreaSummaryItem>;
}): (arg1: {
    payload: ReadonlyArray<{
        payload: {
            color: string | null | undefined;
            dataKey: string;
            fill: string | null | undefined;
            name: string;
            stroke: string | null | undefined;
            strokeDasharray: string | number | null | undefined;
            value: number;
        };
    }>;
}) => ReactNode;
export {};
