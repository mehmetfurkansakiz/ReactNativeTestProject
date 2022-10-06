import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  Button,
  FlatList,
} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    // setLoading(true);  //baslangic degeri false oldugunda kullan
    // const response = await axios.get(URL);
    // setLoading(false);
    // setUserList(response.data);

    axios.get(URL).then(response => {
      setLoading(false);
      setUserList(response.data);
    });
  }

  const renderUser = ({item}) => (
    <UserCard name={item.name} username={item.username} email={item.email} />
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList data={userList} renderItem={renderUser} />
        )}
        {/* <Button title="Fetch Data" onPress={fetchData} /> */}
      </View>
    </SafeAreaView>
  );
}

export default App;
