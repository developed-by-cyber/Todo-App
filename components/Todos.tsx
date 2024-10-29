
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TodoItem } from "./Todo";

export type Todo = {
  name: string;
  isCompleted: boolean;
  description: string;
  category: string;
}

type props = {
  todos: Todo[];
}
export const Todos = ({todos}: props) => {
  return (
    <FlatList
    showsVerticalScrollIndicator={false}
      style={{ marginTop: 20, }}
      data={todos}
      renderItem={({ item }) => (
       <TodoItem item={item}  />
      )}
      contentContainerStyle={{
        gap: 20,
      }}
      ListEmptyComponent={() =>(
        <Text style={{fontSize: 22, textAlign: "center", marginTop: 15, fontFamily: "Poppins"}}>You don't have an upcoming Task.</Text>
      )}
    />
  );
};
