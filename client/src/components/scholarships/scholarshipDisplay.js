import './styles.css';

export const ScholarshipDisplay = props => {
  const scholarships = props.state;
  return (
    scholarships.map((scholarship) => {
      return(
      <div key={scholarship._id} className="card">
          <div className="header">
            { scholarship.title }
          </div>
          <div className="apply">
          <form className="button" action={scholarship.website} target="_blank" rel="noopener noreferrer">
            <input className="btn" type="submit" value="Apply Now" />
          </form>
          </div>  
          <div className="deadline">
          <strong>Deadline: </strong>{ scholarship.deadline }
          </div>
          <div className="award">
          <strong>Award: </strong> { scholarship.award }
          </div>
          <div className="overview">
          <strong>Overview: </strong><br/> { scholarship.description }
          </div>
        </div>
      );
    })
  );
}