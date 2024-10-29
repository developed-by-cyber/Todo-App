import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native";
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";

type props = {
  visible: boolean;
  onDismiss: () => void;
  onVisible: () => void;
  onDeleteTodo: (name: string) => void;
  onToggleTodo: (name: string) => void;
  name: string;
  isCompleted: boolean;
};

export const Action = ({
  visible,
  onDismiss,
  onVisible,
  onDeleteTodo,
  onToggleTodo,
  name,
  isCompleted
}: props) => {
    const text = isCompleted ? 'Unset Completed' : 'Set Completed';
  return (
    <Menu
      anchor={
        <AntDesign
          name="ellipsis1"
          size={24}
          color="black"
          onPress={onVisible}
        />
      }
      visible={visible}
      onRequestClose={onDismiss}
    >
      <MenuItem onPress={() => {
        onToggleTodo(name);
        onDismiss();
      }}>
        <Text>{text}</Text>
      </MenuItem>
      <MenuDivider />
      <MenuItem onPress={() => {
        onDeleteTodo(name);
        onDismiss();
      }}>
        <Text>Delete</Text>
      </MenuItem>
    </Menu>
  );
};
