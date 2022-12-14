import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import VideoPlayer from '../screens/VideoPlayer';
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import PlayList from '../screens/PlayList';
import { MaterialIcons, FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';
import PlayListDetail from '../screens/PlayListDetail';
import Video from '../screens/LoadVideo';
import About from '../screens/About';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PlayListScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='PlayList' component={PlayList} />
      <Stack.Screen name='PlayListDetail' component={PlayListDetail} />
    </Stack.Navigator>
  );
};

const VideoListScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Load' component={Video} />
      <Stack.Screen name='Player' component={VideoPlayer} />
    </Stack.Navigator>
  );
};


const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='AudioList'
        component={AudioList}
        
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='headset' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Player'
        component={Player}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='compact-disc' size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='PlayList'
        component={PlayListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='library-music' size={size} color={color} />
          ),
        }}
      />
            <Tab.Screen
        name='Video'
        component={VideoListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
<Entypo name="video" size={size} color={color} />          ),
        }}
      />
      <Tab.Screen
        name='About'
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
<AntDesign name="infocirlce" size={size} color={color} />    ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
