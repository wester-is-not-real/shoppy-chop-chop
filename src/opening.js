import React from 'react';
import styl from './opening.module.css';
import ReactDOM from 'react-dom';
import {Button} from 'react-onsenui';

export default class OpeningPage extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
     return (
      <div className={styl.openingBackground}>
        {/* Navigation Bar Buttons*/}
        <div className={styl.navBar}>
          <div className={styl.navButtonDivs}>
            <Button className={styl.inicButton}
                  disabled={true}
                  modifier="large--quiet">
              Inicio
            </Button>
          </div>

          <div className={styl.navButtonDivs}>
            <Button className={styl.navButton}
                    modifier="large--quiet">
              Mi Perfil
            </Button>
          </div>

          <div className={styl.navButtonDivs}>
            <Button className={styl.navButton}
                    modifier="large--quiet">
              Mis Tiendas
            </Button>
          </div>
        </div>
        {/*Opening Text*/}
        <div className={styl.openText1}>
          Bienvenido
        </div>
        {/*Opening Page Buttons*/}
        <div className={styl.buttonChoice}>
          <div className={styl.buttondirs}>
            <div onClick={() => this.props.button1()}
             className={styl.button}>
              Nueva Lista
            </div>
          </div>

          <div className={styl.buttondirs}>
            <Button onClick={() => this.props.button2()}
             className={styl.button}>
              Abrir Lista Previa
            </Button>
          </div>

        </div>
      </div>
    );
    }
}
