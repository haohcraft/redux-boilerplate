import * as d3 from 'd3';
const TEN_MINUTES = 10 * 60 * 1000; // in millsec
const startTest = 1472041619130;
const endTest = 1472042210849;
const MARGIN = {
    top: 20,
    right: 10,
    bottom: 20,
    left: 25
};

export const getXScale = ({ maxW = 0 }) => {
    const end = endTest || new Date().getTime();
    const start = startTest || end - TEN_MINUTES;
    return d3.scaleTime().domain([start, end])
        .range([MARGIN.left, maxW - MARGIN.left - MARGIN.right]);
};

export const getYScale = ({ maxH = 0 }) => {
    const end = 3;
    const start = 1;
    return d3.scaleLinear().domain([start, end])
        .range([maxH - MARGIN.top - MARGIN.bottom, 0]);
};
