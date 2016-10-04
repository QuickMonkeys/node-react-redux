import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux';

import * as actions from '../actions/list.js';
import List from '../components/list.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.languages,
        filter: state.filter,
        marked: state.marked
    }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators (actions, dispatch)  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);