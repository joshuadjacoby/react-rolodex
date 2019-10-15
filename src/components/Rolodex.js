import React from 'react';
import Contact from './Contact.js';

export default class Rolodex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      name: '',
      number: '',
      email: '',
      address: '',
    };

    this.addContact = this.addContact.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  addContact(event) {
    const contact = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      address: this.state.address,
    };

    if (
      !contact.name ||
      !contact.number ||
      !contact.email ||
      !contact.address
    ) {
      alert('Please fill out all forms.');
      return;
    }

    this.setState({
      contacts: this.state.contacts.concat([contact]),
      name: '',
      number: '',
      email: '',
      address: '',
    });
  }

  updateInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>React Rolodex</h1>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th style={{ width: '19%' }}>Name</th>
              <th style={{ width: '19%' }}>Phone Number</th>
              <th style={{ width: '19%' }}>Email</th>
              <th style={{ width: '19%' }}>Address</th>
              <th style={{ width: '24%' }}>Action</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.updateInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="number"
                  placeholder="Phone Number"
                  value={this.state.number}
                  onChange={this.updateInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.updateInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.updateInput}
                />
              </td>
              <td>
                <button className="btn btn-primary" onClick={this.addContact}>
                  Add Contact
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => {
              return <Contact {...contact} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
