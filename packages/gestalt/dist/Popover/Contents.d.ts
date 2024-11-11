import { ReactNode } from 'react';
import { Overflow } from '../boxTypes';
export type Role = 'dialog' | 'listbox' | 'menu' | 'tooltip';
type Props = {
    accessibilityLabel?: string;
    anchor: HTMLElement;
    bgColor?: 'blue' | 'darkGray' | 'white';
    border?: boolean;
    caret?: boolean;
    children?: ReactNode;
    id: string | undefined;
    idealDirection?: 'up' | 'right' | 'down' | 'left';
    forceDirection?: boolean;
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
    role: Role | undefined;
    rounding?: 2 | 4;
    shouldFocus?: boolean;
    width: number | undefined;
    scrollBoundary?: HTMLElement;
    hideWhenReferenceHidden?: boolean;
    onPositioned?: () => void;
    shouldTrapFocus?: boolean;
    overflow?: Extract<Overflow, 'auto' | 'hidden' | 'visible'>;
};
export default function Contents({ accessibilityLabel, anchor, bgColor, border, caret, children, id, idealDirection, forceDirection, role, rounding, width, shouldFocus, onKeyDown, scrollBoundary, hideWhenReferenceHidden, onPositioned, shouldTrapFocus, overflow, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
