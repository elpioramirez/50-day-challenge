import React, { useState } from 'react';
import './nav-bar.styles.scss';

const NavBar = ({ initialActive }) => {
	const [active, setActive] = useState(false || initialActive);
	return (
		<div className="nav-bar">
			<div className="header-nav">
				<button className="icon" onClick={() => setActive(!active)}>
					<div className="line line1"></div>
					<div className="line line2"></div>
				</button>
			</div>
			<div className={`side-bar${active ? ' active' : ''}`}>
				<div className="logo"></div>
			</div>
		</div>
	);
};

export default NavBar;
