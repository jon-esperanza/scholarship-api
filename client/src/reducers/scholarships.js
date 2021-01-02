export default (scholarships = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return scholarships;
        case 'FETCH':
            return scholarships;
        default:
            return scholarships;
    }
}