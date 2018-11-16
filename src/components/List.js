import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  
import { handleDelete } from '../actions/actions';

const List = (props) => {
  const { arr, handleDelete, handleEdit } = props;
  return (
    <div>
      <ul>
        { arr.map((ele, i) => { 
          return (
            <li key={i}>
              {ele}
              <button id="delete" onClick={() => handleDelete(i)}>√</button>
            </li>) 
        }) }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    arr: state.reducers.arr
  };
};

const mapDispatchToProps = (dispatch) => { 
  return bindActionCreators({
    handleDelete,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
