type InjectedProps = {
    disabled?: boolean;
    id: string;
    name?: string;
    label?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onPassthroughFocus?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    value?: string;
    errorMessage?: string;
    helperText?: string;
    size?: 'md' | 'lg';
};
declare const DateInputWithForwardRef: import("react").ForwardRefExoticComponent<{
    id: string;
} & InjectedProps & import("react").RefAttributes<HTMLInputElement>>;
export default DateInputWithForwardRef;
