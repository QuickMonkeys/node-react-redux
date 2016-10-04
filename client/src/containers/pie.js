import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux';

import PieChart from '../components/chart/pie.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.top5
    }
}


const PieChartChartContainer = connect(mapStateToProps)(PieChart);

export default PieChartChartContainer;