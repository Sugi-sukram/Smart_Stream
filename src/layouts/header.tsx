import React from 'react';
import "../styles/header/header-style.scss"
import notification from '../assets/notification.png';
import user from '../assets/placeholder-profile.png';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import Input, { SearchProps } from 'antd/es/input';

const Header: React.FC = () => {

  return (
    <header className='headerTag'>
      <section>
        <Input size="middle" placeholder="Search" prefix={<IoSearchOutline color='gray' />} style={{ width: 200, margin: "8px", border: "none" }} />
      </section>
      <section className='profile-section'>
        <div className='notification'>
          <img src={notification} alt="notification " />
          <p>64</p>
        </div>
        <div className='user-details'>
          <div className='profile-pic'>
            <img src={user} alt="notification" width={40} />
          </div>
          <div>
            <p className='profile-name'>Moni Roy</p>
            <p className=''>Admin</p>
          </div>
          <div>
            <IoIosArrowDropdown fontSize={24} color='gray' />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;