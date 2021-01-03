import { useDispatch, useSelector } from 'react-redux';
import { Form } from './form.js';
import { useEffect } from 'react';
import { ScholarshipDisplay } from './scholarshipDisplay.js';
import FadeIn from 'react-fade-in';
import './styles.css';

import { getScholarships, getSearchResult } from '../../actions/scholarships.js';




export default function Scholarships() {
  const dispatch = useDispatch();
  const scholarships = useSelector((state) => state.scholarships);
  useEffect(() => {
    dispatch(getScholarships());
  }, [dispatch]);
  console.log(scholarships);

  const getSearchData = async(e) => {
    const searchTerm = e.target.value;
    e.preventDefault();
    dispatch(getSearchResult(searchTerm));
  }
  var cardsStyle = {
    height: "900px",
    backgroundColor: "purple",
    maxWidth: "80%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between"
  };

    return (
        <div className="App">
          <div className="main">
          <h2>/scholarships</h2>
          </div>
          <div className="add">
            <label className="btnLbl">Want to make a scholarship submission?</label><br/>
            <button className= "click" type="button">Click here</button>
          </div>
          <div>
            <Form getSearchData={getSearchData}/>
          </div>
          <section className="Cards">
            <FadeIn style={cardsStyle}>
              <ScholarshipDisplay state={ scholarships } /> 
            </FadeIn>
          </section>
        </div>
      );
}

