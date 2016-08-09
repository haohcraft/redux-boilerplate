import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import style from './choice.css';
import _ from 'lodash';
import Notation from './notation';

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
        const notationContent = (<div>{c}</div>);
        content.push(
            <div key={i} styleName="notation">
                <Notation content={notationContent} icon={iconMap[k]} />
            </div>
        );
    }
    return content;
};
const Choice = (props) => (<div styleName="info">
    {buildContent(props.choice)}
</div>);
Choice.propTypes = {
    choice: PropTypes.object
};

export default connect(
    (state) => ({ choice: state.choice })
)(CSSModules(style)(Choice));

