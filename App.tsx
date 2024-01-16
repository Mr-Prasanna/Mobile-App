import 'react-native-gesture-handler'
import React ,{useEffect}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import store from './store/store';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootSaga from './sagas/rootSaga';
import RegisterScreen from './screens/RegisterScreen';
import OTPScreen from './screens/OtpScreen';
import HelpScreen from './screens/HomePage';
import HomePage from './screens/HomePage';
import { Text, View } from 'react-native';
import LoginContainer from './Container/LoginContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import SplashScreen from 'react-native-splash-screen';
export const Stack = createNativeStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
function App() {
  // useEffect(()=> {
  //   // SplashScreen.hide();
  //   SplashScreen.hide;
  // })
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginContainer} />
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="OTP Verification" component={OTPScreen} />
          </Stack.Navigator>
          </NavigationContainer>
          </SafeAreaProvider>
        </Provider>
  )
}

export default App;
