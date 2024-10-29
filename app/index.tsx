import { AddButton } from "@/components/AddButton";
import { AddTask } from "@/components/AddTask";
import { CustomButton } from "@/components/CustomButton";
import { Todo, Todos } from "@/components/Todos";
import * as SplashScreen from "expo-splash-screen";
import BottomSheet, {
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

//font
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { useTodo } from "@/lib/zustand/useTodo";
export default function Index() {

  let [fontsLoaded] = useFonts({
    'Poppins': require('./../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./../assets/fonts/Poppins-Bold.ttf'),
    'Syne': require('./../assets/fonts/Syne-Regular.ttf'),
    'Harma': require('./../assets/fonts/Harmattan-Regular.ttf'),
    'Cabin': require('./../assets/fonts/Cabin-Regular.ttf'),
    'CabinBold': require('./../assets/fonts/Cabin-Bold.ttf'),
  });
// useEffect(() =>{
//   async function prepare(){
//     await SplashScreen.preventAutoHideAsync();
//   }
//   prepare()
// }, [])
 
  // if (!fontsLoaded) {
  //   return undefined;
  // }else{
  //   SplashScreen.hideAsync()
  // }
  const todos = useTodo((state) => state.todo)
  // const [todos, setTodos] = useState<Todo[]>([])
  const [category, setCategory] = useState("Personal");
  const bottomRef = useRef<BottomSheet>(null);
  const snapShot = useMemo(() => ["70%"], []);

  const openBottomSheet = () =>{
    bottomRef.current?.expand();
  }

  const closeBottomSheet = () =>{
    bottomRef.current?.close();
  }

  const filteredTodo = useMemo(() => todos.filter((todo) => todo.category === category), [todos, category]);
  const isActivePersonal = category === "Personal" ? 'skyblue' : '#eee';
  const isActiveWork = category === "Work" ? 'skyblue' : '#eee';

  // const onToggleTodo = (name: string) =>{
  //   const todosToAlter = todos.slice();
  //   const todoIndex = todosToAlter.findIndex((todo) => todo.name === name);
  //   todosToAlter[todoIndex].isCompleted = !todosToAlter[todoIndex].isCompleted;
  //   setTodos(todosToAlter)
  // }
   
  return (
    <View style={styles.container}>
      <Text style={[styles.today, { fontFamily: "Poppins" }]}>Today</Text>
      <Text style={[styles.date, { fontFamily: "Harma" }]}>
        October 5, 2024
      </Text>
      <View style={styles.card}>
        <Text style={[styles.cardText, { fontFamily: "Poppins" }]}>
          Keep it up! Complete your tasks. You are there!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => setCategory("Personal")}
          title={"Personal"}
          backgroundColor={isActivePersonal}
        />
        <CustomButton
          onPress={() => setCategory("Work")}
          title={"Work"}
          backgroundColor={isActiveWork}
        />
      </View>
      <Todos todos={filteredTodo} />
      <AddButton onPress={openBottomSheet} />
      <BottomSheet
        ref={bottomRef}
        snapPoints={snapShot}
        index={-1}
        enablePanDownToClose
      >
        <BottomSheetScrollView style={{ flex: 1 }}>
          <AddTask onClose={closeBottomSheet} />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 15,
  },
  today: {
    color: "#ccc",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10
  },
  date: { color: "black", fontSize: 35, fontWeight: "600", marginTop: -5 },
  card: {
    marginTop: 20,
    height: 180,
    width: "100%",
    backgroundColor: "skyblue",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: { color: "white", fontSize: 30, fontWeight: "500" },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
