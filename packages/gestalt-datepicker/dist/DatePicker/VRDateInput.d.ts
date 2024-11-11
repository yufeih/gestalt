import { ReactNode } from 'react';
type Props = {
    id: string;
    onChange: (arg1: {
        event: React.ChangeEvent<HTMLInputElement>;
        value: string;
    }) => void;
    accessibilityControls?: string;
    dataTestId?: string;
    disabled?: boolean;
    errorMessage?: ReactNode;
    helperText?: string;
    label?: string;
    labelDisplay?: 'visible' | 'hidden';
    name?: string;
    onBlur?: (arg1: {
        event: React.FocusEvent<HTMLInputElement>;
        value: string;
    }) => void;
    onClick?: (arg1: {
        event: React.MouseEvent<HTMLInputElement>;
        value: string;
    }) => void;
    onFocus?: (arg1: {
        event: React.FocusEvent<HTMLInputElement>;
        value: string;
    }) => void;
    onKeyDown?: (arg1: {
        event: React.KeyboardEvent<HTMLInputElement>;
        value: string;
    }) => void;
    placeholder?: string;
    readOnly?: boolean;
    value?: string;
    size?: 'md' | 'lg';
};
declare const InternalTextFieldWithForwardRef: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLInputElement>>;
export default InternalTextFieldWithForwardRef;
