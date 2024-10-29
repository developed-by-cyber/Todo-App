import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Action } from "./Action";
import { Todo } from "./Todos";
import { useTodo } from "@/lib/zustand/useTodo";

type Props = {
  item: Todo;
};

export const TodoItem = ({ item }: Props) => {
  const [visible, setVisible] = useState(false);
  const onVisible = () => setVisible(true);
  const onDismiss = () => setVisible(false);
  const onDeleteTodo = useTodo((state) => state.deleteTodo);
  const onToggleTodo = useTodo((state) => state.toggleTodo);
  return (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <View style={styles.circle}>
          {item.isCompleted && (
            <FontAwesome name="check" color="white" size={15} />
          )}
        </View>
        <Text style={{ fontSize: 22, fontFamily: 'Syne' }}>{item.name}</Text>
      </View>
      <Action
        onVisible={onVisible}
        onDismiss={onDismiss}
        visible={visible}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        name={item.name}
        isCompleted={item.isCompleted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  circle: {
    backgroundColor: "#ccc",
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
