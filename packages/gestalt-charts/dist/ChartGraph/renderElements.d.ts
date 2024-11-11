import { ReactNode } from 'react';
import { DataVisualizationColors } from './types';
type Props = {
    stacked: boolean | null | undefined;
    elements: ReadonlyArray<{
        type: 'line' | 'bar';
        axis?: 'left' | 'right' | 'bottom' | 'top';
        id: string;
        color?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
        precision?: 'exact' | 'estimate';
    }>;
    layout: 'horizontal' | 'vertical' | 'horizontalBiaxial' | 'verticalBiaxial';
    hexColor: (arg1: DataVisualizationColors) => string;
    visualPatternSelected: 'visualPattern' | 'default' | 'disabled';
    isHorizontalLayout: boolean;
    isBarRounded: boolean;
};
export default function renderElements({ elements, layout, stacked, hexColor, visualPatternSelected, isHorizontalLayout, isBarRounded, }: Props): ReadonlyArray<ReactNode>;
export {};
