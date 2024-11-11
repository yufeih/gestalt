type DropdownContextType = {
    id: string;
    hoveredItemIndex: number | null | undefined;
    setHoveredItemIndex: (n: number) => void;
    setOptionRef: (arg1?: HTMLElement | null | undefined) => void;
};
declare const DropdownContextProvider: import("react").Provider<DropdownContextType>;
declare const DropdownContextConsumer: import("react").Consumer<DropdownContextType>;
export { DropdownContextConsumer, DropdownContextProvider };
