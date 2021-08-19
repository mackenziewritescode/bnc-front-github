"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_router_dom_1 = require("react-router-dom");
// import * as msTeams from "@microsoft/teams-js";
function Configure() {
    // msTeams.settings.registerOnSaveHandler((saveEvent) => {
    //   msTeams.settings.setSettings({
    //     contentUrl: window.location.origin,
    //     entityId: window.location.origin,
    //   });
    //   saveEvent.notifySuccess();
    // });
    // msTeams.settings.setValidityState(true);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_router_dom_1.Link, { to: "./" }, "Home"),
        react_1.default.createElement(react_native_1.Text, { style: styles.defaultText }, "Configure")));
}
exports.default = Configure;
var styles = react_native_1.StyleSheet.create({
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
