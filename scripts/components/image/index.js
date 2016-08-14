import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import { compostImageUrl } from 'lib/utils';
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
        const { artistId, name, description } = this.props;
        return <div styleName="image-container">
            <div>
                {this.state.hasImage && <img
                    styleName="bg"
                    src={compostImageUrl(artistId)}
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
    artistId: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
};

