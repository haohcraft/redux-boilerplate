import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { changeQuery } from './actions';
import { searchArtistList } from 'containers/image/actions';
import style from './style.css';
@connect(
    (state) => ({ query: state.query.value }),
    (dispatch) => ({
        changeQuery: (v) => (dispatch(changeQuery(v))),
        searchArtistList: (v) => (dispatch(searchArtistList(v)))
    })
)
@CSSModules(style)
export default class Search extends Component {
    static propTypes = {
        query: PropTypes.string,
        changeQuery: PropTypes.func,
        searchArtistList: PropTypes.func
    };
    render() {
        const { query } = this.props;
        return <div styleName="search">
            <input
                styleName="input"
                value={query}
                onChange={::this.onChange}
                placeholder="Search Artist" />
        </div>;
    }
    onChange(evt) {
        const value = evt.target.value;
        this.props.changeQuery(value);
        this.props.searchArtistList(value);
    }
}
