import React from 'react';
import styles from './square.module.css';

export default class Square extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          message: "santa"
        }
    }

    render() {
      const not_html = <h1> nibba </h1>;
        return(
          <div>
            <div className={styles.square}>
              {this.state.message}
              <iframe width="600px" height="400px" src="https://www.youtube.com/embed/9TlruxwFFUQ">
              </iframe>
            </div>
            <div>
              <button onClick={() => this.setState({message: "just kidding,"})}>
                fk me
              </button>
            </div>
          </div>
        );
    }
}
