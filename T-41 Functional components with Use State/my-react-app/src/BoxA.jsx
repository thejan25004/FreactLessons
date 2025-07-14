import {createContext, useState} from "react";
import BoxB from "./BoxB";

// use context
export const NameContext = createContext();


const BoxA = () => {
    const [name, setName] = useState("React");
    const [theme, setTheme] = useState("light");


    const toogleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <div className="box">
            <h1>Box A</h1>
            <p>Name - {name}</p>

            <NameContext.Provider value={{name,theme,toogleTheme}} >
                <BoxB name={name} />
            </NameContext.Provider>


        </div>
    );
};

export default BoxA;
