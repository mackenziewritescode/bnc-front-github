import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-dom";
import * as msTeams from "@microsoft/teams-js";

export default function Configure() {
  msTeams.settings.registerOnSaveHandler((saveEvent) => {
    msTeams.settings.setSettings({
      contentUrl: window.location.origin,
      entityId: window.location.origin,
    });

    saveEvent.notifySuccess();
  });
  msTeams.settings.setValidityState(true);

  return (
    <View style={styles.container}>
      <Link to="./">Home</Link>
      <Text style={styles.defaultText}>Configure</Text>
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
