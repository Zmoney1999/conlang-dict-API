import { Button, Modal } from "react-bootstrap";

function LanguagePhonologyModal(props: {language: string, data: string, isVisible: boolean, handleClose: () => void}) {

    return (
        <>
            <Modal show={props.isVisible} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>{props.language} Phonology</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {props.data}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default LanguagePhonologyModal;