import React from 'react';

import './homepage.styles.scss';

import SlidingContainer from '../components/sliding-panel/sliding-container.component';

import data from './data';

const HomePage = () => {
	return (
		<div className="home-page">{data && <SlidingContainer data={data} />}</div>
	);
};

export default HomePage;
