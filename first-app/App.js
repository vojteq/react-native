import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyClock from './src/components/Clock';

export default function App() {
  const [counter, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>You clicked {counter} times</Text>
      <Button title="button" onPress={() => setCount(counter + 1)} />
      <MyClock />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
