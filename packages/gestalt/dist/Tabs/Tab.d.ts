import { ReactNode } from 'react';
type TabType = {
    href: string;
    id?: string;
    indicator?: 'dot' | number;
    text: ReactNode;
};
declare const TabWithForwardRef: import("react").ForwardRefExoticComponent<TabType & {
    bgColor: "default" | "transparent";
    dataTestId?: string;
    index: number;
    isActive: boolean;
    onChange: (arg1: {
        event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>;
        readonly activeTabIndex: number;
        dangerouslyDisableOnNavigation: () => void;
    }) => void;
} & import("react").RefAttributes<HTMLDivElement>>;
export default TabWithForwardRef;
