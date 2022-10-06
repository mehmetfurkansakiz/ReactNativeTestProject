import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function MemberUpdate({navigation}) {
  return (
    <SafeAreaView>
      <Text>MemberUpdate Tab</Text>
      <Button
        title="Go Profile"
        onPress={() =>
          navigation.navigate('Profile', {screen: 'ProfileScreen'})
        }
      />
    </SafeAreaView>
  );
}

export default MemberUpdate;
