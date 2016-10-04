import { connect }  from 'react-redux';

import BarChart from '../components/chart/bar.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.languages,
        marked: state.marked
    }
}

export default connect(mapStateToProps)(BarChart);