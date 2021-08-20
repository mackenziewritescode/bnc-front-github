"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var App = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "User" : _b, _c = _a.defaultCount, defaultCount = _c === void 0 ? 0 : _c;
    var _d = react_1.default.useState(defaultCount), count = _d[0], setCount = _d[1];
    var onIncrement = function () { return setCount(count + 1); };
    var onDecrement = function () { return setCount(count > 0 ? count - 1 : 0); };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.greeting },
            "Hello ",
            name,
            ".",
            react_1.default.createElement("br", null),
            "Count: ",
            count),
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Button, { title: "Increase count", accessibilityLabel: "increment", onPress: onIncrement, color: "blue" }),
            react_1.default.createElement(react_native_1.Button, { title: "Decrease count", accessibilityLabel: "decrement", onPress: onDecrement, color: "red" }))));
};
var styles = react_native_1.StyleSheet.create({
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
exports.default = App;
// import * as React from "react";
// import { View, Text, StyleSheet } from "react-native";
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
// function App() {
//   return (
//     <View style={styles.container}>
//       <Text>React Native App</Text>
//     </View>
//   );
// }
// export default App;
