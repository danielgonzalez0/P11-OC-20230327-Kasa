import React from 'react';
import { useParams } from 'react-router-dom';

const FlatSheet = () => {

    const params = useParams()
    console.log(params.id);

    return (
        <div>
           <h1>fiche d'appartement</h1> 
        </div>
    );
};

export default FlatSheet;