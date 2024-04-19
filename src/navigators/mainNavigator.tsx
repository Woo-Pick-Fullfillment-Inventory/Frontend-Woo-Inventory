import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderRight from '../components/HeaderRight';
import { RootStackParamList } from 'src/types/navigation';
import { PRIMARYCOLOR, WHITECOLOR } from 'src/theme';
import { routesArr } from 'src/routes';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: PRIMARYCOLOR },
          headerTitleAlign: 'center',
          headerTintColor: WHITECOLOR,
          headerRight: HeaderRight,
        }}>
        {routesArr.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name as keyof RootStackParamList}
            component={route.component}
            options={route.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
