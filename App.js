import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DraggableList from './components/DraggableList';
import SwipeableP from './components/SwipeableP';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InnerTabView from './components/InnerTabView';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Draggable() {
  return (
    <View style={{ flex: 1 }}>
      <DraggableList />
    </View>
  );
}

function RenderSwipeablePanel() {
  return (
    <SwipeableP />
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="DraggableList" component={Draggable} />
        <Tab.Screen name="SwipeablePanel" component={RenderSwipeablePanel} />
        <Tab.Screen name="TabView" component={InnerTabView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
