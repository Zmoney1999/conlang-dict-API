import { ReactNode } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { OverlayChildren } from "react-bootstrap/esm/Overlay";
import { OverlayInjectedProps } from "react-bootstrap/esm/OverlayTrigger";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IconContext } from "react-icons";


function TutorialIcon(props: {children: JSX.Element}) {
    return (
        <OverlayTrigger
            placement="right"
            delay={{show: 250, hide: 400}}
            overlay={<Tooltip>{props.children}</Tooltip>}
        >
            <Button variant="link">
                <IconContext.Provider value={{size:"1.5em"}}>
                    <AiOutlineInfoCircle/>
                </IconContext.Provider>
            </Button>

        </OverlayTrigger>
    )
}

export default TutorialIcon;