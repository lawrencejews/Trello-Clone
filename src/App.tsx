import { AppContainer } from "./styledTypes/styles";
import { Columns } from "./components/Columns"
import { AddNewItem } from "./components/AddNewItem";

export function App() {
  return (
    <AppContainer>
      <Columns text="Todo:" />
      <AddNewItem toggleButtonText="+ Add another list"
        onAdd={() => console.log("Item Created")}
      />
    </AppContainer>
  )
}