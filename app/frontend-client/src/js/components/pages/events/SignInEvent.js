import React, { Component } from 'react';
import Paper from '../../common/Paper';

class SignInEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      size: '',
      company: ''
    }
  }

  handleSubmitForm() {

  }

  handleUpdateField({target}) {
    console.log(target.name, target.value);
    this.setState({ [name]: target.value });
  }

  render() {
    // const { params: { eventId } } = this.props.match;
    return (
      <div className="r-margin-top-large">
        <h3>Inscribete al evento</h3>
        <Paper>
          <form className="flex">
            <div className="flex-1 flex-column r-padding-right-small">
              <div className="r-margin-bottom-small">
                <label className="block r-margin-bottom-tiny">Nombre:</label>
                <input className="input-field btn-full" type="text" name="name" onChange={this.handleUpdateField}></input>
              </div>
              <div className="r-margin-bottom-small">
                <label className="block r-margin-bottom-tiny">Talla de playera:</label>
                <input className="input-field btn-full" type="text" name="size" onChange={this.handleUpdateField}></input>
              </div>
            </div>
            <div className="flex-1 flex-column">
              <div className="r-margin-bottom-small">
                <label className="block r-margin-bottom-tiny">Correo Electrónico:</label>
                <input className="input-field btn-full" type="text" name="email" onChange={this.handleUpdateField}></input>
              </div>
              <div className="r-margin-bottom-small">
                <label className="block r-margin-bottom-tiny">Empresa:</label>
                <input className="input-field btn-full" type="text" name="company" onChange={this.handleUpdateField}></input>
              </div>
            </div>
          </form>
          <div className="flex-row r-margin-vertical-small">
            <button className="btn btn-primary float-right" onClick={this.handleSubmitForm}>Continuar</button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default SignInEvent;
