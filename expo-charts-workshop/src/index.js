import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import GoalsPerformance from './pages/GoalsPerformance';
import ProductReport from './pages/ProductReport';

import HeaderRight from './components/HeaderRight';

const { Navigator, Screen } = createStackNavigator();

function Entry() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FBFBFB',
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontWeight: '500',
            },
            headerLeftContainerStyle: {
              paddingHorizontal: 8,
            },
            headerTintColor: '#2B2B73',
            headerBackTitleVisible: false,
          }}
        >
          <Screen
            name="home"
            component={Home}
            options={{
              title: 'Estatísticas do Negócio',
              headerRight: HeaderRight,
              headerRightContainerStyle: {
                paddingRight: 16,
              },
            }}
          />
          <Screen
            name="goals-performance"
            component={GoalsPerformance}
            options={{
              title: 'Estatísticas do Negócio',
              headerStyle: {
                backgroundColor: '#C3E5FC',
                borderBottomWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
              },
              headerRight: HeaderRight,
              headerRightContainerStyle: {
                paddingRight: 16,
              },
            }}
          />
          <Screen
            name="product-report"
            component={ProductReport}
            options={{
              title: 'Relatório do Produto',
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default Entry;
