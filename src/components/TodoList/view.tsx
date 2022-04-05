import "./styles.css"

const TodoListView: React.FC<{
    itemInput: string
    items: string[]
    addItem: VoidFunction
    handleChange: (value: string) => void
}> = props => {
    return (
        <div className="container">
            <div className="row justify-content-center my-3">
                <input
                    type="text"
                    placeholder="Item...."
                    className="col-10 col-md-4 m-2"
                    onChange={(event) => props.handleChange(event.target.value)}
                    value={props.itemInput}
                />
                <button className="col-4 col-md-2" onClick={props.addItem}>Add Item</button>
            </div>
            <div className="row text-center item-list">
                <ul>
                    {
                        props.items.map(item => <li>{item}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoListView