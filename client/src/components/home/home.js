import './styles.css';
import searchIcon from '../../images/search_icon.png';
import achieveIcon from '../../images/achieve_icon.png';
import resourcesIcon from '../../images/resources_icon.png';
export default function Home() {
    return (
        <div className="App">
          <div>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
          </div>
          <div className="headline">
            <h2 className=".shadow-pop-bl">
                Applying made easier.
            </h2>
            <button className="getstarted" type="button">Get Started</button>
          </div>
          <section className="content">
            <article className= "quicklinks">
              <ul className="icons"> 
                <li className="search">
                  <img className="sIcon" src={searchIcon} alt='search'></img>
                  <div className="label">Search through our immense database.</div>
                </li>
                <div className="vl"></div>
                <li className="achieve">
                  <img className="aIcon" src={achieveIcon} alt='search'></img>
                  <div className="label">Search through our immense database.</div>
                </li>
                <div className="vl2"></div>
                <li className="resources">
                  <img className="rIcon" src={resourcesIcon} alt='resources'></img>
                  <div className="label">Take advantage of our wide selection of resources.</div>
                </li>
              </ul>   
            </article>
          </section>
        </div>
      );
}