import React, { Component } from 'react'
import { Consumer } from '../../contactContext'
import {v1 as uuid} from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';


const initial_State = {
    name: '',
    email: '',
    phone: '',
    errors: {}
}

class AddContact extends Component {

    constructor(props) {
        super(props)
    
        this.state = initial_State;
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        // console.log(e.target.name);

        const {name, email, phone} = this.state;

        

        // if([e.target.error] === ''){
        //     this.setState({errors: {nameErr: 'Name is required'}})
        //     return;
        // }

        if(name === ''){
            this.setState({errors: {nameErr: 'Name is required'}})
            return;
        }
        if(email === ''){
            this.setState({errors: {emailErr: 'Email is required'}})
            return;
        }
        if(phone === ''){
            this.setState({errors: {phoneErr: 'Phone is required'}})
            return;
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        dispatch({type: 'ADD_CONTACT', payload: newContact});
        

        //Clear input fields
        this.setState(initial_State)
        // this.setState({
        //     name: '',
        //     email: '',
        //     phone: '' ,
        //     errors: {}
        // })

        // Redirect To Home Page
        this.props.history.push('/');
       
    }
    

    render() {
        const {name, email, phone} = this.state;
        const {nameErr, emailErr, phoneErr} = this.state.errors;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                <div>
                    <h1 className="display-1 mb-4">
                        <span className="text-danger">Add</span> Contact
                    </h1>
                
                <div className="card mb-5">
                <div className="card-header" style={{textAlign:'center'}}> <h4>Add Contact</h4> 
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                        <TextInputGroup 
                            label="Name"
                            name="name"
                            placeholder="enter name..."
                            value={name}
                            onChange={this.onChange}
                            error={nameErr}
                        />
                        <TextInputGroup 
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="enter email..."
                            value={email}
                            onChange={this.onChange}
                            error={emailErr}
                        />
                        <TextInputGroup 
                            label="Phone"
                            name="phone"
                            placeholder="enter phone..."
                            value={phone}
                            onChange={this.onChange}
                            error={phoneErr}
                        />
                        {/* <div className="form-group mb-3">
                            <label htmlFor="name" style={{fontWeight: 600}} > Name </label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control form-control-lg mt-2"
                                placeholder="enter name..."
                                value={name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="name" style={{fontWeight: 600}}> Email </label>
                            <input 
                                type="email"
                                name="email"
                                className="form-control form-control-lg mt-2"
                                placeholder="enter email..."
                                value={email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="name" style={{fontWeight: 600}}> Phone </label>
                            <input 
                                type="text"
                                name="phone"
                                className="form-control form-control-lg mt-2"
                                placeholder="enter phone..."
                                value={phone}
                                onChange={this.onChange}
                            />
                        </div> */}

                        <input
                            type="submit"
                            value="Add Conact"
                            className="btn btn-primary btn-lg btn-block form-control"
                        />

                    </form>

                </div>
            </div>
            </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;
