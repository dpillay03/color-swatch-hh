import React from 'react';
import colors from '../data/colors.json';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    randomize = (e) => {
        e.preventDefault();
        let mixer = colors[Math.floor(Math.random() * colors.length)];
        console.log('clicked', mixer)
    }
    render() {
        return <React.Fragment>
            <div className="sidenav">
                <p id="random" onClick={this.randomize}>Random Color</p>
                <p onClick={this.redTypes} className="color-list">Red</p>
                <p className="color-list">Orange</p>
                <p className="color-list">Yellow</p>
                <p className="color-list">Green</p>
                <p className="color-list">Blue</p>
                <p className="color-list">Purple</p>
                <p className="color-list">Brown</p>
                <p className="color-list">Gray</p>
            </div>

            <div className="color-section">
                {
                    colors.map(color => {
                        let handleClick = () => {
                            let clicked = `Selected: ${color.id} ${color.hex}`
                            console.log(clicked);
                        }
                        return <div className="color-container" onClick={handleClick}>
                            <div className="color-pallate" style={{ backgroundColor: `${color.hex}` }}></div>
                            <p className="color-name">{color.hex.toLowerCase()}</p>
                        </div>

                    })
                }
            </div>
        </React.Fragment >
    }
}
