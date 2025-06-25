import ListItems from "./ListItems";

const UnOrderedList = ({itemlist}) => {

    return (
        <div>
            <h1>UnOrdered List</h1>

            <ul>
                <ListItems items={itemlist} />
            </ul>
        </div>
    )
};

export default UnOrderedList;