import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ControlKnob } from 'react-native-control-knob';

export default function App() {
  return (
    <View style={styles.container}>
      <ControlKnob />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
