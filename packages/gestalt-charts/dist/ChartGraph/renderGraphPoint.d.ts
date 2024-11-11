import { ReactNode } from 'react';
import { DataVisualizationColors } from './types';
type Props = {
    noReposition?: boolean;
    color: DataVisualizationColors;
    cx: number;
    cy: number;
};
export declare function GraphPoint({ color, cx, cy, noReposition }: Props): import("react/jsx-runtime").JSX.Element | null;
declare const renderGraphPoint: (options: {
    color: DataVisualizationColors;
    active: boolean;
}) => (props: {
    cx: number;
    cy: number;
}) => ReactNode;
export default renderGraphPoint;
