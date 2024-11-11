import { Cache } from './Cache';
import { ColumnSpanConfig } from './multiColumnLayout';
import { Align, Layout, LoadingStateItem, Position } from './types';
export default function getLayoutAlgorithm<T>({ align, columnWidth, gutter, items, layout, measurementStore, minCols, positionStore, width, _getColumnSpanConfig, _logTwoColWhitespace, _loadingStateItems, renderLoadingState, _earlyBailout, }: {
    align: Align;
    columnWidth: number | undefined;
    gutter?: number;
    items: ReadonlyArray<T>;
    layout: Layout;
    measurementStore: Cache<T, number>;
    minCols: number;
    positionStore: Cache<T, Position>;
    width: number | null | undefined;
    _getColumnSpanConfig?: (item: T) => ColumnSpanConfig;
    _logTwoColWhitespace?: (additionalWhitespace: ReadonlyArray<number>, numberOfIterations: number, columnSpan: number) => void;
    _loadingStateItems?: ReadonlyArray<LoadingStateItem>;
    renderLoadingState?: boolean;
    _earlyBailout?: (columnSpan: number) => number;
}): (items: ReadonlyArray<T> | ReadonlyArray<LoadingStateItem>) => ReadonlyArray<Position>;
