import * as d3 from 'd3';
export const MARGIN = {
    top: 0,
    right: 20,
    bottom: 20,
    left: 20
};

export const getXScale = ({ maxW = 0, minX, maxX }) => (
    d3.scaleTime().domain([minX, maxX])
        .range([MARGIN.left, maxW - MARGIN.left - MARGIN.right])
);
export const getYScale = ({ maxH = 0, minY, maxY }) => (
    d3.scaleLinear().domain([minY, maxY])
        .range([maxH - MARGIN.top - MARGIN.bottom, MARGIN.bottom])
);
