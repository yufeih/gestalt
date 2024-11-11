import { Cache } from './Cache';
import { LoadingStateItem, Position } from './types';
declare const uniformRowLayout: <T>({ cache, columnWidth: idealColumnWidth, flexible, gutter, width, minCols, renderLoadingState, }: {
    cache: Cache<T, number>;
    columnWidth?: number;
    flexible?: boolean;
    gutter?: number;
    width?: number | null | undefined;
    minCols?: number;
    renderLoadingState?: boolean;
}) => ((items: ReadonlyArray<T> | ReadonlyArray<LoadingStateItem>) => ReadonlyArray<Position>);
export default uniformRowLayout;
