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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
class Helper {
    constructor(component) {
        this.render = react_1.render(component);
    }
    //====================================================================
    // Simple Wrapper Method
    //====================================================================
    // Almost useless
    change(testId) {
        const elem = this.render.getByTestId(testId);
        react_1.fireEvent.change(elem);
    }
    changeValue(testId, value) {
        const elem = this.render.getByTestId(testId);
        react_1.fireEvent.change(elem, { target: { value: value } });
    }
    click(testId) {
        const elem = this.render.getByTestId(testId);
        react_1.fireEvent.click(elem);
    }
    // If testId is not found, it throws exception.
    get(testId) {
        return this.render.getByTestId(testId);
    }
    // If testId is not found, it returns null.
    query(testId) {
        return this.render.queryByTestId(testId);
    }
    // get method for async
    find(testId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.render.findByTestId(testId);
        });
    }
    // If testId is not found, it throws exception.
    getAll(testId) {
        return this.render.getAllByTestId(testId);
    }
    // If testId is not found, it returns empty array.
    queryAll(testId) {
        return this.render.queryAllByTestId(testId);
    }
    // getAll method for async
    findAll(testId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.render.findAllByTestId(testId);
        });
    }
    //=========================================================================
    // Utility Method
    //=========================================================================
    getText(testId) {
        return this.get(testId).textContent || '';
    }
    getParentText(testId) {
        var _a;
        return ((_a = this.get(testId).parentElement) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    }
    getHtml(testId) {
        return this.get(testId).innerHTML || '';
    }
    getParentHtml(testId) {
        var _a;
        return ((_a = this.get(testId).parentElement) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
    }
}
exports.default = Helper;
