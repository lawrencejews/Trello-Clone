import {  ColumnContainer, ColumnTitle } from "./styles/styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import {useAppState} from "../state/AppStateContext"

type ColumnProps = {
  text: string
  id: string
}

export const Columns = ({ text, id }: ColumnProps) => {

  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id)

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {
        tasks.map(task => (
          <Card text={ task.text} key={task.id} id={task.id}  />
        ))
     }
      <AddNewItem toggleButtonText="+ Add another card" onAdd={() => console.log("New Item added")} dark />
    </ColumnContainer>
  )
}