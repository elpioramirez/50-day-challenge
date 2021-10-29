import React from 'react';
import './steppage.styles.scss';
import data from './data';

import StepProgress from '../../components/step-progress/step-progress.component';

const StepPage = () => {
	return (
		<div className="step-page">
			<StepProgress data={data} />
		</div>
	);
};

export default StepPage;
