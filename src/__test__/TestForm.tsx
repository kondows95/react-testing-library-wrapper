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
