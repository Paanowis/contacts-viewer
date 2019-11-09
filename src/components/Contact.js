import React, { Component } from 'react';
import place from '../place.gif';


export default class Contact extends Component {
    constructor(props) {
        super(props);
        const { name, company, email, phone, address, group } = this.props.contact;
        this.state = {
            isEditing: false,
            name,
            company,
            email,
            phone,
            address,
            group,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editContact(this.props.contact.id, this.state);
        this.setState({
            isEditing: false
        })
    }

    render() {
        return (
            <div className="contact">
                {this.state.isEditing ?
                    (
                        <div className="editContact">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="control-label">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company" className="control-label">Company:</label>
                                    <input
                                        type="text"
                                        id="company"
                                        onChange={this.handleChange}
                                        value={this.state.company}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="control-label">Email:</label>
                                    <input
                                        type="text"
                                        id="email"
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className="control-label">Phone:</label>
                                    <input
                                        type="number"
                                        id="phone"
                                        onChange={this.handleChange}
                                        value={this.state.phone}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address" className="control-label">Address</label>
                                    <textarea id="address" rows="3" onChange={this.handleChange} value={this.state.address} className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="group" className="control-label">Group</label>
                                    <select value={this.state.group} id="group" onChange={this.handleChange} className="form-control">
                                        <option value="">Select Group</option>
                                        <option value="Family">Family</option>
                                        <option value="Friends">Friends</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
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
                                    <button className="btn btn-circle btn-default btn-md" onClick={() => {
                                        this.setState({ isEditing: !this.state.isEditing })
                                    }
                                    } style={{ margin: 5 + 'px', marginBottom: 100 + 'px' }}>
                                        <i className="glyphicon glyphicon-edit"></i>
                                    </button>
                                    <button className="btn btn-circle btn-danger btn-md" onClick={() => {
                                        this.props.deleteContact(this.props.contact.id)
                                    }
                                    } style={{ margin: 5 + 'px', marginBottom: 100 + 'px' }}>
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