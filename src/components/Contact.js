import React, { Component } from 'react';
import place from '../place.gif';


export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                {this.state.isEditing?
                    (
                        <div className="editContact"></div>
                    )
                    :
                    (
                        <table className="table">
                            <tr>
                                <td className="middle">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img src={place} className="media-object" />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div>Name: {this.props.contact.name}</div>
                                            <div>Company: {this.props.contact.company}</div>
                                            <div>Email: {this.props.contact.email}</div>
                                            <div>Phone: {this.props.contact.phone}</div>
                                            <div>Address: {this.props.contact.address}</div>
                                            <div>Group: {this.props.contact.group}</div>
                                        </div>
                                    </div>
                                </td>
                                <td width="100px" className="middle buttons">
                                    <button className="btn btn-circle btn-default btn-md" style={{margin: 5+'px', marginBottom: 100+'px'}}>
                                        <i className="glyphicon glyphicon-edit"></i>
                                    </button>
                                    <button className="btn btn-circle btn-danger btn-md" onClick={() => {
                                        this.props.deleteContact(this.props.contact.id)
                                    }
                                    } style={{margin: 5+'px', marginBottom: 100+'px'}}>
                                        <i className="glyphicon glyphicon-remove"></i>
                                    </button>
                                </td>
                            </tr>
                        </table>
                    )
                }
            </div>
        )
    }
}