import { connect }  from 'react-redux';

import PieChart from '../components/chart/pie.jsx';

export default connect( (state, ownProps) => { return { data: state.top5 } } )(PieChart);