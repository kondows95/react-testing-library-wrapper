import React from 'react';
import TestLib from '../index';
import TestForm from './TestForm';

let tLib: TestLib;
let sendEmail: jest.Mock;

beforeEach(() => {
    sendEmail = jest.fn();
    tLib = new TestLib(<TestForm sendEmail={sendEmail} />);
});

it('Basic Usage (submit button)', () => {
    tLib.changeValue('myInput', 'a@example.com');
    tLib.click('mySubmit');
    expect(sendEmail).toHaveBeenCalledWith('a@example.com');
});


it('Basic Usage (reset button)', () => {
    const elem = tLib.get('myInput');
    expect(elem.getAttribute("value")).toBe('abcdef');//initial

    tLib.changeValue('myInput', 'a@example.com');
    expect(elem.getAttribute("value")).toBe('a@example.com');

    tLib.click('myReset');
    expect(elem.getAttribute("value")).toBe('abcdef');//initial
});

it('change', () => {
    tLib.change('myInput');
    expect(tLib.render.container.innerHTML).toContain('abcdef');
});

it('changeValue', () => {
    expect(tLib.render.container.innerHTML).not.toContain('a@example.com');
    tLib.changeValue('myInput', 'a@example.com');
    expect(tLib.render.container.innerHTML).toContain('a@example.com');
});

it('click', () => {
    tLib.click('mySubmit');
    expect(sendEmail).toHaveBeenCalledWith('abcdef');
});

it('get', () => {
    const elem = tLib.get('myInput');
    expect(elem.getAttribute("value")).toBe('abcdef');
});

it('query', () => {
    const elem: HTMLElement | null = tLib.query('myInput');
    if (elem === null) {
        throw 'never come here!';
    }
    expect(elem.getAttribute("value")).toBe('abcdef');
});

it('find', async () => {
    const elem = await tLib.find('myInput');
    expect(elem.getAttribute("value")).toBe('abcdef');
});

it('getAll', () => {
    const elems = tLib.getAll('myInput');
    expect(elems.length).toBe(1);
    expect(elems[0].getAttribute("value")).toBe('abcdef');
});

it('queryAll', () => {
    const elems = tLib.queryAll('myInput');
    expect(elems.length).toBe(1);
    expect(elems[0].getAttribute("value")).toBe('abcdef');
});

it('findAll', async () => {
    const elems = await tLib.findAll('myInput');
    expect(elems.length).toBe(1);
    expect(elems[0].getAttribute("value")).toBe('abcdef');
});

it('getText', async () => {
    expect(tLib.getText('myReset')).toBe('#Reset');
    expect(tLib.getText('myInput')).toBe('');
});

it('getParentText', async () => {
    expect(tLib.getParentText('myReset')).toBe('#Reset#Child');
});

it('getHtml', async () => {
    expect(tLib.getHtml('parentDiv')).toBe('<span>#Child</span>');
    expect(tLib.getHtml('myInput')).toBe('');
});

it('getParentHtml', async () => {
    expect(tLib.getParentHtml('myInput')).toContain('<input data-testid="myInput"');
});
