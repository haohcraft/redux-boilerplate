import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { DATA_IMAGES } from 'constants';
import Image from 'components/image';
import style from './image.css';
@CSSModules(style)
export default class ImagePage extends Component {
    render() {
        return <div styleName='list'>{this.buildImageList()}</div>;
    }
    buildImageList() {
        return DATA_IMAGES.map((item, k) => (
            <Image key={k} {...item}/>
        ));
    }
}
