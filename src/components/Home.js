
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TextInput
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('30');

  return (
    <>
      <SafeAreaView
        style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <Text>Enter name:</Text>
          <TextInput 
            placeholder='e.g. John Doe' 
            style={styles.input}
            onChangeText={(value) => setName(value)} />

          <Text>Enter age:</Text>
          <TextInput 
            placeholder='e.g. 99' 
            style={styles.input}
            onChangeText={(value) => setAge(value)} />

          <Text style={styles.result}>name: {name}, age: {age}</Text>
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10
  },
  scrollView: {
    backgroundColor: Colors.lighter,
    padding: 25
  }
});

export default Home;
