import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import moment from 'moment';
import { FULL_DATE } from 'components/constants';

const Item = (props) => (<div styleName="item"
    onMouseOver={() => (props.highlightLoadItem(props.item.timestamp))}
    onMouseOut={() => (props.highlightLoadItem(0))}>
    <div styleName='time'>{moment(props.item.timestamp).format(FULL_DATE)}</div>
    <div styleName='load'>{props.item.loadAvg}</div>
</div>);

Item.propTypes = {
    item: PropTypes.shape({
        timestamp: PropTypes.number,
        loadAvg: PropTypes.number

    }),
    highlightLoadItem: PropTypes.func
};

export default CSSModules(style)(Item);
