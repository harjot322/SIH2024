import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument'; // Adjust the path as necessary
import styles from './pdf.module.css'; // Adjust the path as necessary

const PdfPage = () => {
    return (
        <div>
            <PDFViewer width="100%" height="600">
                <MyDocument />
            </PDFViewer>
            <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download PDF'
                }
            </PDFDownloadLink>
        </div>
    );
};

export default PdfPage;