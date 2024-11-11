import { Cache } from './Cache';
import { ColumnSpanConfig } from './multiColumnLayout';
import { LoadingStateItem, Position } from './types';
declare const fullWidthLayout: <T>({ width, idealColumnWidth, gutter, minCols, measurementCache, _getColumnSpanConfig, renderLoadingState, ...otherProps }: {
    idealColumnWidth?: number;
    gutter?: number;
    minCols?: number;
    width?: number | null | undefined;
    positionCache: Cache<T, Position>;
    measurementCache: Cache<T, number>;
    _getColumnSpanConfig?: (item: T) => ColumnSpanConfig;
    earlyBailout?: (columnSpan: number) => number;
    logWhitespace?: (additionalWhitespace: ReadonlyArray<number>, numberOfIterations: number, columnSpan: number) => void;
    renderLoadingState?: boolean;
}) => ((items: ReadonlyArray<T> | ReadonlyArray<LoadingStateItem>) => ReadonlyArray<Position>);
export default fullWidthLayout;
