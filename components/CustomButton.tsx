import { Pressable, Text, View } from "react-native"

type Props ={
    title: string;
    backgroundColor: string;
    onPress?: () => void;
    disabled?: boolean;
}
export const CustomButton = ({ title, backgroundColor, onPress, disabled }: Props) => {

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 5,
          marginTop: 20,
          borderRadius: 10,
          flex: 1,
          height: 50,
          opacity: pressed ? 0.5 : 1,
        },
        {
          opacity: disabled ? 0.4 : 1,
        }
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ fontSize: 21, color: "black", fontFamily: "Syne", fontWeight: '500', letterSpacing: 0.5}}>{title}</Text>
    </Pressable>
  );
};