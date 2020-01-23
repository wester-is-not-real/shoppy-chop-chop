import React from 'react';
import styl from './newlist.module.css';
import ReactDOM from 'react-dom';

export default class NewList extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
      return(
        <div className={styl.background}>
        </div>
      )
    }
}
