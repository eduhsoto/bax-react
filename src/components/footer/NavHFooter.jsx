import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

const NavHFooter = (props) => {
  const { hashNav, hashName } = props;
  return (
    <HashLink
      smooth
      to={'/' + hashNav}
      className='font-roboto text-base leading-[19px] font-normal text-color_default'
      scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
    >
      {hashName}
    </HashLink>
  );
};

export default NavHFooter;

NavHFooter.propTypes = {
  hashNav: PropTypes.string,
  hashName: PropTypes.string,
};
