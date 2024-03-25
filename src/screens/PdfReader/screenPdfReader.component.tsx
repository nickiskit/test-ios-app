import React, { FC, memo } from 'react';
// import { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { OnDocumentLoadSuccess } from 'react-pdf/dist/esm/shared/types';
// import file from '@public/files/The little prince.pdf'

//pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const PdfReaderScreen: FC = memo(() => {
	// const [numPages, setNumPages] = useState<number>();
	//
	// const onDocumentLoadSuccess: OnDocumentLoadSuccess = ({
	// 	numPages: nextNumPages
	// }) => {
	// 	setNumPages(nextNumPages);
	// };
	//
	// return (
	// 		<Document
	// 				onLoadSuccess={onDocumentLoadSuccess}
	// 				file={file}>
	// 			{Array.from(new Array(numPages), (el, index) => (
	// 					<Page
	// 							renderAnnotationLayer={false}
	// 							renderTextLayer={false}
	// 							key={`page_${index + 1}`}
	// 							pageNumber={index + 1}
	// 					/>
	// 			))}
	// 		</Document>
	// )

	return <div>PDF screen</div>
});

PdfReaderScreen.displayName = 'PdfReaderScreen';

export default PdfReaderScreen;
