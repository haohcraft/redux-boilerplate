import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import style from './content.css';

@CSSModules(style)
export default class AutocompleteContent extends Component {
    static propTypes = {
        list: PropTypes.array,
        anchorEl: PropTypes.object,
        select: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.state = {
            pos: {
                left: 0,
                top: 0
            }
        };
    }
    componentDidMount() {
        this.calcPos();
    }
    render() {
        const { list } = this.props;
        const { pos } = this.state;
        const styleContent = {
            transform: `translate(${pos.left}px, ${pos.top}px)`
        };
        const opts = list && list.map((airport, k) => (<li styleName="item" key={k}
                data-code={airport.code}
                data-lat={airport.lat}
                data-lon={airport.lon}
            >
                {airport.name}
            </li>
        ));
        return <ul styleName="autocompleteContent" style={styleContent}
            onClick={::this.onSelectAirport}
        >
            {opts}
        </ul>;
    }
    calcPos() {
        const { anchorEl } = this.props;
        const selfEl = ReactDOM.findDOMNode(this);
        if (!anchorEl || !selfEl) return;
        const anchorElPos = anchorEl.getBoundingClientRect();
        const contentElPos = selfEl.getBoundingClientRect();
        // In our simple case here, we want to place the content blow the input
        /*eslint-disable*/
        // debugger;
        /*eslint-enable*/
        const diffWidth = anchorElPos.width - contentElPos.width;
        const expectLeft = anchorElPos.left - contentElPos.left + diffWidth / 2;
        const expectTop = anchorElPos.top + anchorElPos.height - 5;
        this.setState({
            pos: {
                left: expectLeft,
                top: expectTop
            }
        });
    }
    onSelectAirport(evt) {
        this.props.select({
            code: evt.target.getAttribute('data-code'),
            lat: evt.target.getAttribute('data-lat'),
            lon: evt.target.getAttribute('data-lon')
        });
    }
}
