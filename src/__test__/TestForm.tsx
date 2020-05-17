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
            <input data-testid="myInput" value={email} onChange={handleChange} />
            <input data-testid="mySubmit" type="submit" value="button" />
            <button data-testid="myReset" onClick={handleReset}>#Reset</button>
            <div data-testid="parentDiv"><span>#Child</span></div>
        </form>
    )
}
export default TestForm;
