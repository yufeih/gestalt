import { ReactElement } from 'react';
type Props = {
    gap: 3 | 6;
    iconSize: 32 | 24;
    message: string | ReactElement;
    type: 'default' | 'error' | 'info' | 'recommendation' | 'success' | 'warning';
    title?: string;
    marginBottom?: 4;
    iconAccessibilityLabel?: string;
};
export default function HeaderSection({ iconSize, gap, title, message, type, iconAccessibilityLabel, marginBottom, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
