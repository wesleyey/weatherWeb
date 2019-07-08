import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Weather from "./Weather";

const API_KEY = "87eff3f6fb18a39f2983b73541f96269";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperture: null,
    name: null,
    description: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        //console.log(json);
        this.setState({
          temperture: json.main.temp,
          name: json.weather[0].main,
          description: json.weather[0].description,
          isLoaded: true
        });
      });
  };

  render() {
    const { isLoaded, error, temperture, name, description } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <Weather
            temp={Math.floor(temperture - 273.15)}
            name={name}
            description={description}
          />
        ) : error === true ? (
          <View style={styles.loading}>
            <Text style={styles.errorMessage}>Something went wrong...</Text>
          </View>
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather...</Text>
            <ActivityIndicator />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#FFF8A7",
    alignItems: "center",
    justifyContent: "center"
  },
  loadingText: {
    fontSize: 30,
    paddingBottom: 10
  },
  errorMessage: {
    fontSize: 30,
    color: "#ABABAB"
  }
});
