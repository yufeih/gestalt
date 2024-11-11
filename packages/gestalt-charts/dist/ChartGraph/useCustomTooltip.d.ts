import { ReactNode } from 'react';
export default function useCustomTooltip({ isDarkMode, renderTooltip, }: {
    isDarkMode: boolean;
    renderTooltip?: 'auto' | 'none' | ((arg1: {
        active: boolean | null | undefined;
        payload: Record<any, any> | null | undefined;
        label: string | number;
    }) => ReactNode);
}): (arg1: {
    active: boolean | null | undefined;
    payload: Record<any, any> | null | undefined;
    label: string | number;
}) => ReactNode;
