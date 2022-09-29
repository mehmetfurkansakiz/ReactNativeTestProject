import React from 'react';
import {View, Text, Button} from 'react-native';

function Member({navigation}) {
  return (
    <View>
      <Text>Member Tab</Text>
      <Button
        title="Bas bana gec"
        onPress={() => navigation.navigate('MemberDetailScreen')}
      />
    </View>
  );
}

export default Member;
