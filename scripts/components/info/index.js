import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import Icon from 'components/icon';
import _ from 'lodash';

const iconMap = {
    people: 'people',
    date: 'calendar',
    time: 'clock'
};
const buildContent = (contentData) => {
    const content = [];
    const keys = _.keys(contentData);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        const c = contentData[k];
        content.push(<div key={i} styleName="content">
            <Icon name={iconMap[k]} />
            <div styleName="name">{c}</div>
        </div>);
        if (i <= 1) {
            content.push(<span key={`split_${i}`} styleName="split"></span>);
        }
    }
    return content;
};
const Info = (props) => (<div styleName="info">
    {buildContent(props.choice)}
</div>);
Info.propTypes = {
    choice: PropTypes.object
};

export default CSSModules(style)(Info);
