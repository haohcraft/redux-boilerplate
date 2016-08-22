import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import style from './style.css';

@connect(
    (state) => ({
        start: state.autocomplete.selected.start,
        end: state.autocomplete.selected.end
    })
)
@CSSModules(style)
export default class Map extends Component {
    static propTypes = {
        start: PropTypes.object,
        end: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {
            haha: true
        };
    }
    render() {
        const { start, end } = this.props;
        let mapUrl = `
            http://maps.googleapis.com/maps/api/staticmap?
            key=AIzaSyBOcV4KMZ8oG6ps4B-kJl3cCba1NuibqKw
            &center=39.266448, -96.286407
            &zoom=3
            &size=640x640
        `;
        if (start.code) {
            mapUrl += `
                &markers=color:red%7Clabel:${start.code.substring(0, 1)}%7C${start.lat},${start.lon}
            `;
        }
        if (end.code) {
            mapUrl += `
                &markers=color:blue%7Clabel:${end.code.substring(0, 1)}%7C${end.lat},${end.lon}
                &path=color:0x0000ff|weight:5|${start.lat},${start.lon}|${end.lat},${end.lon}
            `;
        }
        return <div styleName="map">

            {!!start.code && !!end.code && <div>{`${start.code} TO ${end.code}`}</div>}
            <img src={mapUrl} />
        </div>;
    }
}
