import React, { Component } from 'react';
import ListItems from './ListItems';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class Contacts extends Component {
    state = {
        contacts: [
            { name: 'Simon', company: 'Google Inc.', email: 'paanowis10@gmail.com', phone: '0557222234', address: 'Teshie-Nungua', group: 'Family', id: 1 },
            { name: 'Bonney', company: 'Codetrain', email: 'paanowis10@gmail.com', phone: '0557222234', address: 'Teshie-Nungua', group: 'Family', id: 2 },
        ]
    }

    addContact = (contact) => {
        contact.id = Math.random();
        let contacts = { ...this.state.contacts, contact };
        this.setState({
            contacts: contacts
        })
    }

    deleteContact = (id) => {
        const contacts = this.state.contacts.filter(contact =>{
            return contact.id !== id
        });
        this.setState({
            contacts: contacts
        })
    }

    render() {
        const allContacts = this.state.contacts.map(contact => {
            return (
                <Contact key={contact.id} contact={contact} deleteContact={this.deleteContact} />
            )
        })

        return (
            <div className="contacts">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <h3 className="navbar-brand text-uppercase">
                                My contacts
                            </h3>
                        </div>
                        <Link to="/Form" className="navbar-right btn btn-default text-uppercase nav-btn">
                            Add Contact
                        </Link>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ListItems />
                        </div>
                        <div className="col-md-9">
                            {allContacts}
                        </div>
                        {/* <div className="row">
                            <div className="col-md-12">
                                <Form addContact={this.addContact} />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}