import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './list.css';


const DropDownList = (props) => (<div>
    {props.list.map((airport, k) => (<div styleName="item" key={k}
        data-code={airport.code}
        data-lat={airport.lat}
        data-lon={airport.lon}
    >
        {airport.name}
    </div>))}
</div>);

DropDownList.propTypes = {
    list: PropTypes.array
};

export default CSSModules(style)(DropDownList);
