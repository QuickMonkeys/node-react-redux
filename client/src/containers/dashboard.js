import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux';

import * as actions from '../actions/dashboard.js';
import DashBoard from '../components/dashboard.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.filter == undefined 
            ? state.languages
            : state.languages.filter((f) => f.position <= state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators (actions, dispatch)  }
}

const DashBoardContainer = connect(mapStateToProps, mapDispatchToProps)(DashBoard);

export default DashBoardContainer;