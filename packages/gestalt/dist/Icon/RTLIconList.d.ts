import icons from '../icons/index';
import compactIconsVR from '../icons-vr-theme/compact/index';
type IconName = keyof typeof icons | keyof typeof compactIconsVR;
declare const swapOnRtlIconNames: ReadonlyArray<IconName>;
declare const flipOnRtlIconNames: ReadonlyArray<IconName | undefined>;
export { flipOnRtlIconNames, swapOnRtlIconNames };
