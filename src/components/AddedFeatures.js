import React from 'react';

import AddedFeature from './AddedFeature';
import {connect} from "react-redux";

//actions
import {removeItem} from "../actions";

const AddedFeatures = props => {
    return (
        <div className="content">
            <h6>Added features:</h6>
            {props.features.length ? (
                <ol type="1">
                    {props.features.map(item => (
                        <AddedFeature key={item.id} feature={item} removeItem={props.removeItem}/>
                    ))}
                </ol>
            ) : (
                <p>You can purchase items from the store.</p>
            )}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        features: state.car.features,
    }
};
export default connect(mapStateToProps, {removeItem})(AddedFeatures);
