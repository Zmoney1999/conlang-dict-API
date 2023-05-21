import React from 'react';
import {Container, Row} from 'react-bootstrap';
//This function renders the credits page
function CreditsPage(props:{}) {
    return (
        <>
            <Container>
                <Row className="mb-1">
                    <h4>Credits</h4>
                </Row>
                <Row>
                    <p>Inspired by Patrick Donnelly's PIE text-to-speech app, found <a href="https://soundbendor-pie-phonenetic-synthesis-deploy-app-7ieutx.streamlit.app/">here</a>.</p>

                </Row>
            </Container>
        </>
    )
}

export default CreditsPage;