
import React from 'react';
import OptionTable from './uiTable.js';

import axios from 'axios';

const url = 'http://127.0.0.1:5000/option_chain'

class OptionChain extends React.Component {
  constructor(props) {
    super(props);
    // Initializing the state
    this.state = { 
      color: 'lightgreen',
      data: []
    };
  }
  componentDidMount() {
    axios.get(url)
      .then((response) => {
        this.setState({data: response.data})
      }).catch((err) => {
        console.log(err)
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
          <OptionTable rows={data}/>
      </div>
    );
  }
}
export default OptionChain;
