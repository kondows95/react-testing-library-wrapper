This is a wrapper for "@testing-library/react".<br />
I use only the "ByTestId" method.<br />
So I created a wrapper library that makes "ByTestId" more concise.<br />
https://testing-library.com/docs/react-testing-library/cheatsheet

# Install
```
$ yarn add -D react-testing-library-wrapper

or

$ npm install -D react-testing-library-wrapper
```

# Usage
TestForm.test.tsx
```
import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import TestForm from './TestForm';

let tLib: TestLib;
let sendEmail: jest.Mock;
let savedEmailValue = '';

beforeEach(() => {
    savedEmailValue = '';
    sendEmail = jest.fn((email: string) => {
        savedEmailValue = email;
    });
    tLib = new TestLib(<TestForm sendEmail={sendEmail} />);
});

it('Example1 (submit button)', () => {
    tLib.changeValue('email', 'a@example.com');
    tLib.click('btnSubmit');
    expect(sendEmail).toHaveBeenCalled();
    expect(savedEmailValue).toBe('a@example.com');
});

it('Example2 (reset button)', () => {
    const elem = tLib.get('email');
    expect(elem.getAttribute("value")).toBe('abcdef');//initial

    tLib.changeValue('email', 'a@example.com');
    expect(elem.getAttribute("value")).toBe('a@example.com');

    tLib.click('btnReset');
    expect(elem.getAttribute("value")).toBe('abcdef');//initial
});
```
TestForm.tsx
```
import React, { FormEvent, ChangeEvent } from 'react';

type Props = {
    sendEmail: (email: string) => void;
};

const TestForm: React.FC<Props> = props => {
    const [email, setEmail] = React.useState<string>('abcdef');

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        props.sendEmail(email);
    };

    const handleReset = (): void => {
        setEmail('abcdef')
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.currentTarget.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input data-testid="email" value={email} onChange={handleChange} />
            <input type="submit" data-testid="btnSubmit" value="button" />
            <button data-testid="btnReset" onClick={handleReset}>Reset</button>
        </form>
    )
}
export default TestForm;

```