import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  
import { handleChange, handleSubmit } from '../actions/actions';

const Form = (props) => {
  const { currentText, handleChange, handleSubmit} = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={currentText} />
        {/* {currentText} */}
        <button id="submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentText: state.reducers.currentText
  };
};

const mapDispatchToProps = (dispatch) => { 
  return bindActionCreators({
    handleChange,
    handleSubmit,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
