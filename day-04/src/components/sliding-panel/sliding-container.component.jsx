import React, { useState } from 'react';
import './sliding-container.styles.scss';
import SlidingPanel from './sliding-panel.component';

const SlidingContainer = ({ data }) => {
	const [activePanel, setActivePanel] = useState(1);

	return (
		<div className="sliding-container">
			{data &&
				data.map(({ id, title, imageUrl }) => {
					return (
						<SlidingPanel
							key={id}
							id={id}
							title={title}
							imageUrl={imageUrl}
							active={id === activePanel ? true : false}
							setActivePanel={setActivePanel}
						/>
					);
				})}
		</div>
	);
};
export default SlidingContainer;
