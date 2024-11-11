import { ReactElement } from 'react';
import { Locale } from 'date-fns/locale';
type Props = {
    /**
     * DateRange accepts imported locales from the open source date utility library date-fns. See the [locales variant](https://gestalt.pinterest.systems/web/datefield#localeData) to learn more.
     */
    localeData?: Locale;
    /**
     * Maximal selectable date. Disables any date values after the provided date. See the [disable future and past variant](https://gestalt.pinterest.systems/web/datefield#Disable-past-and-future-dates) to learn more.
     */
    maxDate?: Date;
    /**
     * Minimal selectable date. Disables any date values before the provided date.  See the [disable future and past variant](https://gestalt.pinterest.systems/web/datefield#Disable-past-and-future-dates) to learn more.
     */
    minDate?: Date;
    /**
     * Callback triggered when the user clicks the Cancel button to not persist the selected dates. It should be used to close DateRange. See the [controlled component variant](https://gestalt.pinterest.systems/web/daterange#Controlled-component) to learn more.
     */
    onCancel?: () => void;
    /**
     * Callback triggered when the start date or end date input loses focus. See the [error messaging variant](https://gestalt.pinterest.systems/web/daterange#Error-messaging) to learn more.
     */
    onDateBlur?: {
        startDate: (args: {
            event: React.FocusEvent<HTMLInputElement>;
            value: string;
        }) => void;
        endDate: (args: {
            event: React.FocusEvent<HTMLInputElement>;
            value: string;
        }) => void;
    };
    /**
     * Callback triggered when the start date or end date secondary input loses focus. See the [error messaging variant](https://gestalt.pinterest.systems/web/daterange#Error-messaging) to learn more.
     */
    onSecondaryDateBlur?: {
        startDate: (args: {
            event: React.FocusEvent<HTMLInputElement>;
            value: string;
        }) => void;
        endDate: (args: {
            event: React.FocusEvent<HTMLInputElement>;
            value: string;
        }) => void;
    };
    /**
     * DateField is a controlled component. `onDateChange` is the  callback triggered when the start date value changes. Should be used to modify the controlled value. See the [controlled component variant](https://gestalt.pinterest.systems/web/daterange#Controlled-component) to learn more.
     */
    onDateChange: (startDate: {
        value: Date | null;
    }, endDate: {
        value: Date | null;
    }) => void;
    /**
     * DateField is a controlled component. `onSecondaryDateChange` is the callback triggered when the start date value changes. Should be used to modify the controlled value. See the [controlled component variant](https://gestalt.pinterest.systems/web/daterange#Controlled-component) to learn more.
     */
    onSecondaryDateChange?: (startDate: {
        value: Date | null;
    }, endDate: {
        value: Date | null;
    }) => void;
    /**
     * Callback triggered when the start date or end date values entered are invalid. See the [error messaging variant](https://gestalt.pinterest.systems/web/daterange#Error-messaging) to learn more.
     */
    onDateError?: {
        startDate: (args: {
            errorMessage: string;
            value: Date | null;
        }) => void;
        endDate: (args: {
            errorMessage: string;
            value: Date | null;
        }) => void;
    };
    /**
     * Callback triggered when the secondary start date or secondary end date values entered are invalid. See the [error messaging variant](https://gestalt.pinterest.systems/web/daterange#Error-messaging) to learn more.
     */
    onSecondaryDateError?: {
        startDate: (args: {
            errorMessage: string;
            value: Date | null;
        }) => void;
        endDate: (args: {
            errorMessage: string;
            value: Date | null;
        }) => void;
    };
    /**
     * Callback triggered when the user focus on the start date or end date input DateFields. See the [error messaging variant](https://gestalt.pinterest.systems/web/daterange#Error-messaging) to learn more.
     */
    onDateFocus?: {
        startDate: (args: {
            event: React.FocusEvent<HTMLInputElement>;
            value: string;
        }) => void;
        endDate: (args: {
            event: React.FocusEvent<HTMLInputElement>;
            value: string;
        }) => void;
    };
    /**
     * Callback triggered when the user focus on the start date or end date secondary input DateFields. See the [error messaging variant](https://gestalt.pinterest.systems/web/daterange#Error-messaging) to learn more.
     */
    onSecondaryDateFocus?: {
        startDate: (args: {
            event: React.FocusEvent<HTMLInputElement>;
            value: string;
        }) => void;
        endDate: (args: {
            event: React.FocusEvent<HTMLInputElement>;
            value: string;
        }) => void;
    };
    /**
     * Callback triggered when the user clicks the Apply button to persist the selected dates. It should be used to persist the dates selected and close the DateRange. See the [controlled component variant](https://gestalt.pinterest.systems/web/daterange#Controlled-component) to learn more.
     */
    onSubmit?: () => void;
    /**
     * An optional RadioGroup to provide preestablished date range options. See the [with RadioGroup variant](https://gestalt.pinterest.systems/web/daterange#With-RadioGroup) to learn more.
     */
    radioGroup?: ReactElement;
    /**
     * DateRange is a controlled component. `dateValue` sets the value of the start date and end date.  See the [controlled component variant](https://gestalt.pinterest.systems/web/daterange#Controlled-component) to learn more.
     */
    dateValue: {
        startDate: Date | null;
        endDate: Date | null;
    };
    /**
     * DateRange is a controlled component. `secondaryDateValue` sets the value of the start date and end date.  See the [secondary date range variant](https://gestalt.pinterest.systems/web/daterange#Secondary-date-range) to learn more.
     */
    secondaryDateValue?: {
        startDate: Date | null;
        endDate: Date | null;
    };
    /**
     * Customize your error message for the cases the user enters invalid dates. See the [error messaging variant](https://gestalt.pinterest.systems/web/daterange#Error-messaging) to learn more.
     */
    dateErrorMessage?: {
        startDate: string | null;
        endDate: string | null;
    };
    /**
     * Customize your error message for the cases the user enters invalid dates. See the [error messaging variant](https://gestalt.pinterest.systems/web/daterange#Error-messaging) to learn more.
     */
    secondaryDateErrorMessage?: {
        startDate: string | null;
        endDate: string | null;
    };
    /**
     * Prevents the user from changing the date values from the date fields (not from interacting with the fields).    */
    readOnly?: boolean;
};
/**
 * [DateRange](https://gestalt.pinterest.systems/web/daterange) enables users to preview and select a range of days by picking dates from a calendar or adding a text input.
 * DateRange is distributed in its own package and must be installed separately.
 *
 * ![DateRange light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/DateRange.spec.ts-snapshots/DateRange-chromium-darwin.png)
 * ![DateRange dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/DateRange-dark.spec.ts-snapshots/DateRange-dark-chromium-darwin.png)
 */
declare function DateRange({ localeData, maxDate, minDate, onCancel, onDateChange, onDateError, onDateFocus, onDateBlur, onSubmit, radioGroup, dateValue, dateErrorMessage, secondaryDateValue, secondaryDateErrorMessage, onSecondaryDateBlur, onSecondaryDateChange, onSecondaryDateError, onSecondaryDateFocus, readOnly, }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace DateRange {
    var displayName: string;
}
export default DateRange;
