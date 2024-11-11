declare const skinColor: {
    skinTone1: string;
    skinTone2: string;
    skinTone3: string;
    skinTone4: string;
    skinTone5: string;
    skinTone6: string;
    skinTone7: string;
    skinTone8: string;
    skinTone9: string;
    skinTone10: string;
    skinTone11: string;
    skinTone12: string;
    skinTone13: string;
    skinTone14: string;
    skinTone15: string;
    skinTone16: string;
};
export type SkinColor = keyof typeof skinColor;
export type Props = {
    colors: ReadonlyArray<string>;
    selected: boolean;
    size: 'sm' | 'md' | 'lg';
    disabled: boolean;
    isHovered: boolean;
    isFocused: boolean;
};
export default function ColorPicker({ colors, selected, isHovered, isFocused, size }: Props): import("react/jsx-runtime").JSX.Element;
export {};
