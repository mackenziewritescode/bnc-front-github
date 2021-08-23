"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_router_dom_1 = require("react-router-dom");
var microsoftTeams = __importStar(require("@microsoft/teams-js"));
var Home = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "User" : _b, _c = _a.defaultCount, defaultCount = _c === void 0 ? 0 : _c;
    var _d = react_1.useState(defaultCount), count = _d[0], setCount = _d[1];
    var _e = react_1.useState(false), onTeams = _e[0], setOnTeams = _e[1];
    var _f = react_1.useState("unknown"), teamsTheme = _f[0], setTeamsTheme = _f[1];
    react_1.useEffect(function () {
        microsoftTeams.initialize(function () { return setOnTeams(true); });
        microsoftTeams.getContext(function (theme) {
            console.log("The current theme is " + theme);
            setTeamsTheme(theme.toString());
        });
    }, []);
    var onIncrement = function () { return setCount(count + 1); };
    var onDecrement = function () { return setCount(count > 0 ? count - 1 : 0); };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_router_dom_1.Link, { to: "./page2" }, "Page2"),
        react_1.default.createElement(react_native_1.Text, { style: styles.greeting },
            "Hello ",
            name,
            ".",
            react_1.default.createElement("br", null),
            "Count: ",
            count),
        react_1.default.createElement(react_native_1.Text, { style: styles.greeting }, onTeams ? "You are in Teams." : "You are in a browser."),
        react_1.default.createElement(react_native_1.Text, { style: styles.greeting },
            "Theme: ",
            teamsTheme),
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
exports.default = Home;
