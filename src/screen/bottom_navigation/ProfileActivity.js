import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ProfileActivity extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileActivity</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
