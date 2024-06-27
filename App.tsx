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
import PageMoreInformation from './src/pages/PageMoreInformation';
import NewDate from './src/pages/NewDate';
import PageServiceElectrician from './src/pages/PageServiceElectrician';
import PageServiceHairdresser from './src/pages/PageServiceHairdresser';
import PageServiceManicure from './src/pages/PageServiceManicure';
import PageServiceLocksmith from './src/pages/PageServiceLocksmith';
import PageServiceMechanical from './src/pages/PageServiceMechanical';

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
          <Stack.Screen name="PageMoreInformation" component={PageMoreInformation} />
          <Stack.Screen name="NewDate" component={NewDate} />
          <Stack.Screen name="PageServicePlumber" component={PageServicePlumber} />
          <Stack.Screen name="PageServiceCarpenter" component={PageServiceCarpenter} />
          <Stack.Screen name="PageServiceElectrician" component={PageServiceElectrician} />
          <Stack.Screen name="PageServiceHairdresser" component={PageServiceHairdresser} />
          <Stack.Screen name="PageServiceManicure" component={PageServiceManicure} />
          <Stack.Screen name="PageServiceLocksmith" component={PageServiceLocksmith} />
          <Stack.Screen name="PageServiceMechanical" component={PageServiceMechanical} />
          <Stack.Screen name="PageFremium" component={PageFremium} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
