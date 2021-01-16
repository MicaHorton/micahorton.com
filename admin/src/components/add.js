import React, { Component } from 'react';
import { updatePost } from '../api.js'
import styles from '../styles/edit.module.css';


export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            markdown: '',
            tags: ''
        };
    }

    handleChange = (e) => {   
        const name = e.target.name; 
        const value = e.target.value;
        this.setState({
          [name]: value
        });   
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const post = this.state;

        addPost(post)
        .then(res => {
            console.log(res);
            this.props.history.push('/');
        }).catch(err => console.log(err))    
    }

    
    render() {
        return (
            <main>
                <h1 className='form-header'>Add New Post</h1>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                   
                    <label className={styles.formItem}>
                        Title
                        <input name='title' type='text' value={this.state.title} onChange={this.handleChange} required />
                    </label>
                    <label className={styles.formItem}>
                        Description
                        <textarea name='description' rows='10' type='text' value={this.state.description} onChange={this.handleChange} required />
                    </label>
                    <label className={styles.formItem}>
                        Markdown
                        <textarea name='markdown' type='text' rows='15' value={this.state.post} onChange={this.handleChange} required />
                    </label>
                    <label className={styles.formItem}>
                        Tags
                        <input name='tags' type='text' onChange={this.handleChange}  />
                    </label>
                    <input className={styles.submit} type='submit' value='Submit' />
                </form>
            </main>
            
        );
    }
}