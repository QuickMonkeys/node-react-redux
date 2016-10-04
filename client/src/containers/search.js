import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux';

import * as actions from '../actions/search.js';
import Search from '../components/search.jsx';

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


const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;