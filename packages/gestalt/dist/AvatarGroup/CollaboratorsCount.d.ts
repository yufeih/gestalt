import { BaseStackType } from './constants';
type Props = BaseStackType & {
    showAddCollaboratorsButton: boolean;
    count: number;
    isHovered: boolean;
    isPressed: boolean;
};
export default function AvatarGroupCollaboratorsCount({ showAddCollaboratorsButton, pileCount, hovered, isHovered, isPressed, count, size, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
