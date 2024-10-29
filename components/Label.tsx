import { StyleSheet, Text } from "react-native"
type props = {
    text: string,
}
const Label = ({text} : props) => {
  return (
    <Text style={styles.label}>{text}</Text>
  )
}

export default Label

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Syne"
  },
});