import React from 'react';
import { FaShare, FaTimes } from 'react-icons/fa';
import './App.css';

class App extends React.Component {
  state = {
    modal: false
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    console.log('submitted')
    document.getElementById("notify-form").reset();
    this.setState({
      modal: true
    })
  }

  hideModal = () => {
    this.setState({
      modal: false
    })
  }

  render(){    
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="btn"
            href="https://shop.hodinkee.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            &lsaquo; H Shop
          </a>
          <a
            className="btn"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share <FaShare />
          </a>
        </header>
        <article>
          <div><img src='logo.png' alt='Hodinkee Logo'/></div>
          <div className='coming-soon'>Coming 06.26.19</div>
          <div>
            <form id='notify-form' onSubmit={this.handleSubmit}>
              <input name='email' type='email' placeholder='Your Email Address'/>
              <button className='submit' type="submit">
                Notify Me
              </button>
            </form>
          </div>
          { this.state.modal ? <div><button className="btn success" onClick={this.hideModal}>Success <FaTimes/></button></div> : null }
        </article>
      </div>
    );
  }
}

export default App;
