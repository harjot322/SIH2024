import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        margin: 12,
        fontFamily: 'Times-Roman'
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.text} fixed>
                    ~ Created with react-pdf ~
                    hello
                    
                </Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument;