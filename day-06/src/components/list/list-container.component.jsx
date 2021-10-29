import React, { useState } from 'react';
import './list-container.styles.scss';

import ListItem from './list-item.component';

const List = ({
	data,
	swipeable,
	threadshold,
	leftAction,
	rightAction,
	leftColor,
	rightColor,
	leftIcon,
	rightIcon,
	expandable,
}) => {
	const [active, setActive] = useState(false);

	const handleActive = () => {
		expandable && setActive((v) => !v);
	};

	const [dragStartX, setDragStartX] = useState(0);

	const handleSwipe = ({ clientX, target }, id) => {
		const { scrollWidth } = target;
		const diff = clientX - dragStartX;

		if (diff < 0 && Math.abs(diff) > (threadshold || 0.3) * scrollWidth) {
			//swipe rigth to left
			rightAction && rightAction(id);
		} else if (
			diff > 0 &&
			Math.abs(diff) > (threadshold || 0.3) * scrollWidth
		) {
			//swipe lefto to right
			leftAction && leftAction(id);
		}
	};

	const onDragStart = ({ clientX }) => {
		setDragStartX(clientX);
	};

	return (
		<div className="list-container">
			{data &&
				data.map(({ id, title, subtitle }) => {
					return (
						<ListItem
							key={id}
							id={id}
							title={title}
							subtitle={subtitle}
							handleSwipe={handleSwipe}
							onDragStart={onDragStart}
							swipeable={swipeable}
							leftColor={leftColor}
							rightColor={rightColor}
							leftIcon={leftIcon}
							rightIcon={rightIcon}
							active={active}
							handleActive={handleActive}
						/>
					);
				})}
		</div>
	);
};

export default List;
