import { Cache } from './Cache';
import { ColumnSpanConfig } from './multiColumnLayout';
import { Align, Layout, LoadingStateItem, Position } from './types';
declare const defaultLayout: <T>({ align, columnWidth, gutter, layout, minCols, rawItemCount, width, measurementCache, _getColumnSpanConfig, renderLoadingState, ...otherProps }: {
    columnWidth?: number;
    gutter?: number;
    align: Align;
    layout: Layout;
    minCols?: number;
    rawItemCount: number;
    width?: number | null | undefined;
    positionCache: Cache<T, Position>;
    measurementCache: Cache<T, number>;
    _getColumnSpanConfig?: (item: T) => ColumnSpanConfig;
    earlyBailout?: (columnSpan: number) => number;
    logWhitespace?: (additionalWhitespace: ReadonlyArray<number>, numberOfIterations: number, columnSpan: number) => void;
    renderLoadingState?: boolean;
}) => ((items: ReadonlyArray<T> | ReadonlyArray<LoadingStateItem>) => ReadonlyArray<Position>);
export default defaultLayout;
