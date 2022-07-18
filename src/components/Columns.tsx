import {  ColumnContainer, ColumnTitle } from "../styledTypes/styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

type ColumnProps = {
  text: string
}

export const Columns = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generated app scaffold" />
      <Card text="Learning Typescript" />
      <Card text="Beginning to use static types" />
      <AddNewItem toggleButtonText="+ Add another card" onAdd={() => console.log("New Item added")} dark />
    </ColumnContainer>
  )
}