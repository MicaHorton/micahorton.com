import React, { Component } from 'react';
import { sendEmail } from '../api';

export default class Contact extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            alert: false,
            required: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {     
        const name = e.target.name; 
        const value = e.target.value;
        this.setState({
            [name]: value
        });    

        
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = this.state;
        
        this.setState({
            name: '',
            email: '',
            message: '',
            alert: true,
            required: false
        });

        sendEmail(email)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
    }


    render() {
        if (this.state.alert) {
            alert = 
                <div>
                    Message has been sent!
                </div>;
        }
        let required = this.state.required;

        return (
            <main>
            <section>
                    <h1>Contact Me</h1>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                            Name
                            <input name='name' type='text' value={this.state.name} 
                            onChange={this.handleChange} required={required} />                
                    </label>

                    <label>
                            Email
                            <input name='email' type='email' value={this.state.email} 
                            onChange={this.handleChange} required={required} />                
                    </label>

                    <label>
                            Message
                            <textarea name='message' rows='10' value={this.state.message} 
                            onChange={this.handleChange} required={required} />                
                    </label>

                    <input type='submit' value='Submit' />

                    {alert}
                    </form>
            </section>
            </main>
        );
    }
}

