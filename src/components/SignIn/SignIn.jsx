import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton.scss/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase';
import "./SignIn.css"


class SignIn extends Component {

    state = {
        email: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: "", password: "" })
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="SignIn">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required handleChange={this.handleChange} label="email"/>

                    <FormInput name="password" type="password" value={this.state.password} required handleChange={this.handleChange} label="password"/>

                    <div className="buttons">
                        <CustomButton type="submit" value="Submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} value="Submit" isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }


}

export default SignIn;