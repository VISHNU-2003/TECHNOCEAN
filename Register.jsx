import React, { useState } from "react";
export const Register = (props) => {
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phone);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />

            <label htmlFor="phone">Phone number</label>
<input value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="Phone number" />

            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            <br></br>

            {/* <button type="submit">Next</button> */}
        </form>
        <button className="" onClick={() => props.onFormSwitch('home')}>Next</button>
    </div>
    )
}