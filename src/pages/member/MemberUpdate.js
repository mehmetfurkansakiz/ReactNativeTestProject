import React from 'react';
import {View, Text, Button} from 'react-native';

function MemberUpdate(navigation) {
  return (
    <View>
      <Text>MemberUpdate Tab</Text>
      <Button
        title="Go Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
    </View>
  );
}

export default MemberUpdate;
