import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <footer>
      <p>© SelfCare 2018</p>
      <ul className="social-icons">
        <li><Link to="#"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li>
        <li><Link to="#"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link></li>
     </ul>
    </footer>
  );
}
