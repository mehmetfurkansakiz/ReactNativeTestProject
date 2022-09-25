import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

function Second(props) {
  function navigateToPage() {
    props.navigation.navigate('FirstScreen');
  }
  console.log(props.route.params);
  const {userName} = props.route.params;
  return (
    <View style={styles.container}>
      <Text>Second Page Here!</Text>
      <Text>Hello {userName}</Text>
      <Button title="Bas Bana 1'e git" onPress={navigateToPage} />
    </View>
  );
}
export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
