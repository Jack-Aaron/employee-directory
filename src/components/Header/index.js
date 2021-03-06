import React from 'react';
import { Jumbotron } from 'reactstrap';
import './style.css';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Employee Directory</h1>
        <p className="lead">Click on up-down arrow to sort Last Names A-Z or Z-A. Use the search box to narrow your results.</p>
      </Jumbotron>
    </div>
  );
};

export default Header;