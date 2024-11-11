export default function renderAxis({ isHorizontalLayout, isHorizontalBiaxialLayout, isVerticalLayout, isTimeSeries, isVerticalBiaxialLayout, isBar, isCombo, range, tickFormatter, labelMap, tickCount, }: {
    isHorizontalLayout: boolean;
    isHorizontalBiaxialLayout: boolean;
    isVerticalLayout: boolean;
    isVerticalBiaxialLayout: boolean;
    isTimeSeries: boolean;
    isBar: boolean;
    isCombo: boolean;
    range: [
        number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
        number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
    ] | {
        xAxisBottom?: [
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
        ];
        xAxisTop?: [
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
        ];
        yAxisLeft?: [
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
        ];
        yAxisRight?: [
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number),
            number | 'auto' | 'dataMin' | 'dataMax' | ((arg1: number) => number)
        ];
    };
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
    tickCount: 5 | 3;
}): import("react/jsx-runtime").JSX.Element;
