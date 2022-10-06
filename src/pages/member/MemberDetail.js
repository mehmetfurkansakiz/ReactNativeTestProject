import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function MemberDetail({navigation}) {
  return (
    <SafeAreaView>
      <Text>MemberDetail Tab</Text>
      <Button
        title="Update"
        onPress={() => navigation.navigate('MemberUpdateScreen')}
      />
    </SafeAreaView>
  );
}

export default MemberDetail;
