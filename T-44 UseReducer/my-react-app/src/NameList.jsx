import {useReducer, useState} from "react";
import {type} from "@testing-library/user-event/dist/type";

function  reducer(nameList,action){
    switch(action.type){
        case 'add':
            return {names: [...nameList.names,action.name]}
        default:
            return nameList;
    }
}

const NameList = () => {

    const [name,setName] = useState('');
    const [nameList,dispatch] = useReducer(reducer,{names:[]});

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type:'add',
            name:name
        });
        setName('');
        console.log(nameList);
    }

    return(

        <div>
            <form action= "" onSubmit = {handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </form>

            <p>{nameList.names.join(', ')}</p>
        </div>
    )
};

export default NameList;