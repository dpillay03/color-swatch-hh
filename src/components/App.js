import React from 'react';
import Home from './Home.jsx'
import Header from './Header.jsx'

export default class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
  render() {
    return <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  }
}
