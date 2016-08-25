import Tooltip from 'components/graph/tooltip';
import { connect } from 'react-redux';
import _ from 'lodash';
const ConnectedTooltip = connect(
    (state) => (_.get(state, 'graph.highlight'))
)(Tooltip);

export default ConnectedTooltip;
