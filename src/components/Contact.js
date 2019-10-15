import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      ...props,
    };

    this.toggleIsEditing = this.toggleIsEditing.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.updateField = this.updateField.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  toggleIsEditing() {
    if (
      !this.state.name ||
      !this.state.number ||
      !this.state.email ||
      !this.state.address
    ) {
      alert('Please fill out all forms.');
      return;
    }
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  deleteContact(event) {
    event.target.parentNode.parentNode.remove();
  }

  updateField(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  cancelEdit() {
    this.setState(
      {
        ...this.props,
      },
      () => this.toggleIsEditing(),
    );
  }

  render() {
    return (
      <tr>
        <td>
          {this.state.isEditing ? (
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              defaultValue={this.state.name}
              onBlur={this.updateField}
            />
          ) : (
            <span>{this.state.name}</span>
          )}
        </td>
        <td>
          {this.state.isEditing ? (
            <input
              type="text"
              className="form-control"
              name="number"
              placeholder="Phone Number"
              defaultValue={this.state.number}
              onBlur={this.updateField}
            />
          ) : (
            <span>{this.state.number}</span>
          )}
        </td>
        <td>
          {this.state.isEditing ? (
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              defaultValue={this.state.email}
              onBlur={this.updateField}
            />
          ) : (
            <span>{this.state.email}</span>
          )}
        </td>
        <td>
          {this.state.isEditing ? (
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Address"
              defaultValue={this.state.address}
              onBlur={this.updateField}
            />
          ) : (
            <span>{this.state.address}</span>
          )}
        </td>
        <td>
          <button
            type="button"
            class="btn btn-warning"
            name="edit"
            onClick={this.toggleIsEditing}
            style={
              this.state.isEditing ? { display: 'none' } : { display: 'inline' }
            }
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger"
            name="delete"
            onClick={this.deleteContact}
            style={
              this.state.isEditing ? { display: 'none' } : { display: 'inline' }
            }
          >
            Delete
          </button>
          <button
            type="button"
            class="btn btn-success"
            name="update"
            onClick={this.toggleIsEditing}
            style={
              this.state.isEditing ? { display: 'inline' } : { display: 'none' }
            }
          >
            Update
          </button>
          <button
            type="button"
            class="btn btn-danger"
            name="cancel"
            onClick={this.cancelEdit}
            style={
              this.state.isEditing ? { display: 'inline' } : { display: 'none' }
            }
          >
            Cancel
          </button>
        </td>
      </tr>
    );
  }
}
