import React from 'react';
import { Container, Row, Col, } from 'reactstrap'
import Sidebar from '../Sidebar/containers/sidebar';

const layout = ({ children }: any) => {
    return (
        <Container className="layout-container bg-dark text-white" fluid>
            <Row>
               <div className="">
                    <ul>
                        <li><b>Improves your memory:</b> A to do list acts as an external memory aid.</li>
                        <li><b>Increases productivity:</b> A to do list allows you to prioritize the tasks that are more important. </li>
                        <li><b>Helps with motivation:</b> To do lists are a great motivational tool because you can use them to clarify your goals.</li>
                    </ul>
               </div>
            </Row>
            <Row>
                <Col className="border" lg="3" xl="3" sm="3" >
                    <Sidebar />
                </Col>
                <Col className="border">
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default layout;