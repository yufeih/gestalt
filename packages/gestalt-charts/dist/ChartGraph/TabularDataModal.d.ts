interface Indexable {
    index(): number;
}
type Props = {
    title: string;
    toggleTabularDataModal: () => void;
    data: ReadonlyArray<{
        name: string | number;
        [key: string]: number;
    }>;
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
    modalZIndex?: Indexable;
    isHorizontalLayout: boolean;
};
export default function TabularDataModal({ title, toggleTabularDataModal, data, tickFormatter, labelMap, modalZIndex, isHorizontalLayout, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
