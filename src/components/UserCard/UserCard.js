import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserCard = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{props.username}</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.email}>{props.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    marginVertical: 5,
    padding: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  email: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    marginLeft: 5,
  },
});

export default UserCard;
