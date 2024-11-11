import { ComponentType, ReactNode } from 'react';
export default function wrapWithComponent<P>({ element, Component, props, }: {
    element: ReactNode | null | undefined;
    Component: ComponentType<P>;
    props: P;
}): string | number | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode> | null;
