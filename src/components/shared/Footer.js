import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <footer>
      <p>© SelfCare 2018</p>
      <ul className="social-icons">
        <li><FontAwesomeIcon icon={['fab', 'apple']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'twitter']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'instagram']} /></li>
        {/* <li><span className="fa-stack fa-lg fa-1x"><a href=""  target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="false"></i></a></span></li>
        <li><span className="fa-stack fa-lg fa-1x"><a href=""  target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="false"></i></a></span></li> */}
     </ul>
    </footer>
  );
}
