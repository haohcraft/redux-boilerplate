import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Image from 'components/image';
import style from './image.css';

@CSSModules(style)
export default class ImageList extends Component {
    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.shape(Image.propTypes))
    };
    render() {
        return <div styleName='list'>{this.buildImageList()}</div>;
    }
    buildImageList() {
        return this.props.list.map((item, k) => (
            <Image key={k} {...item}/>
        ));
    }
}
