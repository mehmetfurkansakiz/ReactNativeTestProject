import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function Member({navigation}) {
  return (
    <SafeAreaView>
      <Text>Member Tab</Text>
      <Button
        title="Bas bana gec"
        onPress={() => navigation.navigate('MemberDetailScreen')}
      />
    </SafeAreaView>
  );
}

export default Member;
