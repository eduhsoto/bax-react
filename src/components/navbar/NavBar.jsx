import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { setNewMenu } from '../../redux/actions';
import NavHambur from './NavHambur';
import NavHash from './NavHash';
import NavLi from './NavLi';

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClick = () => {
    setClicked(!clicked);
  };
  console.log(location);
  dispatch(setNewMenu(location.state));
  return (
    <nav className='sticky top-0 bg-white z-10'>
      <div className='mx-16 my-2.5 flex justify-between items-center tablet:mx-8 tablet:my-3 phone:mx-4'>
        <NavLink to='/'>
          <img
            src='assets/img/brand-logo.jpg'
            alt='Bax logo'
            className='w-3/4 my-3'
          />
        </NavLink>

        <NavHambur clicked={clicked} handleClick={handleClick} />

        <div
          className={`tablet:fixed tablet:top-20 tablet:w-2/4 tablet:left-1/3 tablet:bg-color_default tablet:py-5 tablet:px-5 tablet:shadow-bax-shadow tablet:rounded-bax-radius duration-500 ${
            clicked
              ? 'opacity-100 visible'
              : 'tablet:opacity-0 tablet:invisible'
          }`}
        >
          <div className='tablet:flex tablet:flex-col tablet:justify-between tablet:items-center tablet:gap-8'>
            <NavLi itemNav='Inicio' linkTo='/' number={1} />
            <NavLi itemNav='Cursos' linkTo='/courses' number={2} />
            <NavHash
              hashNav='#testimonials'
              hashName='Testimonios'
              number={1}
            />
            <NavHash hashNav='#about' hashName='Nosotros' number={1} />
            <NavLi itemNav='Contacto' linkTo='/contact' number={3} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
