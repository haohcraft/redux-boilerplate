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
const Info = (props) => (<div styleName="info">
    {props.data.map((c, k) => (<div key={k} styleName="content">
        <Icon name={c.icon} />
        <div styleName="name">{c.content}</div>
    </div>))}
</div>);
Info.defaultProps = { data };
Info.propTypes = {
    data: PropTypes.array
};

export default CSSModules(style)(Info);
