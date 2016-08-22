import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import style from './content.css';
import DropDownList from './dropdownList';
import composeView from 'lib/decorators/composeView';
import ResponseMsg from 'components/responseMsg';
@CSSModules(style)
class AutocompleteContent extends Component {
    static propTypes = {
        parts: PropTypes.object,
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
        const { pos } = this.state;
        const styleContent = {
            transform: `translate(${pos.left}px, ${pos.top}px)`
        };
        return <div styleName="autocompleteContent" style={styleContent}
            onClick={::this.onSelectAirport}
        >
            {this.props.parts.list}
            <ResponseMsg parts={this.props.parts} />
        </div>;
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

export default connect(
    (state) => (state.autocomplete)
)(composeView({
    parts: {
        list: {
            shouldRender: (props) => (!props.loading && props.list.length),
            content: (props) => (<DropDownList {...props}/>)
        },
        error: {
            shouldRender: (props) => (props.loaded && props.error),
            content: () => (<span>This is an error</span>)
        },
        loading: {
            shouldRender: (props) => (props.loading),
            content: () => (<span>Loading</span>)
        },
        noResponse: {
            shouldRender: (props) => (props.loaded && !props.error && !props.list.length),
            content: () => (<span>This no such result.</span>)
        }
    }
})(AutocompleteContent));
