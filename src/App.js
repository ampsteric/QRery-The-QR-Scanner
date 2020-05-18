import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-reader'


class App extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className="App">
              <div className="header">
              <h1>QRery</h1>
              </div>


              <div className="container">

                              <div className="left">
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ width: '100%',
                                            }}
                                  />
                              </div>
                    

                            <div className="right">
                                    <img src={require('./gif.gif')} alt="qrscan" /> 

                            </div>



              </div>
                                         <div> <p><span>Decoded Text: </span>{this.state.result}</p></div>

             
       </div>
    )
  }
}
export default App;


