import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux';

import * as actions from '../actions/search.js';
import Search from '../components/search.jsx';

// Define the parts of state that will be exposed in the component
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.languages,
        filter: state.filter,
        marked: state.marked
    }
}

// Define the actions that will be used by the component
const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators (actions, dispatch)  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

