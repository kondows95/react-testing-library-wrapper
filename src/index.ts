import { ReactElement } from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
export default class Helper {
    public render: RenderResult;
    constructor(component: ReactElement) {
        this.render = render(component);
    }

    // Almost useless
    change(testId: string): void {
        const elem = this.render.getByTestId(testId);
        fireEvent.change(elem);
    }

    changeValue(testId: string, value: string | number): void {
        const elem = this.render.getByTestId(testId);
        fireEvent.change(elem, { target: { value: value } });
    }

    click(testId: string): void {
        const elem = this.render.getByTestId(testId);
        fireEvent.click(elem);
    }

    // If testId is not found, it throws exception.
    get(testId: string): HTMLElement {
        return this.render.getByTestId(testId);
    }

    // If testId is not found, it returns null.
    query(testId: string): HTMLElement | null {
        return this.render.queryByTestId(testId);
    }

    // get method for async
    async find(testId: string): Promise<HTMLElement> {
        return await this.render.findByTestId(testId);
    }

    // If testId is not found, it throws exception.
    getAll(testId: string): HTMLElement[] {
        return this.render.getAllByTestId(testId);
    }

    // If testId is not found, it returns empty array.
    queryAll(testId: string): HTMLElement[] {
        return this.render.queryAllByTestId(testId);
    }

    // getAll method for async
    async findAll(testId: string): Promise<HTMLElement[]> {
        return this.render.findAllByTestId(testId);
    }
}
