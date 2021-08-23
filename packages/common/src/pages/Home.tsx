import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-dom";

export type Props = {
  name: string;
  defaultCount?: number;
};

const Home: React.FC<Props> = ({ name = "User", defaultCount = 0 }) => {
  const [count, setCount] = React.useState(defaultCount);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count > 0 ? count - 1 : 0);

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
