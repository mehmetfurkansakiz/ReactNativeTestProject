import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

function First(props) {
  function navigateToPage() {
    props.navigation.navigate('SecondScreen', {userName: 'mehmetFurkan'});
  }

  return (
    <View style={styles.container}>
      <Text>First Page Here!</Text>
      <Button title="Bas Bana 2'ye git" onPress={navigateToPage} />
    </View>
  );
}
export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
