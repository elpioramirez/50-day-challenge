import React, { useState } from 'react';
import './side-bar.styles.scss';

const SideBar = ({ data, theme }) => {
	const [active, setActive] = useState(false);

	return (
		<div className={`side-bar${active ? ' active' : ''}`}>
			<div className="icon" onClick={() => setActive(!active)}>
				<div className="line line1" />
				<div className="line line2" />
				<div className="line line3" />
			</div>
			<div className={`nav nav-outter${theme ? ` ${theme}` : ''}`}>
				<div className={`nav nav-middle${theme ? ` ${theme}` : ''}`}>
					<div className={`nav nav-inner${theme ? ` ${theme}` : ''}`}>
						<ul>
							{data &&
								data.map(({ id, name, url, child }) => {
									if (child) {
										return (
											<>
												<li key={id}>{name}</li>
												<li>
													<ul>
														{child &&
															child.map(({ id, name, url }) => (
																<li>
																	<a href={url}>{name}</a>
																</li>
															))}
													</ul>
												</li>
											</>
										);
									} else {
										return (
											<li>
												<a href={url}>{name}</a>
											</li>
										);
									}
								})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
