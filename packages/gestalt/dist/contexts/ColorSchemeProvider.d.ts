import { ReactNode } from 'react';
export type ColorScheme = 'light' | 'dark' | 'userPreference';
export type Theme = {
    colorSchemeName: 'lightMode' | 'darkMode';
    [tokenName: string]: string;
};
type Props = {
    /**
     * Context lets a parent component provide data to the entire tree below it. Only components within the ColorSchemeProvider tree will be able to subscribe to it.
     */
    children: ReactNode;
    /**
     * The color scheme for components inside the ColorSchemeProvider. Use 'userPreference' to allow the end user to specify the color scheme via their browser settings, using the 'prefers-color-scheme' media query. See [color scheme](https://gestalt.pinterest.systems/web/utilities/colorschemeprovider#Color-scheme) variant for examples.
     */
    colorScheme?: ColorScheme;
    /**
     * Sets the dimensions of the outputted `<div>` to 100% width and height.
     */
    fullDimensions?: boolean;
    /**
     * Use with caution! Set an id in your provider to limit the scope of the provider to just the children. This should only be used for cases where you want to enable dark mode in delimited sections to examplify dark mode itself.
     * If not passed in, settings will be applied as globally as possible (ex. setting color scheme variables at :root). A global implementation is critical for displaying dark mode correctly: when dark mode is not set globally, [React Portal](https://react.dev/reference/react-dom/createPortal)-based components, mostly Popovers and Tooltips, will not render in dark mode. The main ColorSchemeProvider in your app should NOT have an id set.
     */
    id?: string | null | undefined;
    /**
     * Sets the line height for the selected language.
     */
    language?: 'default' | 'tall' | 'ck' | 'ja' | 'th' | 'vi';
};
/**
 * [ColorSchemeProvider](https://gestalt.pinterest.systems/web/utilities/colorschemeprovider) is an optional [React context provider](https://reactjs.org/docs/context.html#contextprovider) to enable dark mode.
 */
export default function ColorSchemeProvider({ children, colorScheme, fullDimensions, id, language, }: Props): import("react/jsx-runtime").JSX.Element;
export declare function useColorScheme(): {
    colorSchemeName: 'lightMode' | 'darkMode';
};
export {};
