import { router } from "expo-router";
import { Text, View, Button } from "react-native";
export default function secondScreen() {
  const onPress = () => {
    router.push("/")
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40 }}>secondScreen 😋</Text>
      <Button title="Welcome Home" onPress={onPress} color={"red"} />
    </View>
  );
}
