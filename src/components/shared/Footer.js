import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <footer>
      <p>© SelfCare 2018</p>
      <ul className="social-icons">
        <li><a href=""  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
        <li><a href=""  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
     </ul>
    </footer>
  );
}
