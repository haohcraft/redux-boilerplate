import * as d3 from 'd3';
import BaseAxis from './baseAxis';

export default class YAxis extends BaseAxis {
    getAxis() {
        const { yScale, xScale } = this.props;
        const width = xScale.range()[1];
        return d3.axisLeft().scale(yScale)
                    .tickSizeInner(-width)
                    .tickSizeOuter(0);
    }
}
