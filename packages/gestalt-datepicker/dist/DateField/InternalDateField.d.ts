import { ReactNode } from 'react';
import { Locale } from 'date-fns/locale';
type InternalDateFieldProps = {
    autoComplete?: 'bday' | 'off';
    disabled?: boolean;
    disableRange?: 'disableFuture' | 'disablePast';
    errorMessage?: ReactNode;
    helperText?: string;
    id: string;
    label?: string;
    labelDisplay?: 'visible' | 'hidden';
    localeData?: Locale | null | undefined;
    maxDate?: Date | null;
    minDate?: Date | null;
    mobileEnterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    name?: string;
    onBlur?: (arg1: {
        event: React.FocusEvent<HTMLInputElement>;
        value: string;
    }) => void;
    onChange: (arg1: {
        value: Date | null;
    }) => void;
    onClearInput?: () => void;
    onError?: (arg1: {
        errorMessage: string;
        value: Date | null;
    }) => void;
    onFocus?: (arg1: {
        event: React.FocusEvent<HTMLInputElement>;
        value: string;
    }) => void;
    readOnly?: boolean;
    size?: 'md' | 'lg';
    value: Date | null;
};
declare function InternalDateField({ autoComplete, disabled, disableRange, errorMessage, helperText, id, label, labelDisplay, localeData, maxDate, minDate, mobileEnterKeyHint, name, onBlur, onChange, onClearInput, onError, onFocus, readOnly, size, value, }: InternalDateFieldProps): import("react/jsx-runtime").JSX.Element;
declare namespace InternalDateField {
    var displayName: string;
}
export default InternalDateField;
