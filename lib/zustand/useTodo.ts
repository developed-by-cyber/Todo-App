import { Todo } from "@/components/Todos";
import { Alert } from "react-native";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
type Store = {
  todo: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (name: string) => void;
  toggleTodo: (name: string) => void;
};
export const useTodo = create<Store>()(
  persist(
    (set) => ({
    todo: [],
    addTodo: (todo: Todo) => {
      set((state) => {
        const todoExits = state.todo.find(
          (todo) => todo.name.toLowerCase() === todo.name.toLocaleLowerCase()
        );
        if (todoExits) {
          Alert.alert("error", "Todo already exists");
          return { todo: state.todo };
        }
        return { todo: [...state.todo, todo] };
      });
    },
    deleteTodo: (name: string) => {
      set((state) => ({
        todo: state.todo.filter((todo) => todo.name !== name),
      }));
    },
    toggleTodo: (name: string) => {
      set((state) => ({
        todo: state.todo.map((todo) => {
          if (todo.name === name) {
            return { ...todo, isCompleted: !todo.isCompleted };
          }
          return todo;
        }),
      }));
    },
  }),
  {
    name: 'todo-storage',
    storage: createJSONStorage(() => AsyncStorage),
  }
)
);
