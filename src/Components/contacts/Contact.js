import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaSort } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Consumer } from '../../contactContext';



class Contact extends Component {

//    static propTypes = {
//         name: PropTypes.string.isRequired ,
//         email: PropTypes.string.isRequired ,
//         phone: PropTypes.string.isRequired
//     }

    constructor(props) {
        super(props)
    
        this.state = {
             status: 'SHOW MORE',
             status2: false,
            //  yourName: ''
        }
    }
    

    showContactInfo = () => {
        // this.setState({ 
        //     status2: !this.state.status2,
        //  })

        if (this.state.status === 'SHOW MORE') 
        {
            this.setState({ status: 'COLLAPSE', status2: !this.state.status2 })
        }
        else
        {
            this.setState({ status: 'SHOW MORE', status2: !this.state.status2 })
        }
    }
    onDeleteClick = (id, dispatch) => {
        
        dispatch( {type: 'DELETE_CONTACT',payload: id} )

        // this.setState({ status2: !this.state.status2 })
        // this.props.deleteClickHandler(id);
        // console.log('crossed');
        // console.log(id);
        // dispatch({type: 'DELETE_CONTACT', payload: id})
    }
    // input1 = e => {
    //     this.setState({ yourName: e.target.value })
    // }

    // callme = () => {
    //     if (this.state.status === 'show more') 
    //         {
    //             this.setState({ status: 'see less', status2: !this.state.status2 })
    //         }
    //         else
    //         {
    //             this.setState({ status: 'show more', status2: !this.state.status2 })
    //         }
    // };

    render() {

        const {id, name, email, phone} = this.props.contact;
        const { status, status2 } = this.state
        // const { yourName } = this.state

        return (


        //     <div className="card card-body mb-3">
        //         <div className="card-header">
        //             {/* <div>Name: {yourName} </div>
        //             <input onChange={this.input1} /> */}
        //             <h3>
        //                 <span onClick={this.showContactInfo} style={{cursor: 'pointer'}}>
        //                     {name} <FaSort />
        //                 </span>
        //                 <FaTimes onClick={this.onDeleteClick.bind(this, id)} style={{cursor: 'pointer', float: 'right', color: 'red'}} />
        //             </h3>
                                
        //         </div>

        //         { status2 ? (
        //         <ul className="list-group">
        //             <li className="list-group-item">Email: {email}</li>
        //             <li className="list-group-item">Phone: {phone}</li>
        //         </ul>) : null}
                
        // </div>

        <Consumer>
            {
                (value) => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <div className="card-header">
                                {/* <div>Name: {yourName} </div>
                                <input onChange={this.input1} /> */}
                                <h3>
                                    <span onClick={this.showContactInfo} style={{cursor: 'pointer'}}>
                                        {name}
                                        <FaSort />
                                        <span style={{fontSize: '14px', color: 'grey'}}>        {status}
                                        </span>
                                    </span>
                                    <FaTimes onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{cursor: 'pointer', float: 'right', color: 'red'}} />
                                </h3>
                                            
                            </div>

                            { status2 ? (
                            <ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null}
                            
                        </div>
                    )
                }
            }
        </Consumer>

        

            // <Consumer>
            //     {value => {
            //         const {dispatch} = value;
            //         return (
            //             <div className="card card-body mb-3">
            //                 <div className="card-header">
            //                     {/* <div>Name: {yourName} </div>
            //                     <input onChange={this.input1} /> */}
            //                     <h3>
            //                         <span onClick={this.showContactInfo} style={{cursor: 'pointer'}}>
            //                             {name} <FaSort />
                                    
            //                         </span>
            //                         <FaTimes onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{cursor: 'pointer', float: 'right', color: 'red'}} />
            //                     </h3>
                                
            //                 </div>

            //                 { status2 ? (<ul className="list-group">
            //                     <li className="list-group-item">Email: {email}</li>
            //                     <li className="list-group-item">Phone: {phone}</li>
            //                 </ul>) : null}
                
            //             </div>
            //         )
            //     }}
            // </Consumer>

            
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
    // deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;
