import axios from 'axios';
import React, { Component } from 'react'

const contactContext = React.createContext();
// const Consumer = contactContext.Consumer;
// const Provider = contactContext.Provider;

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


const reducer = (s, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...s,
                contacts: s.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
            // {
            //    const ncontacts = s.contacts.filter(
            //         contact => contact.id !== action.payload
            //     );
            //     this.setState({
            //         contacts: ncontacts
            //     })
            // };
        case 'ADD_CONTACT':
            return {
                ...s,
                contacts: [action.payload, ...s.contacts]
            };
            default:
            return s;
    }
};


export class Provider extends Component {

    state = {
        // contacts: [
        //     {
        //         id: 1,
        //         name: 'John Doe',
        //         email: 'john@gmail.com',
        //         phone: '111-222-333'
        //     },
        //     {
        //         id: 2,
        //         name: 'Sarah james',
        //         email: 'sarah@gmail.com',
        //         phone: '444-555-333'
        //     },
        //     {
        //         id: 3,
        //         name: 'Alex Will',
        //         email: 'alexx@gmail.com',
        //         phone: '999-555-000'
        //     }
        // ],

        contacts: [],

        // dispatch: (action) => this.setState(reducer(this.state.contacts, action))
        
        dispatch: (action) => this.setState( s => reducer(s, action))

        // for del func
        // dispatch: (action) => {
        //     const ncontacts = this.state.contacts.filter(
        //             contact => contact.id !== action.payload
        //         )
        //         this.setState({contacts: ncontacts})
        // }

        
        // dispatch: (action) => reducer(this.state, action)
        

    }

    componentDidMount() {
        axios
        .get
            ('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({contacts : res.data}))
    }



    render() {
        return (
            <contactContext.Provider value={this.state}>
                {this.props.children}
            </contactContext.Provider>
        )
    }
}

// export const Provider = contactContext.Provider;


// export {Consumer};
export const Consumer = contactContext.Consumer;
