import React from 'react';

import './nav-bar-page.styles.scss';
import NavBar from '../../components/nav-bar/nav-bar.component';

import data from './data';

const NavBarPage = () => {
	return (
		<div className="nav-bar-page">
			<NavBar list={data} theme="light-blue" />
		</div>
	);
};

export default NavBarPage;
