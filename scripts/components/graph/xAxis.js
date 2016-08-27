import * as d3 from 'd3';
import BaseAxis from './baseAxis';
import { MARGIN } from './utils';
export default class YAxis extends BaseAxis {
    getAxis() {
        const { xScale, yScale } = this.props;
        const height = yScale.range()[0];
        return d3.axisBottom().scale(xScale)
                .ticks(d3.timeMinute.every(1))
                    .tickSizeInner(-height + MARGIN.bottom)
                    .tickSizeOuter(0)
                    .tickPadding(10);
    }
}
