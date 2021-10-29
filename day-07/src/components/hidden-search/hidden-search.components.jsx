import React, { useState } from 'react';
import './hidden-search.styles.scss';

const HiddenSearch = ({ placeholder, onClick }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInput = ({ value }) => {
		setInputValue(value);
	};
	return (
		<div className={`hidden-search`}>
			<input
				type="text"
				className="input"
				placeholder={placeholder || 'Search...'}
				onChange={(e) => handleInput(e.target)}
				value={inputValue}
			/>
			<button className="btn" onClick={() => onClick(inputValue)}>
				<i className="fas fa-search" />
			</button>
		</div>
	);
};

export default HiddenSearch;
