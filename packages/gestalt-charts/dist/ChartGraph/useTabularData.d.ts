export type SortChangeType = 'series' | 'x' | 'y';
export type FilterIdType = null | SortChangeType;
export type FilterOrderType = 'desc' | 'asc';
export type TransformedTabularDataType = ReadonlyArray<{
    series: string;
    xAxis: number | string;
    yAxis: number;
}>;
type UseBuildCsvDataProps = (arg1: {
    transformedTabularData: TransformedTabularDataType;
    isHorizontalLayout: boolean;
}) => string;
export declare const useBuildCsvData: UseBuildCsvDataProps;
type UseTabularDataProps = (arg: {
    data: ReadonlyArray<{
        name: string | number;
        [key: string]: number;
    }>;
    filterId: FilterIdType;
    filterOrder: FilterOrderType;
    tickFormatter?: {
        timeseries?: (arg1: number) => string | number;
        xAxisTop?: (arg1: number, arg2: number) => string | number;
        xAxisBottom?: (arg1: number, arg2: number) => string | number;
        yAxisRight?: (arg1: number, arg2: number) => string | number;
        yAxisLeft?: (arg1: number, arg2: number) => string | number;
    };
    labelMap?: {
        [key: string]: string;
    };
    isHorizontalLayout: boolean;
}) => TransformedTabularDataType;
declare const useTabularData: UseTabularDataProps;
export default useTabularData;
