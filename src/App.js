import React from 'react';

const idLookup = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '.': 'decimal',
    'AC': 'clear',
    '=': 'equals',
    '+': 'add',
    '-': 'subtract',
    '/': 'divide',
    'x': 'multiply'
};

class Button extends React.Component {
    render() {
        return (
            <button id={idLookup[this.props.name]} className={this.props.cname} value={this.props.name} onClick={this.props.onClick}>
                {this.props.name}
            </button>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(state => ({
            input: state.input + e.target.value,
        }))
        console.log(e.target.value);
    }

    render() {
        return (
            <div id="wrapper">
                <div id="display-wrapper">
                    <p id="display" value={this.state.input}>{this.state.input}</p>
                    <p id="result"></p>
                </div>
                <div id="button-wrapper">
                    <div id="numerical-container" className="row no-gutters" >
                        {   ['7','8','9',
                            '4','5','6',
                            '1','2','3',
                            '0','.'].map(a => <Button name={a} cname={a === '0' ? "button col-8" : "button col-4"} onClick={this.handleClick} />)
                        }
                    </div>
                    <div id="operation-container" className="row no-gutters" >
                        {   ['AC',
                            'x', '/',
                            '+', '-',
                            '='].map(a => <Button name={a} cname={a === 'AC' ? "button col-12 blue" : a === '=' ? "button col-12" : "button col-6"} onClick={this.handleClick} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;