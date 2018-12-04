import React from 'react';
import Logo from '../assets/logo-symbol.svg'

export default class Header extends React.Component {
    render() {
        return <React.Fragment>
            <header>
                <img id="logo" src={Logo} alt="logo" />
                <input type="text" placeholder="Search"/>
            </header>
        </React.Fragment>
    }
}
