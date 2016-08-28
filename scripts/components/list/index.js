import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import Item from './item';

const List = (props) => (<div styleName="list-container">
    <div styleName="head">
        <div styleName='time'>Time</div>
        <div styleName='load'>Load Average</div>
    </div>
    <div styleName='list'>
        {props.data.map((item, k) => (
            <Item item={item} key={k} highlightLoadItem={props.highlightLoadItem} />)
        )}
    </div>
</div>);

List.propTypes = {
    data: PropTypes.array,
    highlightLoadItem: PropTypes.func
};

export default CSSModules(style)(List);
