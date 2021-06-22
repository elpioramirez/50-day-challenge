import React from 'react';

import './sliding-panel.styles.scss';

const SlidingPanel = ({ id, title, active, imageUrl, setActivePanel }) => {
	return (
		<div
			className={`panel ${active ? 'active' : ''}`}
			style={{ backgroundImage: `url(${imageUrl})` }}
			onClick={(e) => setActivePanel(id)}
		>
			<h3>{title}</h3>
		</div>
	);
};

export default SlidingPanel;
