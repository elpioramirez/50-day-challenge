import React from 'react';
import './button.styles.scss';

const Button = ({ id, disabled, type, text, onClick }) => {
	return (
		<button
			className={`btn${type ? `-${type}` : ''}`}
			disabled={disabled || false}
			id={id}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
