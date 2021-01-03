import './styles.css';
export const Form = props => {
    return (
            <form className="searchForm" role="search" onSubmit={(e) => e.preventDefault()}>
              <input className="searchBox" autoComplete="off" name="title" type="text" placeholder="Search..." onChange={props.getSearchData} />
            </form>
    )
}