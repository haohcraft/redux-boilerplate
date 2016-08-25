import * as d3 from 'd3';

import BaseAxis from './baseAxis';

export default class YAxis extends BaseAxis {
    getAxis() {
        const { xScale, yScale } = this.props;
        const height = yScale.range()[0];
        return d3.axisBottom().scale(xScale)
                    .tickSizeInner(-height)
                    .tickSizeOuter(0)
                    .tickPadding(10);
    }
}
