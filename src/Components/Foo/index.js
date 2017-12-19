import React, { Component } from 'react';

export default class Foo extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this)
    }

    componentDidMount() {
    }

    _handleClick() {
        console.log('clicking!, now dispatching foo.click action');
        this.props.dispatcher('foo.click');
    }

    render() {
        return (
            <div className='menu-con'>
                <img src='http://www.lorempixel.com/100/100/' onClick={this._handleClick}/>
            </div>
        );
    }
}