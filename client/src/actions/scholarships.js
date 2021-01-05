import * as api from '../api';


// action creators

// fetches all scholarships
export const getScholarships = () => async(dispatch) => {
    try {
        const { data } = await api.fetchScholarships();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

// fetches scholarships based off searchTerm
export const getSearchResult = (searchTerm) => async(dispatch) => {
    try {
        const { data } = await api.fetchSearchResult(searchTerm);
        dispatch({ type: "FETCH", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}