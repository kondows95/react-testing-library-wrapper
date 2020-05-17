"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = __importDefault(require("../index"));
const TestForm_1 = __importDefault(require("./TestForm"));
let tLib;
let sendEmail;
beforeEach(() => {
    sendEmail = jest.fn();
    tLib = new index_1.default(react_1.default.createElement(TestForm_1.default, { sendEmail: sendEmail }));
});
it('Basic Usage (submit button)', () => {
    tLib.changeValue('myInput', 'a@example.com');
    tLib.click('mySubmit');
    expect(sendEmail).toHaveBeenCalledWith('a@example.com');
});
it('Basic Usage (reset button)', () => {
    const elem = tLib.get('myInput');
    expect(elem.getAttribute("value")).toBe('abcdef'); //initial
    tLib.changeValue('myInput', 'a@example.com');
    expect(elem.getAttribute("value")).toBe('a@example.com');
    tLib.click('myReset');
    expect(elem.getAttribute("value")).toBe('abcdef'); //initial
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
    const elem = tLib.query('myInput');
    if (elem === null) {
        throw 'never come here!';
    }
    expect(elem.getAttribute("value")).toBe('abcdef');
});
it('find', () => __awaiter(void 0, void 0, void 0, function* () {
    const elem = yield tLib.find('myInput');
    expect(elem.getAttribute("value")).toBe('abcdef');
}));
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
it('findAll', () => __awaiter(void 0, void 0, void 0, function* () {
    const elems = yield tLib.findAll('myInput');
    expect(elems.length).toBe(1);
    expect(elems[0].getAttribute("value")).toBe('abcdef');
}));
it('getText', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(tLib.getText('myReset')).toBe('#Reset');
    expect(tLib.getText('myInput')).toBe('');
}));
it('getParentText', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(tLib.getParentText('myReset')).toBe('#Reset#Child');
}));
it('getHtml', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(tLib.getHtml('parentDiv')).toBe('<span>#Child</span>');
    expect(tLib.getHtml('myInput')).toBe('');
}));
it('getParentHtml', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(tLib.getParentHtml('myInput')).toContain('<input data-testid="myInput"');
}));
