/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions';
import {ModifyTodo} from '../component';

const container = (props) => {
    return (
        <ModifyTodo {...props} action="remove"/>
    )

}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (id) => {
            dispatch(deleteTodo(id))
        }
    };
}

export default connect(null, mapDispatchToProps)(container);