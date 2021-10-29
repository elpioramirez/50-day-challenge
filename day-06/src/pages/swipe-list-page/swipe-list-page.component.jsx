import React from 'react';
import './swipe-list-page.styles.scss';

import List from '../../components/list/list-container.component';

import data from './data';

const SwipeListPage = () => {
	return (
		<div className="swipe-list-page">
			<List data={data} swipeable="full" leftColor="danger" expandable={true} />
		</div>
	);
};

export default SwipeListPage;
