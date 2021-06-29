import React, { useState, useEffect, useRef } from 'react';
import './step-progress.styles.scss';
import Button from '../button/button.component';

const StepProgress = ({ data }) => {
	const length = useRef(data.length);
	const [active, setActive] = useState(1);
	const [prevDisabled, setPrevDisabled] = useState(true);
	const [nextDisabled, setNextDisabled] = useState(false);
	const [progressWidth, setProgressWidth] = useState('0%');

	const nextHandler = () => {
		setPrevDisabled(false);
		if (active + 1 >= length.current) {
			setActive(length.current);
			setNextDisabled(true);
		} else {
			setActive(active + 1);
			setNextDisabled(false);
		}
	};

	useEffect(() => {
		setProgressWidth(`${((active - 1) / (length.current - 1)) * 100}%`);
	}, [active, length]);

	const prevHandler = () => {
		setNextDisabled(false);
		if (active - 1 <= 1) {
			setActive(1);
			setPrevDisabled(true);
		} else {
			setActive(active - 1);
			setPrevDisabled(false);
		}
	};
	return (
		<div className="container">
			<div className="progress-container">
				<div
					className="progress"
					id="progress"
					style={{ width: progressWidth }}
				></div>
				{data &&
					data.map((v, k) => {
						return (
							<div
								key={k}
								className={`circle${k + 1 <= active ? ' active' : ''}`}
							>
								{k + 1}
							</div>
						);
					})}
			</div>
			<div className="button-container">
				<Button
					text="Prev"
					id="prev"
					disabled={prevDisabled}
					onClick={prevHandler}
				/>
				<Button
					text="Next"
					id="next"
					disabled={nextDisabled}
					onClick={nextHandler}
				/>
			</div>
		</div>
	);
};

export default StepProgress;
