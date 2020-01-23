import React from 'react';
import OpeningPage from './opening.js';
import Square from './square.js';
import NewList from './newlist.js';

export default class Views extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          view:'OpeningPage'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(viewChoice){
      this.setState({view:viewChoice});
    }

    render() {
      if (this.state.view == 'OpeningPage') {
        return(<OpeningPage button1={() => this.handleClick('NewList')}
        button2={() => this.handleClick('OpenList')}/> )
      }
      if (this.state.view == 'NewList'){
        return(<NewList/>)
      }
      if (this.state.view == 'OpenList'){
        return(<div>Esta opcion no esta disponible </div>)
      }

    }
}
