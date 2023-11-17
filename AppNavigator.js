import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlatListScreen from './FlatListScreen';
import ScrollViewScreen from './ScrollViewScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlatList" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
