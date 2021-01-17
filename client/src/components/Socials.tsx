import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

const Socials: React.FC = () => {
  return (
    <div className='Socials'>
      <div className='col-sm-12 text-center'>
        <ul className='social-list'>
          {/* LinkedIn */}
          <li className='social-inline-item'>
            <a
              href='https://www.linkedin.com/in/ksentak/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
            </a>
          </li>
          {/* GitHub */}
          <li className='social-inline-item'>
            <a href='https://github.com/ksentak' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </a>
          </li>
          {/* Stack Overflow */}
          <li className='social-inline-item'>
            <a
              href='https://stackoverflow.com/story/ksentak'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faStackOverflow} fixedWidth />
            </a>
          </li>
          {/* Email */}
          <li className='social-inline-item'>
            <a href='https://medium.com/@ksentak' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faMedium} fixedWidth />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;
