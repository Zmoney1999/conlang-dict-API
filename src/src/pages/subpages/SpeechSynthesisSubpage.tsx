import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import AudioPlayerC from "../../components/AudioPlayerC";
import React from "react";
import SpeechSynthesisInput from "../../components/SpeechSynthesisInput";

function SpeechSynthesisSubpage(props: { jsonFile: any }) {

    // Define state variables for the audio blob and loading status
    const [audioBlob, setAudioBlob] = useState("");
    const [audioLoading, setAudioLoading] = useState(false);

    return (
        <>
            {/* Column for main content */}
            <Col md={8}>
                <Row>
                    {/* Component for inputting text for speech synthesis */}
                    <SpeechSynthesisInput
                        jsonFile={props.jsonFile}
                        setAudioBlob={setAudioBlob}
                        setAudioLoading={setAudioLoading}
                    />
                </Row>

                {/* Audio player for synthesized speech */}
                <div style={{ paddingTop: 20 }}>
                    <AudioPlayerC AudioUrl={audioBlob} Loading={audioLoading} />
                </div>

            </Col>
        </>
    )
};

export default SpeechSynthesisSubpage;
