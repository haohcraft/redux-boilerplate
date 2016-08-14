import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import ImageList from './image.js';
import composeView from 'lib/decorators/composeView';
import ResponseMsg from 'components/responseMsg';
import style from './style.css';

const ImagePage = CSSModules(style)((props) => (
    <div styleName="image-list">
        {props.parts.list}
        <ResponseMsg parts={props.parts} />
    </div>
));
ImagePage.propTypes = {
    parts: PropTypes.object
};
export default connect(
    (state) => (state.list)
)(composeView({
    parts: {
        list: {
            content: (props) => (<ImageList {...props}/>)
        },
        error: {
            shouldRender: (props) => (props.loaded && props.error),
            content: () => (<div>This is an error</div>)
        },
        loading: {
            shouldRender: (props) => (props.loading),
            content: () => (<div>Loading</div>)
        },
        noResponse: {
            shouldRender: (props) => (props.loaded && !props.error && !props.list.length),
            content: () => (<div>This no such result.</div>)
        }
    }
})(ImagePage));
