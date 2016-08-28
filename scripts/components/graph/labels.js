import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import Icon from 'components/icon';

const Labels = () => (<div styleName="labels">
    <div styleName='label'>
        <Icon styles={{ icon: `${style['icon-circle']}` }}
            name='circle' />Data Point
    </div>
    <div styleName='label'>
        <Icon styles={{ icon: `${style['icon-line-green']}` }}
            name='line' />Recovered Indicator Line
    </div>
    <div styleName='label'>
        <Icon styles={{ icon: `${style['icon-line-red']}` }}
            name='line' />Warning Indicator Line
    </div>
</div>);

Labels.propTypes = {
    name: PropTypes.string
};

export default CSSModules(style)(Labels);
