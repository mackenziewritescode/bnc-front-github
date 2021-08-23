import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-dom";
import * as microsoftTeams from "@microsoft/teams-js";
import { TeamsUserCredential } from "@microsoft/teamsfx";

export type Props = {
  name: string;
  defaultCount?: number;
};

const Home: React.FC<Props> = ({ name, defaultCount = 0 }) => {
  const [count, setCount] = React.useState(defaultCount);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count > 0 ? count - 1 : 0);

  const { isInTeams } = useTeamsFx();

  const userProfile = useData(async () => {
    const credential = new TeamsUserCredential();
    return isInTeams ? await credential.getUserInfo() : undefined;
  })?.data;
  name = userProfile ? userProfile.displayName : "User";

  return (
    <View style={styles.container}>
      <Link to="./page2">Page2</Link>
      <Text style={styles.greeting}>
        Hello {name}.
        <br />
        Count: {count}
      </Text>
      <View>
        <Button
          title="Increase count"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease count"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
});

export default Home;
