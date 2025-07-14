import BoxC from "./BoxC";
import {useContext} from "react";
import {NameContext} from "./BoxA";

const BoxB = ({ name }) => {


    const {theme,toogleTheme} = useContext(NameContext);

    const themeStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'

    }

    return (
        <div className="box" style={themeStyle}>
            <h1>Box B</h1>
            <BoxC name={name} />
        </div>
    );
};

export default BoxB;
