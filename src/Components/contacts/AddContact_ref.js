import React, { Component } from 'react'

class AddContact1 extends Component {
    
    constructor(props) {
        super(props)
    
        this.nameIpnut = React.createRef();
        this.emailIpnut = React.createRef();
        this.phoneIpnut = React.createRef();
    }
    
    
    static defaultProps = {
        name: 'Alec',
        email: 'Alec@gmail.com',
        phone: '333-333-3333'
    }

    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameIpnut.current.value,
            email: this.emailIpnut.current.value,
            phone: this.phoneIpnut.current.value
        }
        console.log(contact);
    }
    

    render() {
        const {name, email, phone} = this.props;
        return (
            <div className="card mb-5">
                <div className="card-header" style={{textAlign:'center'}}> <h4>Add Contact</h4> 
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="name" style={{fontWeight: 600}} > New Name </label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control form-control-lg mt-2"
                                placeholder="Enter Name..."
                                defaultValue={name}
                                ref={this.nameIpnut}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="name" style={{fontWeight: 600}}> New Email </label>
                            <input 
                                type="email"
                                name="email"
                                className="form-control form-control-lg mt-2"
                                placeholder="Enter Email..."
                                defaultValue={email}
                                ref={this.emailIpnut}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="name" style={{fontWeight: 600}}> New Phone </label>
                            <input 
                                type="text"
                                name="phone"
                                className="form-control form-control-lg mt-2"
                                placeholder="Enter Phone..."
                                defaultValue={phone}
                                ref={this.phoneIpnut}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Add Conact"
                            className="btn btn-primary btn-lg btn-block form-control"
                        />

                    </form>

                </div>
            </div>
        )
    }
}

export default AddContact1;
