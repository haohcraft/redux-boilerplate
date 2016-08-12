import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';


const Image = (props) => (<div styleName="image-container">
    <div>
        <img
            styleName="bg"
            src={props.imgUrl}
        />
    </div>
    <div>{props.name}</div>
    <div>{props.description}</div>
</div>);

Image.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
};

export default CSSModules(style)(Image);
