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
let savedEmailValue = '';
beforeEach(() => {
    savedEmailValue = '';
    sendEmail = jest.fn((email) => {
        savedEmailValue = email;
    });
    tLib = new index_1.default(react_1.default.createElement(TestForm_1.default, { sendEmail: sendEmail }));
});
it('Example1 (submit button)', () => {
    tLib.changeValue('email', 'a@example.com');
    tLib.click('btnSubmit');
    expect(sendEmail).toHaveBeenCalledWith('a@example.com');
    expect(savedEmailValue).toBe('a@example.com');
});
it('Example2 (reset button)', () => {
    const elem = tLib.get('email');
    expect(elem.getAttribute("value")).toBe('abcdef'); //initial
    tLib.changeValue('email', 'a@example.com');
    expect(elem.getAttribute("value")).toBe('a@example.com');
    tLib.click('btnReset');
    expect(elem.getAttribute("value")).toBe('abcdef'); //initial
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
    const elem = tLib.query('email');
    if (elem === null) {
        throw 'never come here!';
    }
    expect(elem.getAttribute("value")).toBe('abcdef');
});
it('find', () => __awaiter(void 0, void 0, void 0, function* () {
    const elem = yield tLib.find('email');
    expect(elem.getAttribute("value")).toBe('abcdef');
}));
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
it('findAll', () => __awaiter(void 0, void 0, void 0, function* () {
    const elems = yield tLib.findAll('email');
    expect(elems.length).toBe(1);
    expect(elems[0].getAttribute("value")).toBe('abcdef');
}));
