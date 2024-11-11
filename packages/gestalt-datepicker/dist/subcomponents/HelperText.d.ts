type SizeType = 'sm' | 'md' | 'lg';
type Props = {
    id?: string;
    text: string | null | undefined;
    noPadding?: boolean;
    size?: SizeType;
    disabled?: boolean;
};
export default function FormHelperText({ disabled, id, text, size, noPadding: noStartPadding, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
