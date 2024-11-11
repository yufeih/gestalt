import { Props } from '../DatePicker';
type InternalProps = Props & {
    inline?: boolean;
    inputOnly?: boolean;
    onFocus?: () => void;
    onSelect?: () => void;
};
declare const InternalDatePickerWithForwardRef: import("react").ForwardRefExoticComponent<Omit<InternalProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default InternalDatePickerWithForwardRef;
