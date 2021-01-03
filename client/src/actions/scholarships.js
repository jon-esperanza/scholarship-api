import * as api from '../api';


// action creators
export const getScholarships = () => async(dispatch) => {
    try {
        const { data } = await api.fetchScholarships();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
export const getSearchResult = (searchTerm) => async(dispatch) => {
    try {
        const { data } = await api.fetchSearchResult(searchTerm);
        dispatch({ type: "FETCH", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}