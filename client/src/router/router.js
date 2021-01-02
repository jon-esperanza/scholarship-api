import '../router/styles.css';

import React from "react";
import { 
  BrowserRouter as Router,
} from "react-router-dom";
import "./styles.css";
import Nav from '../components/nav/nav.js';
import Container from '../components/nav/container.js';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Nav />
        <Container />
      </div>
    </Router>
  );
}