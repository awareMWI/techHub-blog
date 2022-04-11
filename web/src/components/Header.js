import clsx from 'clsx';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import { menu } from '../constants/menu';
import HeaderStyles from '../styles/HeaderStyles';
import ActionButton from './buttons/ActionButton';
import Logo from './Logo';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const hanldeNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              <div className="searchIcon">
                <div className="searchIcon__wrapper">
                  <MdSearch />
                </div>
              </div>
              <ActionButton
                className="mobileMenuButton"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <MdMenu />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                className="mobileNavBg"
                aria-label="close menu"
                role="button"
                tabIndex={0}
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={hanldeNavItemClick}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="serachIcon">
                  <div className="searchIcon__wrapper">
                    <MdSearch />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}
