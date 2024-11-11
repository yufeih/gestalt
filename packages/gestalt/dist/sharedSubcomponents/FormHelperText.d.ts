import { MaxLength } from '../TextField';
type SizeType = 'sm' | 'md' | 'lg';
type Props = {
    id?: string;
    text: string | null | undefined;
    maxLength?: MaxLength | null | undefined;
    noPadding?: boolean;
    currentLength?: number;
    size?: SizeType;
    disabled?: boolean;
};
export default function FormHelperText({ disabled, id, currentLength, text, maxLength, size, noPadding: noStartPadding, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
