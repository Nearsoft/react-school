import React, { Component } from 'react';

class SignInEvent extends Component {

  render() {
    // const { params: { eventId } } = this.props.match;
    return (
      <div className="r-margin-horizontal-large">
        <h3>Inscribete al evento</h3>
        <div className="r-margin-vertical-large">
          <form className="flex">
            <div className="flex-1 flex-column r-padding-right-small">
              <div className="r-margin-bottom-small">
                <label className="block">Nombre:</label>
                <input className="" type="text" name=""></input>
              </div>
              <div className="r-margin-bottom-small">
                <label className="block">Talla de playera:</label>
                <input type="text" name=""></input>
              </div>
            </div>
            <div className="flex-1 flex-column">
              <div className="r-margin-bottom-small">
                <label className="block">Correo Electrónico:</label>
                <input type="text" name=""></input>
              </div>
              <div className="r-margin-bottom-small">
                <label className="block">Empresa:</label>
                <input type="text" name=""></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInEvent;
