import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from '../../common/Paper';

class SignInEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atendee: {}
    }
  }

  handleSubmitForm = () => {

  }

  handleUpdateField = ({target}) => {
    this.setState({ [name]: target.value });
  }

  render() {
    // const { params: { eventId } } = this.props.match;
    return (
      <div className="r-margin-top-large">
        <h3>Inscribete al evento</h3>
        <Paper>
          <form onSubmit={this.handleSubmitForm}>
            <div className="flex">
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
            </div>
            <div className="flex flex-center overflow r-margin-top-small">
              <Link className='r-margin-left-auto' to={'/events'}>Volver</Link>
              <button className="r-margin-left-small btn btn-primary" onClick={this.handleSubmitForm}>Continuar</button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default SignInEvent;
