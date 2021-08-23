import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-dom";
// import * as msTeams from "@microsoft/teams-js";

export default function Page2() {
  return (
    <View style={styles.container}>
      <Link to="./">Home</Link>
      <Text style={styles.defaultText}>Page2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  defaultText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
});
