import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayoutComponent from '@root/components/Layout/layout.component';
import { ROUTES } from '@root/constants/routes';
import TestScreen from "@root/screens/Test/screenTest.component";
import ErrorComponent from "@root/components/Error/error.component";
import PdfReaderScreen from "@root/screens/PdfReader/screenPdfReader.component";

export const ROUTER = createBrowserRouter([
	{
		element: <LayoutComponent />,
		path: ROUTES.INDEX,
		errorElement: <ErrorComponent />,
		children: [
			{
				index: true,
				element: <TestScreen />
			},
			{
				path: ROUTES.PDF,
				element: <PdfReaderScreen/>
			}
		]
	}
]);
