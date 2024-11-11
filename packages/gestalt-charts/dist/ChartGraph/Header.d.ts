import { ReactNode } from 'react';
export default function Header({ title, readyToRender, description, onVisualPatternChange, helpButton, titleDisplay, toggleTabularDataModal, showTabularData, }: {
    readyToRender: boolean;
    title?: string;
    description?: string;
    onVisualPatternChange: () => void;
    helpButton?: ReactNode;
    titleDisplay?: 'visible' | 'hidden';
    toggleTabularDataModal: () => void;
    showTabularData: boolean;
}): import("react/jsx-runtime").JSX.Element;
