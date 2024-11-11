import { TransformedTabularDataType } from './useTabularData';
type Props = {
    title: string;
    toggleTabularDataModal: () => void;
    isHorizontalLayout: boolean;
    transformedTabularData: TransformedTabularDataType;
};
export default function TabularDataModalFooter({ title, toggleTabularDataModal, isHorizontalLayout, transformedTabularData, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
