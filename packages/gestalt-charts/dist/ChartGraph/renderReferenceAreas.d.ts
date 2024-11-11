import { ReactNode } from 'react';
export default function renderReferenceAreas({ referenceAreas, }: {
    referenceAreas: ReadonlyArray<{
        id: string;
        label: string;
        x1: string | number;
        x2: string | number;
        y1: string | number;
        y2: string | number;
        yAxisId: string;
        style?: 'default';
    }>;
}): ReadonlyArray<ReactNode>;
