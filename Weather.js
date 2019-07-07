import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#6DD5FA", "#2980B9"]} style={styles.container}>
        <View style={styles.upper}>
          <Ionicons color="white" size={150} name="ios-rainy" />
          <Text style={styles.temp}>29℃</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>It's rainy outside!!</Text>
          <Text style={styles.subtitle}>
            Don't forget to bring your umbrella.
          </Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 50,
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 40,
    color: "white",
    marginBottom: 20
  },
  subtitle: {
    fontSize: 25,
    color: "white",
    marginBottom: 100
  }
});
