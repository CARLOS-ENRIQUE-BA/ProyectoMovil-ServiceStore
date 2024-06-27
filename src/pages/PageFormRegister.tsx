import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tittle: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F1B77C',
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  TextInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
  },
  subTittle: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
  highlighted: {
    color: '#F1B77C',
  },
  image: {
    marginBottom: 10,
  },
});

export default function FormRegister() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login'); // Navega a la pantalla de login
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../assets/img/Logo.png')} // Asegúrate de ajustar la ruta según tu estructura de archivos
          style={styles.image}
        />
        <TextInput placeholder="Nombre" style={styles.TextInput} />
        <TextInput placeholder="Apellido" style={styles.TextInput} />
        <TextInput placeholder="Correo" style={styles.TextInput} />
        <TextInput placeholder="Teléfono" style={styles.TextInput} />
        <TextInput placeholder="Dirección" style={styles.TextInput} />
        <TextInput placeholder="Contraseña" style={styles.TextInput} secureTextEntry />
        <TouchableOpacity  onPress={handleLoginPress} style={styles.button}>
          <Text style={styles.tittle}>Siguiente</Text>
        </TouchableOpacity>
        <Text style={styles.subTittle}>
          ¿Ya tienes una cuenta? Haz click{' '}
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.highlighted}>aquí</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
}
