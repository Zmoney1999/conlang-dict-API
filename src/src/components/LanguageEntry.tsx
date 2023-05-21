import {Dropdown} from 'react-bootstrap';
import Language from '../types/Language';

//This is a simple functional component that renders a Dropdown.Item as a button with the name of the given language.
function LanguageEntry(props: {language: Language, key: string}) {
    return (
        <Dropdown.Item as="button" eventKey={props.language.Id.toString()} >
            {props.language.Name}
        </Dropdown.Item>
    )
};

export default LanguageEntry;