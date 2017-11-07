import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { connect } from 'react-redux';
import Actions from './actions';

import Grid from '../components/Grid';
import './style.css';

@connect(
    (state) => ({
        query: state.query,
        trendingCollection: state.trendingCollection.data,
        searchCollection: state.searchCollection.data,
        isLoading: state.trendingCollection.loading || state.searchCollection.loading
    }),
    {
        changeQuery: Actions.changeQuery,
        search: Actions.search,
        getTrending: Actions.getTrending
    }
)
export default class Search extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        changeQuery: PropTypes.func.isRequired,
        search: PropTypes.func.isRequired,
        getTrending: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        trendingCollection: PropTypes.array,
        searchCollection: PropTypes.array
    };
    debouncedSearch = debounce(this.props.search, 300)
    createGiphyList = () => {
        const { trendingCollection, searchCollection } = this.props;
        if (searchCollection && searchCollection.length) {
            return <Grid
                    title='Search Result'
                    collection={searchCollection}
                    columnWidth={200}
                    gutter={5} />;
        }
        return trendingCollection &&
                <Grid title='Trending Result'
                    collection={trendingCollection}
                    columnWidth={200}
                    gutter={5} />;
    }
    componentDidMount() {
        this.props.getTrending();
    }
    render() {
        const { query, isLoading } = this.props;
        return <div className="search">
            <input
                className="input"
                value={query}
                onChange={::this.onChange}
                placeholder="Search Giphy" />
            <div className="collection">
                {
                    isLoading ? (
                        <span className='loading'>Loading...</span>
                    ) : (
                        this.createGiphyList()
                    )
                }
            </div>
        </div>;
    }
    onChange(evt) {
        const value = evt.target.value;
        this.props.changeQuery({
            query: value
        });
        this.debouncedSearch({
            q: value
        });
    }
}
