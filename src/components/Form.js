import React, { Component } from 'react';
import NavbarForm from './NavbarForm';
import ListItems from './ListItems';
import placeholder from '../placeholder';
import { Link } from 'react-router-dom';
import { ContactsContext } from './Contacts';

export default class Form extends Component {
    static contextType = ContactsContext;

    state = {
        name: "",
        company: "",
        email: "",
        phone: "",
        address: "",
        group: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.context.addContact(this.state);
        this.setState({
            name: " ",
            company: " ",
            email: " ",
            phone: " ",
            address: " ",
            group: ""
        })
    }

    render() {
        console.log(this.context);
        
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <NavbarForm />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ListItems />
                        </div>
                        <div className="col-md-9">
                            <div className="panel panel-default">

                                <div className="panel-heading">
                                    <strong>Add Contact</strong>
                                </div>

                                <div className="panel-body">
                                    <div className="form-horizontal">
                                        <div className="row">
                                            <div className="col-md-8">

                                                <div className="form-group">
                                                    <label htmlFor="name" className="control-label col-md-3">Name</label>
                                                    <div className="col-md-8">
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            required
                                                            value={this.state.name}
                                                            onChange={this.handleChange}
                                                            className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="company" className="control-label col-md-3">Company</label>
                                                    <div className="col-md-8">
                                                        <input
                                                            type="text"
                                                            id="company"
                                                            required
                                                            value={this.state.company}
                                                            onChange={this.handleChange}
                                                            className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="email" className="control-label col-md-3">Email</label>
                                                    <div className="col-md-8">
                                                        <input
                                                            type="text"
                                                            id="email"
                                                            required
                                                            value={this.state.email}
                                                            onChange={this.handleChange}
                                                            className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="phone" className="control-label col-md-3">Phone</label>
                                                    <div className="col-md-8">
                                                        <input
                                                            type="number"
                                                            id="phone"
                                                            required
                                                            value={this.state.phone}
                                                            onChange={this.handleChange}
                                                            className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="address" className="control-label col-md-3">Address</label>
                                                    <div className="col-md-8">
                                                        <textarea rows="3" id="address" required value={this.state.address}
                                                            onChange={this.handleChange} className="form-control"></textarea>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="group" className="control-label col-md-3">Group</label>
                                                    <div className="col-md-5">
                                                        <select id="group" value={this.state.group} onChange={this.handleChange} className="form-control">
                                                            <option value="">Select Group</option>
                                                            <option value="Family">Family</option>
                                                            <option value="Friends">Friends</option>
                                                            <option value="Others">Others</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-4">
                                                <div className="fileinput fileinput-new" data-provides="fileinput">
                                                    <div className="fileinput-new thumbnail" style={{ width: 150 + 'px', height: 150 + 'px' }}>
                                                        <img src={placeholder} />
                                                    </div>
                                                    <div className="fileinput-preview fileinput-exists thumbnial" style={{ maxWidth: 200 + 'px', height: 200 + 'px' }}></div>
                                                    <div className="text-center">
                                                        <span className="btn btn-default btn-file"><span className="fileinput-new">Choose photo</span><span className="fileinput-exists">Change</span><input type="file" name="..." /></span>
                                                        <a href="#" className="btn btn-default fileinput-exists" data-dismiss="fileinput"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel-footer">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-offset-3 col-md-6">
                                                    <button type="submit" className="btn btn-primary">Save</button>
                                                    <button className="btn button btn-default" style={{ marginLeft: 10 + 'px' }}><Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Cancel</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}