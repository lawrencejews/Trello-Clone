import { AppContainer } from "./components/styles/styles";
import { Columns } from "./components/Columns"
import { AddNewItem } from "./components/AddNewItem";
import GlobalStyles from "./components/styles/GlobalStyles";
import { useAppState } from "./state/AppStateContext";

export function App() {

  const { lists } = useAppState();

  return (
    <AppContainer>
      <GlobalStyles />
      {lists.map(list => (
        <Columns text={list.text} key={list.id} id={list.id} />
      ))
      }
      <AddNewItem toggleButtonText="+ Add another list"
        onAdd={() => console.log("Item Created")}
      />
    </AppContainer>
  )
}