import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import Icon from 'components/icon';
const data = [
    {
        content: '4 People',
        icon: 'people'
    }, {
        content: 'Tues, Sep 30',
        icon: 'calendar'
    }, {
        content: '10:00PM',
        icon: 'clock'
    }
];
const buildContent = (contentData) => {
    const content = [];
    for (let i = 0; i < contentData.length; i++) {
        const c = data[i];
        content.push(<div key={i} styleName="content">
            <Icon name={c.icon} />
            <div styleName="name">{c.content}</div>
        </div>);
        if (i <= 1) {
            content.push(<span key={`split_${i}`} styleName="split"></span>);
        }
    }
    return content;
};
const Info = (props) => (<div styleName="info">
    {buildContent(props.data)}
</div>);
Info.defaultProps = { data };
Info.propTypes = {
    data: PropTypes.array
};

export default CSSModules(style)(Info);
