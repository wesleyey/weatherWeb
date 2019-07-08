import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const IconNColor = {
  Rain: {
    color: ["#BDC3C7", "#2C3E50"],
    icon: "weather-rainy"
  },
  Thunderstorm: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-lightning"
  },
  Drizzle: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-hail"
  },
  Snow: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-snowy"
  },
  Mist: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-fog"
  },
  Smoke: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-fog"
  },
  Haze: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-fog"
  },
  Fog: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-fog"
  },
  Sand: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-fog"
  },
  Dust: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-fog"
  },
  Ash: {
    color: ["#E6DADA", "#274046"],
    icon: "weather-fog"
  },
  Squall: {
    color: ["#076585", "#fff"],
    icon: "weather-windy"
  },
  Tornado: {
    color: ["#076585", "#fff"],
    icon: "weather-hurricane"
  },
  Clear: {
    color: ["#F2994A", "#F2C94C"],
    icon: "weather-sunny"
  },
  Clouds: {
    color: ["#232526", "#414345"],
    icon: "weather-cloudy"
  }
};

export default class Weather extends Component {
  static propTypes = {
    temp: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  render() {
    return (
      <LinearGradient
        colors={IconNColor[this.props.name].color}
        style={styles.container}
      >
        <View style={styles.upper}>
          <MaterialCommunityIcons
            color="white"
            size={150}
            name={IconNColor[this.props.name].icon}
          />
          <Text style={styles.temp}>{this.props.temp}℃</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.subtitle}>{this.props.description}</Text>
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
