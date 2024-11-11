import { FilterIdType, FilterOrderType, SortChangeType, TransformedTabularDataType } from './useTabularData';
type Props = {
    title: string;
    isHorizontalLayout: boolean;
    transformedTabularData: TransformedTabularDataType;
    onSortChange: (arg1: SortChangeType) => void;
    sortOrder: FilterOrderType;
    sortCol: FilterIdType;
};
export default function TabularDataModal({ title, isHorizontalLayout, transformedTabularData, onSortChange, sortOrder, sortCol, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
