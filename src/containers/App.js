import { connect  } from 'react-redux';
import React from 'react';
import { bindActionCreators} from 'redux';
import { addCount} from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        count:state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        AddCount:addCount
    },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);