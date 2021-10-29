import React from 'react';
import './list-item.styles.scss';

const ListItem = ({
	id,
	title,
	subtitle,
	swipeable,
	onDragStart,
	handleSwipe,
	leftColor,
	rightColor,
	leftIcon,
	rightIcon,
	active,
	handleActive,
}) => {
	return (
		<div
			className={`card${swipeable && ' swipeable'}${active ? ' active' : ''}`}
			onTouchStart={({ targetTouches }) => onDragStart(targetTouches[0])}
			onMouseDown={(e) => console.log(e)}
			onTouchEnd={({ changedTouches }) => handleSwipe(changedTouches[0], id)}
			onMouseMove={(e) => console.log(e)}
			onClick={handleActive}
		>
			{(swipeable === 'full' || swipeable === 'left') && (
				<div className={`action left ${leftColor}`}>
					<i>A</i>
				</div>
			)}
			<div className="element">{title}</div>
			{(swipeable === 'full' || swipeable === 'right') && (
				<div className={`action right ${rightColor}`}>
					<i>B</i>
				</div>
			)}
		</div>
	);
};

export default ListItem;
