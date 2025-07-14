import {useContext} from "react";
import {NameContext} from "./BoxA";


const BoxD = ({ name }) => {

    const {name:newName,theme,toogleTheme} = useContext(NameContext);

    const themeStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'

    }

    return (
        <div className="box" style={themeStyle}>
            <h1>Box D</h1>
            <p>Name - {name}</p>

            <p>Name - {newName}</p>
            <p>Current Theme - {theme}</p>
            <button onClick={toogleTheme}>Change Theme</button>
        </div>
    );
};

export default BoxD;
