import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import materialWave from '../assets/animations/material_wave_loading';

export default class Loading extends React.PureComponent {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
        <View style={styles.container}>
          <View>
            <LottieView
                ref={animation => {
                  this.animation = animation;
                }}
                style={{ width: 100, height: 100 }}
                loop={true}
                source={materialWave}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fffafa',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
