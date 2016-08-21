import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { changeQuery, searchAirport } from './actions';
import style from './style.css';
@connect(
    (state) => ({ query: state.autocomplete.query }),
    (dispatch) => {
        const debouncedSearchAirport = _.debounce((v) => (dispatch(searchAirport(v))), 300);
        return {
            changeQuery: (v) => (dispatch(changeQuery(v))),
            searchAirport: debouncedSearchAirport
        };
    }
)
@CSSModules(style)
export default class AutoComplete extends Component {
    static propTypes = {
        query: PropTypes.string,
        changeQuery: PropTypes.func,
        searchAirport: PropTypes.func
    };
    render() {
        const { query } = this.props;
        return <div styleName="autoComplete">
            <input
                styleName="input"
                value={query}
                onChange={::this.onChange}
                placeholder="Search Airport" />
        </div>;
    }
    onChange(evt) {
        const value = evt.target.value;
        this.props.changeQuery(value);
        this.props.searchAirport(value);
    }
}

