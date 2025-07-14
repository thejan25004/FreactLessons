import BoxD from "./BoxD";

const BoxC = ({ name }) => {
    return (
        <div className="box">
            <h1>Box C</h1>
            <BoxD name={name} />
        </div>
    );
};

export default BoxC;
