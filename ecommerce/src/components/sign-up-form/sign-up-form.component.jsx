import { useState } from 'react';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassord } = formFields;
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label htmlFor=''>Display Name</label>
                <input type='text' required />

                <label htmlFor=''>Email</label>
                <input type='email' required />

                <label htmlFor=''>Password</label>
                <input type='password' required />

                <label htmlFor=''>Confirm Password</label>
                <input type='password' required />

                <button type='submit'>Sign Out</button>
            </form>
        </div>
    );
};

export default SignUpForm;
