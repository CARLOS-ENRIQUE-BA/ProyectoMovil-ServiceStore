import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FormRegister from './src/pages/PageFormRegister'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import LoginScreen from './src/pages/PageFormLogin'; // Crea y ajusta la ruta a tu pantalla de Login
import PageFremium from './src/pages/PageFremium';
import PageHomeUser from './src/pages/PageHomeUser';
import PageServicePlumber from './src/pages/PageServicePlumber';
import PageServiceCarpenter from './src/pages/PageServiceCarpenter';

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
          <Stack.Screen name="HomeUser" component={PageHomeUser} />
          <Stack.Screen name="PageServicePlumber" component={PageServicePlumber} />
          <Stack.Screen name="PageServiceCarpenter" component={PageServiceCarpenter} />
          <Stack.Screen name="PageFremium" component={PageFremium} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
