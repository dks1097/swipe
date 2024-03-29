import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Component } from "react";

class Ball extends Component {
  componentWillMount = () => {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 },
    }).start();
  };

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  ball: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 25,
    borderWidth: 25,
    borderColor: "black",
  },
});

export default Ball;
