import { LoadingStateItem } from './types';
export declare function isLoadingStateItem<T>(item: T | LoadingStateItem, renderLoadingState?: boolean): item is LoadingStateItem;
export declare function isLoadingStateItems<T>(items: ReadonlyArray<T> | ReadonlyArray<LoadingStateItem>, renderLoadingState?: boolean): items is ReadonlyArray<LoadingStateItem>;
