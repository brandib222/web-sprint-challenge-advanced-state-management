import React, { useEffect } from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';

 const SmurfList = (props) => {
        
    const isLoading = false;
  

    /* useEffect(() => {
        dispatchEvent(fetchSmurfs());
    }, []); */

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
    {
        props.smurfs.map((smurf, id) => (
            <Smurf smurf={smurf} key={id} />
            ))
    }
    </div>);
}

const mapStateToProps = (state) => {
    return ({
        smurfs: state.smurfs
    });
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. *** Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.