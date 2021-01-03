import React from 'react';
import Router from './router/router.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getScholarships } from './actions/scholarships.js';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getScholarships());
      }, [dispatch]);
    return (
        <div>
            <Router/>
        </div>
    )
}

export default App;