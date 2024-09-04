import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { userData } from '../../lib/dummydata';

// Function to generate a unique serial number
const generateSerialNumber = () => {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 10000); // Generate a random number
    return `AGRO-${timestamp}-${randomNum}`;
};

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 9.5,
        fontFamily: 'Times-Roman',
        backgroundColor: '#FFFFFF',
        lineHeight: 1.5,
        position: 'relative',
    },
    watermark: {
        position: 'absolute',
        fontSize: 90,
        color: '#CCCCCC',
        transform: 'rotate(-45deg)',
        opacity: 0.5,
        top: '75%',
        left: '50%',
        transformOrigin: 'center',
        marginLeft: '-37.5%', // Half of the watermark width to center it
        marginTop: '-37.5%',  // Half of the watermark height to center it
        textTransform: 'uppercase',
        zIndex: -1,
    },
    header: {
        textAlign: 'center',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottom: '1px solid #000',
    },
    companyName: {
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    contractTitle: {
        fontSize: 12,
        marginTop: 5,
    },
    metadata: {
        marginTop: 5,
        fontSize: 10,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 10,
        marginTop: 10,
        marginBottom: 5,
        textDecoration: 'underline',
    },
    text: {
        marginBottom: 5,
    },
    signatureSection: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    signatureBlock: {
        width: '40%',
        textAlign: 'center',
        borderTop: '1px solid black',
        paddingTop: 5,
    },
    stamp: {
        width: '20%',
        textAlign: 'center',
        paddingTop: 5,
    },
    stampText: {
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        border: '1px solid black',
        padding: 5,
    },
});

// Create Document Component
const MyDocument = () => {
    const serialNumber = generateSerialNumber();
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.watermark}>
                    <Text>AGROPACT</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.companyName}>Agropact</Text>
                    <Text style={styles.contractTitle}>Contract Farming Agreement</Text>
                    <View style={styles.metadata}>
                        <Text>Date: {formattedDate}</Text>
                        <Text>Time: {formattedTime}</Text>
                        <Text>Serial Number: {serialNumber}</Text>
                    </View>
                </View>
                
                <View>
                    <Text style={styles.text}>
                        This Contract Farming Agreement ("Agreement") is made and entered into on {formattedDate} at {formattedTime} by and between:
                    </Text>
                    
                    <Text style={styles.text}>
                        <Text style={{ fontWeight: 'bold' }}>Buyer:</Text> {userData.buyerName}, located at {userData.buyerAddress}.
                    </Text>

                    <Text style={styles.text}>
                        <Text style={{ fontWeight: 'bold' }}>Farmer:</Text> {userData.farmerName}, located at {userData.farmerAddress}.
                    </Text>

                    <Text style={styles.sectionTitle}>1. Scope of the Agreement</Text>
                    <Text style={styles.text}>
                        The Farmer agrees to cultivate and deliver the following crops to the Buyer: {userData.cropDetails}. The quantity shall be {userData.quantity} and the quality standards as per {userData.qualityStandards}.
                    </Text>

                    <Text style={styles.sectionTitle}>2. Price and Payment</Text>
                    <Text style={styles.text}>
                        The agreed price for the crops is {userData.price} per {userData.unit}. Payment shall be made by the Buyer to the Farmer upon delivery of the crops, with {userData.paymentTerms}.
                    </Text>

                    <Text style={styles.sectionTitle}>3. Delivery Terms</Text>
                    <Text style={styles.text}>
                        The Farmer shall deliver the crops to {userData.deliveryLocation} on or before {userData.deliveryDate}. Any delay in delivery must be communicated immediately, and both parties will mutually agree on new terms if necessary. This Agreement may be terminated by either party upon {userData.terminationNotice} written notice if the other party fails to fulfill its obligations under this Agreement.
                    </Text>

                    <Text style={styles.sectionTitle}>4. Quality Control</Text>
                    <Text style={styles.text}>
                        The crops delivered must meet the agreed quality standards. The Buyer reserves the right to reject any crops that do not meet these standards. The Farmer may be required to replace or refund for any rejected goods.
                    </Text>

                    <Text style={styles.sectionTitle}>5. Force Majeure</Text>
                    <Text style={styles.text}>
                        Neither party shall be liable for any failure to perform its obligations under this Agreement if such failure is caused by circumstances beyond the reasonable control of the affected party, including but not limited to natural disasters, strikes, or government regulations.
                    </Text>

                    <Text style={styles.sectionTitle}>7. Dispute Resolution</Text>
                    <Text style={styles.text}>
                        Any disputes arising out of or in connection with this Agreement shall be resolved through mutual discussions. If the parties cannot resolve the dispute, they agree to submit to mediation or arbitration as per the applicable laws.
                    </Text>

                    <Text style={styles.sectionTitle}>8. Governing Law</Text>
                    <Text style={styles.text}>
                        This Agreement shall be governed by and construed in accordance with the laws of {userData.governingLaw}.
                    </Text>

                    <Text style={styles.sectionTitle}>9. Entire Agreement</Text>
                    <Text style={styles.text}>
                        This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements, understandings, and negotiations, whether written or oral, relating to its subject matter.
                    </Text>

                    <View style={styles.signatureSection}>
                        <View style={styles.signatureBlock}>
                            <Text>________________________</Text>
                            <Text>Farmer's Signature</Text>
                        </View>
                        <View style={styles.stamp}>
                            <Text style={styles.stampText}>Agropact</Text>
                            <Text>Official Stamp</Text>
                        </View>
                        <View style={styles.signatureBlock}>
                            <Text>________________________</Text>
                            <Text>Buyer's Signature</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default MyDocument;
