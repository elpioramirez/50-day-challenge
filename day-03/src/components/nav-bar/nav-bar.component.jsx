import React, { useState } from 'react';

import './nav-bar.styles.scss';

const NavBar = ({ list, vPosition, hPosition, theme }) => {
	const [active, setActive] = useState(true);
	return (
		<nav
			className={`nav-bar${active ? ' active' : ''}${
				vPosition ? ` v-${vPosition}` : ''
			}${hPosition ? ` h-${hPosition}` : ''}${theme ? ` theme-${theme}` : ''}`}
		>
			<ul>
				{list &&
					list.map(({ url, title }) => {
						return (
							<li>
								<a href={url}>{title}</a>
							</li>
						);
					})}
			</ul>
			<button className="icon" id="toggle" onClick={() => setActive(!active)}>
				<div className="line line1"></div>
				<div className="line line2"></div>
			</button>
		</nav>
	);
};

export default NavBar;
