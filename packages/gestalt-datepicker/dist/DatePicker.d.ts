import { ReactElement } from 'react';
import { Locale } from 'date-fns/locale';
interface Indexable {
    index(): number;
}
export type Props = {
    /**
     * DatePicker can adapt to mobile devices to [SheetMobile](https://gestalt.pinterest.systems/web/sheetmobile). Mobile adaptation is disabled by default. Set to 'false' to enable SheetMobile in mobile devices. See the [mobile variant](https://gestalt.pinterest.systems/web/datepicker#Mobile) to learn more.
     */
    disableMobileUI?: boolean;
    /**
     *  When disabled, DatePicker looks inactive and cannot be interacted with. See the [disabled example](https://gestalt.pinterest.systems/web/datepicker#States) to learn more.
     */
    disabled?: boolean;
    /**
     * Provide feedback when an error on selection occurs. See the [error message example](https://gestalt.pinterest.systems/web/datepicker#States) to learn more.
     */
    errorMessage?: string;
    /**
     * Array of disabled dates. Datepicker can be interacted with except for the dates passed which look inactive and cannot be selected. See the [disable selected dates example](https://gestalt.pinterest.systems/web/datepicker#Disabled-dates) to learn more.
     */
    excludeDates?: ReadonlyArray<Date>;
    /**
     * More information about how to complete the DatePicker field. See the [helper text example](https://gestalt.pinterest.systems/web/datepicker#Helper-text) to learn more.
     */
    helperText?: string;
    /**
     * A unique identifier for the input.
     */
    id: string;
    /**
     * Preferred direction for the calendar popover to open. See the [ideal direction example](https://gestalt.pinterest.systems/web/datepicker#idealDirection) to learn more.
     */
    idealDirection?: 'up' | 'right' | 'down' | 'left';
    /**
     * Array of enabled dates. Datepicker can be interacted with only on the dates passed, all other dates look inactive and cannot be selected. See the [disable selected dates example](https://gestalt.pinterest.systems/web/datepicker#Disabled-dates) to learn more.
     */
    includeDates?: ReadonlyArray<Date>;
    /**
     * Provide a label to identify the DatePicker field.
     */
    label?: string;
    /**
     * DatePicker accepts imported locales from the open source date utility library date-fns. See the [locales example](https://gestalt.pinterest.systems/web/datepicker#localeData) to learn more.
     */
    localeData?: Locale;
    /**
     * Disable dates outside a max date. See the [disable future and past example](https://gestalt.pinterest.systems/web/datepicker#Disabled-dates) to learn more.
     */
    maxDate?: Date;
    /**
     * Disable dates outside a min date.  See the [disable future and past example](https://gestalt.pinterest.systems/web/datepicker#Disabled-dates) to learn more.
     */
    minDate?: Date;
    /**
     * A unique name for the input.
     */
    name?: string;
    /**
     * Required for date range selection. Pass the complimentary range date picker ref object to DatePicker to autofocus on the unselected date range field. See the [date range picker example](https://gestalt.pinterest.systems/web/datepicker#Date-range) to learn more.
     */
    nextRef?: {
        current: null | HTMLInputElement;
    };
    /**
     * Callback triggered when the user selects a date.
     */
    onChange: (arg1: {
        event: React.ChangeEvent<HTMLInputElement>;
        value: Date | null;
    }) => void;
    /**
     * Placeholder text shown if the user has not yet input a value. The default placeholder value shows the date format for each locale, e.g. MM/DD/YYYY.
     */
    placeholder?: string;
    /**
     * Callback fired when SheetMobile's in & out animations end. See [SheetMobile's animation variant](https://gestalt.pinterest.systems/web/sheetmobile#Animation) to learn more.
     */
    mobileOnAnimationEnd?: (arg1: {
        animationState: 'in' | 'out';
    }) => void;
    /**
     * An object representing the zIndex value of the SheetMobile where DatePicker is built upon on mobile. Learn more about [zIndex classes](https://gestalt.pinterest.systems/web/zindex_classes)
     */
    mobileZIndex?: Indexable;
    /**
     * Required for date range selection. End date on a date range selection. See the [date range example](https://gestalt.pinterest.systems/web/datepicker#Date-range) to learn more.
     */
    rangeEndDate?: Date | null;
    /**
     * Required for date range selection. Defines the datepicker start/end role in a date range selection.See the [date range picker example](https://gestalt.pinterest.systems/web/datepicker#Date-range) to learn more.
     */
    rangeSelector?: 'start' | 'end';
    /**
     * Required for date range selection. Start date on a date range selection. See the [date range picker example](https://gestalt.pinterest.systems/web/datepicker#Date-range) to learn more.
     */
    rangeStartDate?: Date | null;
    /**
     * Indicate if the input is readOnly. See the [readOnly example](https://gestalt.pinterest.systems/web/textfield#Read-only) for more details.
     */
    readOnly?: boolean;
    /**
     * Required for date range selection. Pass a ref object to DatePicker to autofocus on the unselected date range field. See the [date range picker example](https://gestalt.pinterest.systems/web/datepicker#Date-range) to learn more.
     */
    ref?: ReactElement;
    /**
     * Show a select list for quick selection of year and/or month. See the [selectLists variant](https://gestalt.pinterest.systems/web/datepicker#Select-list) to learn more.
     */
    selectLists?: ReadonlyArray<'month' | 'year'>;
    /**
     * Defines the height of the Datepicker:  md: 40px (default), lg: 48px. See the [size variant](https://gestalt.pinterest.systems/web/datepicker#Size) for more details.
     */
    size?: 'md' | 'lg';
    /**
     * DatePicker can be a controlled component. `value` sets the current value of the input. See the [controlled component date example](https://gestalt.pinterest.systems/web/datepicker#Controlled-component) to learn more.
     */
    value?: Date | null;
};
/**
 * [DatePicker](https://gestalt.pinterest.systems/web/datepicker) is used when the user has to select a date or date range.
 * DatePicker is distributed in its own package and must be installed separately.
 *
 * ![DatePicker closed light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/DatePicker-closed.spec.ts-snapshots/DatePicker-closed-chromium-darwin.png)
 * ![DatePicker closed dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/DatePicker-closed-dark.spec.ts-snapshots/DatePicker-closed-dark-chromium-darwin.png)
 */
declare const DatePickerWithForwardRef: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default DatePickerWithForwardRef;
