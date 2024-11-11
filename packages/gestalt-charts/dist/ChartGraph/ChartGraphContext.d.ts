import { ReactNode } from 'react';
type TableContextType = {
    decal: 'visualPattern' | null | undefined | 'default' | 'disabled';
};
type Props = {
    children: ReactNode;
    decal: 'visualPattern' | null | undefined | 'default' | 'disabled';
};
declare function ChartProvider({ children, decal }: Props): import("react/jsx-runtime").JSX.Element;
declare function useChartContext(): TableContextType;
export { ChartProvider, useChartContext };
