import { Cache } from './Cache';
import { Position } from './types';
export declare const MULTI_COL_ITEMS_MEASURE_BATCH_SIZE = 5;
type GridSize = 'sm' | 'md' | 'lg' | 'xl';
export type ColumnSpanConfig = number | {
    [Size in GridSize]: number;
};
export declare function columnCountToGridSize(columnCount: number): GridSize;
export declare function initializeHeightsArray<T>({ centerOffset, columnCount, columnWidthAndGutter, gutter, items, positionCache, _getColumnSpanConfig, }: {
    centerOffset: number;
    columnCount: number;
    columnWidthAndGutter: number;
    gutter: number;
    items: ReadonlyArray<T>;
    positionCache: Cache<T, Position> | null | undefined;
    _getColumnSpanConfig: (item: T) => ColumnSpanConfig;
}): ReadonlyArray<number>;
declare const multiColumnLayout: <T>({ items, gutter, columnWidth, columnCount, centerOffset, logWhitespace, measurementCache, positionCache, earlyBailout, _getColumnSpanConfig, }: {
    items: ReadonlyArray<T>;
    gutter?: number;
    columnWidth?: number;
    columnCount?: number;
    centerOffset?: number;
    positionCache: Cache<T, Position>;
    measurementCache: Cache<T, number>;
    earlyBailout?: (columnSpan: number) => number;
    logWhitespace?: (additionalWhitespace: ReadonlyArray<number>, numberOfIterations: number, columnSpan: number) => void;
    _getColumnSpanConfig: (item: T) => ColumnSpanConfig;
}) => ReadonlyArray<Position>;
export default multiColumnLayout;
