import { ReactElement } from 'react';
import { RenderResult } from '@testing-library/react';
export default class Helper {
    render: RenderResult;
    constructor(component: ReactElement);
    change(testId: string): void;
    changeValue(testId: string, value: string | number): void;
    click(testId: string): void;
    get(testId: string): HTMLElement;
    query(testId: string): HTMLElement | null;
    find(testId: string): Promise<HTMLElement>;
    getAll(testId: string): HTMLElement[];
    queryAll(testId: string): HTMLElement[];
    findAll(testId: string): Promise<HTMLElement[]>;
    getText(testId: string): string;
    getParentText(testId: string): string;
    getHtml(testId: string): string;
    getParentHtml(testId: string): string;
}
