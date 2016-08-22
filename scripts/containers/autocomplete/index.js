import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { changeQuery, searchAirport, selectAirport } from './actions';
import AutocompleteContent from './dropdownContent';
import style from './style.css';
@connect(
    (state) => ({
        query: state.autocomplete.query,
        list: state.autocomplete.list,
        selected: state.autocomplete.selected,
    }),
    (dispatch) => {
        const debouncedSearchAirport = _.debounce((v) => (dispatch(searchAirport(v))), 300);
        return {
            changeQuery: (v) => (dispatch(changeQuery(v))),
            searchAirport: debouncedSearchAirport,
            selectAirport: (v) => (dispatch(selectAirport(v)))
        };
    }
)
@CSSModules(style)
export default class AutoComplete extends Component {
    static propTypes = {
        list: PropTypes.array,
        query: PropTypes.string,
        selected: PropTypes.object,
        changeQuery: PropTypes.func,
        searchAirport: PropTypes.func,
        selectAirport: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.dropdownContent = null;
        this.state = {
            shouldOpenDropdown: false,
            ignoreBlur: false
        };
    }
    componentDidMount() {
        this.dropdownContent = (props) => (<AutocompleteContent {...props} />);
    }
    render() {
        const { query, list, selected } = this.props;
        const DropdownContent = this.dropdownContent;
        /*eslint-disable*/
        // debugger;
        /*eslint-enable*/
        return <div styleName="autoComplete"
                onMouseLeave={::this.onMouseLeave}
                onMouseEnter={::this.onMouseEnter}>
            <label>{selected.shouldSetStart ? 'From' : 'To'}</label>
            <input
                styleName="input"
                ref="input"
                value={query}
                onFocus={::this.onFocus}
                onBlur={::this.onBlur}
                onChange={::this.onChange}
                placeholder="try 'LAX'" />
            {DropdownContent &&
                this.state.shouldOpenDropdown && !!query.length &&
                <DropdownContent
                    list={list}
                    anchorEl={this.refs.input}
                    select={::this.selectAirport}
                />
            }
        </div>;
    }
    selectAirport(selectedObj) {
        const { selected } = this.props;
        this.props.changeQuery('');
        if (selected.shouldSetStart) {
            this.props.selectAirport({
                start: { ...selectedObj }
            });
        } else {
            this.props.selectAirport({
                end: { ...selectedObj }
            });
        }
        this.setState({
            shouldOpenDropdown: false,
            ignoreBlur: false
        });
    }
    onMouseLeave() {
        this.setState({
            ignoreBlur: false
        });
    }
    onMouseEnter() {
        this.setState({
            ignoreBlur: true
        });
    }
    onFocus() {
        const { list } = this.props;
        if (list.length) {
            this.setState({
                shouldOpenDropdown: true
            });
        }
        this.setState({
            ignoreBlur: true
        });
    }
    onBlur() {
        this.setState({
            shouldOpenDropdown: this.state.ignoreBlur
        });
    }
    onChange(evt) {
        const value = evt.target.value;
        this.props.changeQuery(value);
        this.props.searchAirport(value);
        if (value.length) {
            this.setState({
                shouldOpenDropdown: true
            });
        } else {
            this.setState({
                shouldOpenDropdown: false
            });
        }
    }
}

