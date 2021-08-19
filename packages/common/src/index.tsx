import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text>React Native App</Text>
    </View>
  );
}

export default App;
