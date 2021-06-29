import React from 'react';

import './side-bar-page.styles.scss';

import SideBar from '../../components/side-bar/side-bar.component';
import data from './data';

const SideBarPage = () => {
	return (
		<div className="side-bar-page">
			<SideBar data={data} />
		</div>
	);
};

export default SideBarPage;
