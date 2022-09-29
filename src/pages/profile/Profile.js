import React from 'react';
import {View, Text, Button} from 'react-native';

function Profile({navigation}) {
  return (
    <View>
      <Text>Profile Tab</Text>
      <Button
        title="edit"
        onPress={() => navigation.navigate('ProfileEditScreen')}
      />
    </View>
  );
}

export default Profile;
