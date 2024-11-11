import { Props } from '../DatePicker';
type ModifiedProps = Props & {
    onChange: (arg1: {
        startDate: Date;
        endDate: Date;
    }) => void;
};
declare const InternalDatePickerWithForwardRef: import("react").ForwardRefExoticComponent<Omit<ModifiedProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default InternalDatePickerWithForwardRef;
