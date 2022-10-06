import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function Profile({navigation}) {
  return (
    <SafeAreaView>
      <Text>Profile Tab</Text>
      <Button
        title="edit"
        onPress={() => navigation.navigate('ProfileEditScreen')}
      />
    </SafeAreaView>
  );
}

export default Profile;
