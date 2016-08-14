import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';


const ResponseMsg = (props) => (<div>
    {props.parts.error && <div styleName="error"> {props.parts.error}</div>}
    {props.parts.loading && <div styleName="loading"> {props.parts.loading}</div>}
    {props.parts.noResponse && <div styleName="noResponse"> {props.parts.noResponse}</div>}
</div>);

ResponseMsg.propTypes = {
    parts: PropTypes.shape({
        error: PropTypes.element,
        loading: PropTypes.element,
        noResponse: PropTypes.element
    })
};

export default CSSModules(style)(ResponseMsg);
