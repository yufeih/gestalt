import { PureComponent, ReactNode } from 'react';
import { ThrottleReturn } from './throttle';
type Props = {
    /**
     * The scroll container to use. Defaults to window.
     */
    container?: HTMLElement;
    isAtEnd?: boolean;
    isFetching: boolean;
    fetchMore?: () => void;
    renderHeight?: () => number;
};
type State = {
    containerHeight: number;
    scrollHeight: number;
    scrollTop: number;
};
export default class ScrollFetch extends PureComponent<Props, State> {
    /**
     * Fetches additional items if needed.
     */
    updatePosition: ThrottleReturn;
    static defaultProps: {
        container?: HTMLElement;
    };
    state: State;
    /**
     * Adds scroll listener after the component mounts.
     */
    componentDidMount(): void;
    /**
     * Update scroll buffer and check after the component updates.
     */
    componentDidUpdate(): void;
    /**
     * Returns the scrollable content height.
     */
    getScrollHeight: () => number;
    getScrollState(): null | {
        scrollHeight: number;
        scrollTop: number;
    };
    render(): null | ReactNode;
}
export {};
