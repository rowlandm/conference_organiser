import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const MailingManagementHomepage = () => {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const handleHover = (button) => {
      setActiveButton(button);
    };

    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('mouseenter', () => handleHover(button.id));
      button.addEventListener('mouseleave', () => handleHover(null));
    });

    return () => {
      document.querySelectorAll('.button').forEach(button => {
        button.removeEventListener('mouseenter', () => handleHover(button.id));
        button.removeEventListener('mouseleave', () => handleHover(null));
      });
    };
  }, []);

  return (
    <div className="homepage">
      <h1 className="title">Mailing Management Homepage</h1>
      <div className="button-container">
        <div className={`column ${activeButton === 'column1' ? 'active' : ''}`}>
          <button id="column1" className="button">
            <Link to="/*">Speakers</Link> 
          </button>
          <button id="column1" className="button">
            <Link to="/*">Sponsors</Link> 
          </button>
          <button id="column1" className="button">
            <Link to="/*">Senior Panelist</Link> 
          </button>
          <button id="column1" className="button">
            <Link to="/*">Engagement Stakeholders</Link> 
          </button>
          <button id="column1" className="button">
            <Link to="/*">Potential Session Chairs</Link> 
          </button>
        </div>
        <div className={`column ${activeButton === 'column2' ? 'active' : ''}`}>
          <button id="column2" className="button">
            <Link to="/*">Add Speakers</Link> 
          </button>
          <button id="column2" className="button">
            <Link to="/*">Add Sponsors</Link> 
          </button>
          <button id="column2" className="button">
            <Link to="/*">Add Panelist</Link> 
          </button>
          <button id="column2" className="button">
            <Link to="/*">Add Stakeholders</Link> 
          </button>
          <button id="column2" className="button">
            <Link to="/*">Add Session Chairs</Link> 
          </button>
        </div>
        <div className={`column ${activeButton === 'column3' ? 'active' : ''}`}>
          <button id="column3" className="button">
            <Link to="/*">RSE 2023 materials</Link> 
          </button>
          <button id="column3" className="button">
            <Link to="/template edit">Template Edit</Link> 
          </button>
          <button id="column3" className="button">
            <Link to="/marketing plan">Marketing Plan</Link> 
          </button>
          <button id="column3" className="button">
            <Link to="/event schedule">Event Schedule</Link> 
          </button>
          <button id="column3" className="button">
            <Link to="/email list ubscribers">Email List Subscribers</Link> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailingManagementHomepage;