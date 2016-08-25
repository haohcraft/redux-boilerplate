import * as d3 from 'd3';
const MARGIN = {
    top: 20,
    right: 10,
    bottom: 20,
    left: 25
};

export const getXScale = ({ maxW = 0, minX, maxX }) => (
    d3.scaleTime().domain([minX, maxX])
        .range([MARGIN.left, maxW - MARGIN.left - MARGIN.right])
);
export const getYScale = ({ maxH = 0, minY, maxY }) => (
    d3.scaleLinear().domain([minY, maxY])
        .range([maxH - MARGIN.top - MARGIN.bottom, 0])
);
