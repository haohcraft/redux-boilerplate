import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
@CSSModules(style)
export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasImage: true
        };
    }
    render() {
        const { imgUrl, name, description } = this.props;
        return <div styleName="image-container">
            <div>
                {this.state.hasImage && <img
                    styleName="bg"
                    src={imgUrl}
                    onError={::this.onImageError}
                />}
            </div>
            <div>{name}</div>
            <div>{description}</div>
        </div>;
    }
    onImageError() {
        this.setState({
            hasImage: false
        });
    }
}
Image.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
};

