import { StyleSheet, Text, TextInput, View } from "react-native";
import Label from "./Label";
import { CustomButton } from "./CustomButton";
import { useState } from "react";
import { useTodo } from "@/lib/zustand/useTodo";
import { Todo } from "./Todos";

type props = {
  onClose: () => void;
};
export const AddTask = ({ onClose }: props) => {
  const [inputValue, setInputValue] = useState("");
  const addTodo = useTodo((state) => state.addTodo);
  const [category, setCategory] = useState<"Personal" | "Work">("Personal");
  const [description, setDescription] = useState("");
  const onSelectCategory = (cat: "Personal" | "Work") => {
    setCategory(cat);
  };
  const newTodo = {
    name: inputValue,
    category,
    description,
    isCompleted: false,
  };
  const onAddTodo = () => {
    addTodo(newTodo);
    onClose();
    setInputValue("");
    setDescription("");
  };
  // const onAddTodo = () => {
  //   onCreateTodo(newTodo);
  //   setInputValue("");
  //   setDescription("")
  // };

  const onCancel = () => {
    setInputValue("");
    setDescription("");
    onClose();
  };
  const isValid = inputValue.length > 3 && description.length > 3;
  const isActivePersonal = category === "Personal" ? "skyblue" : "#eee";
  const isActiveWork = category === "Work" ? "skyblue" : "#eee";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <View style={styles.divider}></View>
      <View style={styles.inputContainer}>
        <Label text="Title Task" />
        <TextInput
          style={styles.input}
          placeholder="Add Task Name"
          placeholderTextColor="#ccc"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Label text="Category" />
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => onSelectCategory("Personal")}
            title={"Personal"}
            backgroundColor={isActivePersonal}
          />
          <CustomButton
            onPress={() => onSelectCategory("Work")}
            title={"Work"}
            backgroundColor={isActiveWork}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Label text="Description" />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Add Task Name"
          placeholderTextColor="#ccc"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={[styles.buttonContainer, { marginTop: 20, marginBottom: 20 }]}>
        <CustomButton
          onPress={onCancel}
          title={"Cancel"}
          backgroundColor={"skyblue"}
        />
        <CustomButton
          onPress={onAddTodo}
          title={"Create"}
          backgroundColor={"#eee"}
          disabled={!isValid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  divider: {
    backgroundColor: "#ccc",
    width: "55%",
    marginHorizontal: "auto",
    height: 2,
    marginTop: 10,
    marginBottom: 5
  },
  inputContainer: {
    marginTop: 20,
    gap: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 55,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    fontFamily: "Poppins",
    letterSpacing: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});
