"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TestForm = props => {
    const [email, setEmail] = react_1.default.useState('abcdef');
    const handleSubmit = (event) => {
        event.preventDefault();
        props.sendEmail(email);
    };
    const handleReset = () => {
        setEmail('abcdef');
    };
    const handleChange = (event) => {
        setEmail(event.currentTarget.value);
    };
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement("input", { "data-testid": "email", value: email, onChange: handleChange }),
        react_1.default.createElement("input", { type: "submit", "data-testid": "btnSubmit", value: "button" }),
        react_1.default.createElement("button", { "data-testid": "btnReset", onClick: handleReset }, "Reset")));
};
exports.default = TestForm;
