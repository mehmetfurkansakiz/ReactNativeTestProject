import React from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Member from './pages/member/Member';
// import MemberDetail from './pages/member/MemberDetail';
// import MemberUpdate from './pages/member/MemberUpdate';

// import Profile from './pages/profile/Profile';
// import ProfileEdit from './pages/profile/ProfileEdit';
import axios from 'axios';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const MemberStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="MemberScreen" component={Member} />
//       <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
//       <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate} />
//     </Stack.Navigator>
//   );
// };

// const ProfileStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="ProfileScreen" component={Profile} />
//       <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
//     </Stack.Navigator>
//   );
// };

function App() {
  function fetchData() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  return (
    <SafeAreaView>
      <View>
        <Text>Bas asagidaki butona gelsin veri</Text>
        <Button title="Fetch Data" onPress={fetchData} />
      </View>
    </SafeAreaView>

    // <NavigationContainer>
    //   {/* <Stack.Navigator>
    //     <Stack.Screen name="FirstScreen" component={First} />
    //     <Stack.Screen name="SecondScreen" component={Second} />
    //   </Stack.Navigator> */}

    //   {/* {
    //     <Tab.Navigator screenOptions={{headerShown: false}}>
    //       <Tab.Screen name="Member" component={MemberStack} />
    //       <Tab.Screen name="Profile" component={ProfileStack} />
    //     </Tab.Navigator>
    //   } */}

    //   {/* <Drawer.Navigator>
    //     <Drawer.Screen name="ProductsDrawer" component={Products} />
    //     <Drawer.Screen name="FavoritesDrawer" component={Favorites} />
    //   </Drawer.Navigator> */}
    // </NavigationContainer>
  );
}

export default App;
