import React from 'react';
import './hidden-search-page.styles.scss';
import HiddenSearch from '../../components/hidden-search/hidden-search.components';

const HiddenSearchPage = () => {
	const handleClick = (value) => {
		console.log(value);
	};
	return (
		<div className="hidden-search-page">
			<HiddenSearch onClick={handleClick} />
		</div>
	);
};

export default HiddenSearchPage;
