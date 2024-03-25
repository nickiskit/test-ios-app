import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const LayoutComponent: FC = () => (
		<div>
			<Outlet />
		</div>
);

export default LayoutComponent;
