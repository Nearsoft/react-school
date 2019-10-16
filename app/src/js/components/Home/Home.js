import React, { Component } from 'react';

class Home extends Component {
  render() {
    const container = {
      padding: '40px 200px 40px 200px'
    }
    const title = {
      color: '#2b3861'
    }
    const top = {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid #2b3861'
    }
    const button = {
      backgroundColor: '#2b3861',
      cursor: 'pointer',
      color: 'white',
      height: '40px',
      borderRadius: '25px',
      fontSize: '13px',
      paddingLeft: '15px',
      paddingRight: '15px'
    }

    return (
      <div style={container}>
        <div id='top-section' style={top}>
          <h1 style={title}>Eventos</h1>
          <button style={button}>Agregar Evento</button>
        </div>
        <div id='content' >
          {/*Aqui va la lista de eventos*/}
        </div>
      </div>
    );
  }
}

export default Home;
