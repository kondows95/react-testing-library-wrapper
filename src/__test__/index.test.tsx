import React from 'react';
import TestLib from '../index';
import TestForm from './TestForm';

let tLib: TestLib;
let sendEmail: jest.Mock;

beforeEach(() => {
    sendEmail = jest.fn();
    tLib = new TestLib(<TestForm sendEmail={sendEmail} />);
});

it('Example1 (submit button)', () => {
    tLib.changeValue('email', 'a@example.com');
    tLib.click('btnSubmit');
    expect(sendEmail).toHaveBeenCalledWith('a@example.com');
});

it('Example2 (reset button)', () => {
    const elem = tLib.get('email');
    expect(elem.getAttribute("value")).toBe('abcdef');//initial

    tLib.changeValue('email', 'a@example.com');
    expect(elem.getAttribute("value")).toBe('a@example.com');

    tLib.click('btnReset');
    expect(elem.getAttribute("value")).toBe('abcdef');//initial
});

it('change', () => {
    tLib.change('email');
    expect(tLib.render.container.innerHTML).toContain('abcdef');
});

it('changeValue', () => {
    expect(tLib.render.container.innerHTML).not.toContain('a@example.com');
    tLib.changeValue('email', 'a@example.com');
    expect(tLib.render.container.innerHTML).toContain('a@example.com');
});

it('click', () => {
    tLib.click('btnSubmit');
    expect(sendEmail).toHaveBeenCalledWith('abcdef');
});

it('get', () => {
    const elem = tLib.get('email');
    expect(elem.getAttribute("value")).toBe('abcdef');
});

it('query', () => {
    const elem: HTMLElement | null = tLib.query('email');
    if (elem === null) {
        throw 'never come here!';
    }
    expect(elem.getAttribute("value")).toBe('abcdef');
});

it('find', async () => {
    const elem = await tLib.find('email');
    expect(elem.getAttribute("value")).toBe('abcdef');
});

it('getAll', () => {
    const elems = tLib.getAll('email');
    expect(elems.length).toBe(1);
    expect(elems[0].getAttribute("value")).toBe('abcdef');
});

it('queryAll', () => {
    const elems = tLib.queryAll('email');
    expect(elems.length).toBe(1);
    expect(elems[0].getAttribute("value")).toBe('abcdef');
});

it('findAll', async () => {
    const elems = await tLib.findAll('email');
    expect(elems.length).toBe(1);
    expect(elems[0].getAttribute("value")).toBe('abcdef');
});