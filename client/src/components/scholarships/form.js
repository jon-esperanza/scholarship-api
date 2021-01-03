export const Form = props => {
    return (
        <form onSubmit={props.getSearchData}>
              <input autoComplete="off" name="title" type="text" placeholder="look thru database..."/>
              <button type="Submit">Search</button>
            </form>
    )
}