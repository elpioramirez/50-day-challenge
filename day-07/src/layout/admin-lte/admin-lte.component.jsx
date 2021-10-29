import React from 'react';
import './admin-lte.styles.scss';

const AdminLteLayout = ({ children, title }) => {
	return (
		<div className="admin-lte-layout">
			<NavBar title={title} />
			{children}
		</div>
	);
};

export default AdminLteLayout;
