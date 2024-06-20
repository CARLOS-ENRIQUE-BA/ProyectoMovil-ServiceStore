import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FormRegister from './src/pages/PageFormRegister'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import LoginScreen from './src/pages/PageFormLogin'; // Crea y ajusta la ruta a tu pantalla de Login
import HomeUser from './src/pages/PageHomeUser';

enableScreens(); // Habilita react-native-screens

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={
            {headerShown: false,
          }}
        >
          <Stack.Screen name="Register" component={FormRegister} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HomeUser" component={HomeUser} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
