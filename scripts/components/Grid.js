// Inspired by https://github.com/pinterest-attic/react-pinterest/blob/master/src/components/PinterestGrid.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Giphy from './Giphy';
import './Grid.css';


const containerWidth = 1040;

const createArray = number => {
    const array = [];
    for (let i = 0; i < number; i++) {
        array.push(0);
    }
    return array;
};

const getColumnLengthAndWidth = (width, value, gutter) => {
    const columnWidth = parseFloat(value);
    return [
        Math.floor((width - (width / columnWidth - 1) * gutter) / columnWidth),
        columnWidth
    ];
};

class Grid extends Component {

    static propTypes = {
        gutter: PropTypes.number.isRequired,
        columnWidth: PropTypes.number.isRequired,
        collection: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
    }
    items = {};
    handleItemMounted = gridItem => {
        this.items[gridItem.props.itemKey] = gridItem;
    };
    handleItemUnmount = gridItem => {
        delete this.items[gridItem.props.itemKey];
    };
    getColumnCount = () => {
        const rootNode = this.root;
        const rootWidth =
            rootNode.offsetWidth || rootNode.parentNode.offsetWidth;
        const childWidth = this.props.columnWidth;
        return Math.floor(rootWidth / (childWidth + this.props.gutter));
    };
    layout = () => {
        const {
            columnWidth: rawColumnWidth,
            gutter
        } = this.props;
        const [maxColumn, columnWidth] = getColumnLengthAndWidth(
            containerWidth,
            rawColumnWidth,
            gutter
        );
        const columnHeights = createArray(maxColumn);
        const rects = this.props.collection.map(coll => {
            const columnIndex = columnHeights.indexOf(
                Math.min(...columnHeights)
            );
            const height = parseInt(coll.height, 10);
            const top = columnHeights[columnIndex];
            const left = columnIndex * (columnWidth + gutter);
            columnHeights[columnIndex] += height + gutter;
            return {
                top,
                left,
                height,
                width: columnWidth
            };
        });
        const width = maxColumn * columnWidth + (maxColumn - 1) * gutter;
        const finalRects = rects.map(o => ({
            ...o,
            left: o.left + (containerWidth - width) / 2
        }));
        this.setState({ rects: finalRects });
    }
    state = {
        rects: {}
    };
    componentDidMount() {
        this.layout();
    }
    render() {
        const { collection, title } = this.props;
        return (
            <div className="grid" ref={node => (this.root = node)}>
                <div className='title'>{ title }</div>
                <div className='list'>
                    {
                        collection.map((col, k) => (
                            <Giphy
                                key={col.url}
                                itemKey={col.url}
                                onMounted={this.handleItemMounted}
                                onUnmount={this.handleItemUnmount}
                                styleOpt={this.state.rects[k]}
                                {...col} />
                        ))
                    }
                </div>
            </div>
        );
    }
}


export default Grid;
