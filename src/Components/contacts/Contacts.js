import React, { Component } from 'react'
import { Consumer } from '../../contactContext';
import Contact from './Contact';

class Contacts extends Component {

        // state = {
        //     contacts: [
        //         {
        //             id: 1,
        //             name: 'John Doe',
        //             email: 'john@gmail.com',
        //             phone: '111-222-333'
        //         },
        //         {
        //             id: 2,
        //             name: 'Sarah james',
        //             email: 'sarah@gmail.com',
        //             phone: '444-555-333'
        //         },
        //         {
        //             id: 3,
        //             name: 'Alex Will',
        //             email: 'alexx@gmail.com',
        //             phone: '999-555-000'
        //         }
        //     ]
        // }

    // deleteContact = (id) => {
    //     // console.log(id);
    //     const {contacts} = this.state;
    //     const newContacts = contacts.filter(contact => (
    //         contact.id !==id
    //     ))
    //     this.setState({
    //         contacts: newContacts
    //     })
    // }
    
    render() {
        return (
            <Consumer>
                {
                    (value) => {
                        const {contacts} = value;
                        return (
                        <React.Fragment>
                            <h1 className="display-1 mb-3">
                                <span className="text-danger">Contact</span> List
                            </h1>
                            {contacts.map(contact => (
                                <Contact
                                    key={contact.id} 
                                    contact={contact} 
                                    // deleteClickHandler = {this.deleteContact}
                                />
                            ))}
                        </React.Fragment>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default Contacts;