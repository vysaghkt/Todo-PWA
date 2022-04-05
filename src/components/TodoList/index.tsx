import { useState } from "react"
import TodoListView from "./view"

const TodoList: React.FC<{}> = props => {

    const [itemInput, setItemInput] = useState<string>("")

    const [items, setItems] = useState<string[]>([])

    const handleChange = (value: string) => {
        setItemInput(value)
    }

    const addItem = () => {
        setItems(prev => [...prev, itemInput])
        setItemInput("")
    }

    return (
        <TodoListView
            itemInput={itemInput}
            items={items}
            addItem={addItem}
            handleChange={handleChange} />
    )
}

export default TodoList