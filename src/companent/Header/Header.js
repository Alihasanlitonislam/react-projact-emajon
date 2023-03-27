import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
      return (
                  <header className='bg-[#1C2B35] text-white'>
                        <nav>
                              <div className='w-11/12 mx-auto py-2 px-4 flex justify-between items-center'>
                                    <div>
                                          <img src={logo} alt="" />
                                    </div>
                                    <div>
                                          <ul className='flex justify-end gap-5'>
                                                <li>
                                                      <a href="#">Order</a>
                                                </li>
                                                <li>
                                                      <a href="#">Order Review</a>
                                                </li>
                                                <li>
                                                      <a href="#">Manage Inventory</a>
                                                </li>
                                                <li>
                                                      <a href="#">Login</a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </nav>
                  </header>
      );
};

export default Header;