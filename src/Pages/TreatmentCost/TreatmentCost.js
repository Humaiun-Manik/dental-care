import React from 'react';
import { Table } from 'react-bootstrap';
import './TreatmentCost.css';

const TreatmentCost = () => {
    return (
        <div className="container treatment">
            <div className="row pb-5">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h3 className='my-5 welcome-message'>Welcome to Dental Clinic Website!</h3>
                    <h3 style={{ color: '#790000', paddingBottom: '10px' }}>Approximate Cost of our Treatments:</h3>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Treatment Name</th>
                                <th>Apprx. Cost (BDT/-)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Consaltation fee</td>
                                <td>500</td>
                            </tr>
                            <tr>
                                <td>Digital Ultrasonic Scaling</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>Filling (Tooth colour matching per tooth)</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td>Polishing</td>
                                <td>1200</td>
                            </tr>
                            <tr>
                                <td>Teeth Whitening</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td>Glass Ionomer filling</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>Zinc Oxide euginol filling</td>
                                <td>600</td>
                            </tr>
                            <tr>
                                <td>Root Canal Filling (Advanced protapper system)</td>
                                <td>3000-5000</td>
                            </tr>
                            <tr>
                                <td>Porcelin Crown per tooth</td>
                                <td>5000-8000</td>
                            </tr>
                            <tr>
                                <td>Normal Extraction (Milk tooth/ Permanent tooth)</td>
                                <td>500-2500</td>
                            </tr>
                            <tr>
                                <td>Surgical extraction (Impacted tooth)</td>
                                <td>5000-10,000</td>
                            </tr>
                            <tr>
                                <td>Minor oral surgery (with local anesthesia)</td>
                                <td>6000-12,000</td>
                            </tr>
                            <tr>
                                <td>Major Maxillofacial Surgery (with general anesthesia)</td>
                                <td>20,000-50,000</td>
                            </tr>
                            <tr>
                                <td>Teeth Implant (per Implant)</td>
                                <td>35,000-55,000</td>
                            </tr>
                            <tr>
                                <td>Orthodontic Treatment</td>
                                <td>60,000-80,000</td>
                            </tr>
                            <tr>
                                <td>Partial Denture (Removable per tooth)</td>
                                <td>1500-3000</td>
                            </tr>
                            <tr>
                                <td>Complate Denture (Removable)</td>
                                <td>30,000-40,000</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default TreatmentCost;