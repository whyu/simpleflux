import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Foo from './Components/Foo';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.renderSecondImage = this.renderSecondImage.bind(this);
    }

    componentDidMount(){

    }

    renderSecondImage() {
        console.log(this.props.store);
        if (this.props.store.test === 'foo') {
            return (<img src='http://www.lorempixel.com/200/200/'/>)
        }
        else {
            return '';
        }

    }

    render() {
        console.log('the store governs what to render', this.props.store);
        return (
            <div className="main-container">
                <Foo {...this.props}/>
                {this.renderSecondImage()}
            </div>
        )
    }
}
