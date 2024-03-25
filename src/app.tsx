import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@root/styles/themes';
import { RouterProvider } from 'react-router-dom';
import '@root/styles/style.module.scss';
import { store } from '@root/features/store';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ROUTER } from '@root/constants/router';

const App: FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<RouterProvider router={ROUTER} />
			</CssBaseline>
		</ThemeProvider>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
