import ListItems from "./ListItems";

const OrderedList = ({itemlist}) => {

    return (
        <div>
            <h1>Ordered List</h1>

            <ol>
                <ListItems items={itemlist} />
            </ol>
        </div>
    )
};

export default OrderedList;