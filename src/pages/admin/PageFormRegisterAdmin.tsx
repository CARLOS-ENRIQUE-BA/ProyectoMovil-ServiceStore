import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F1B77C',
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
    color: 'black',
  },
  subText: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
  highlighted: {
    color: '#F1B77C',
  },
  image: {
    marginBottom: 10
  },
  clientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1B77C',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 25
  },
  clientButtonText: {
    fontSize: 18,
    color: '#666464',
    marginLeft: 10,
  },
  icon: {
    marginLeft: 10,
  },
});

export default function FormRegisterAdmin() {
  const navigation = useNavigation();
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const validateInputs = () => {
    if (!nombre || !apellido || !correo || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      Alert.alert('Error', 'Correo electrónico no válido');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;
  
    try {
      const response = await axios.post('http://34.203.2.126:3000/users/mysql', {
        nombre,
        apellido,
        correo,
        password,
      }, {
        timeout: 5000,
      });
  
      if (response.status === 201) {
        Alert.alert('Éxito', 'Usuario registrado exitosamente', [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);
      } else {
        Alert.alert('Error', 'Error en el registro');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Error', 'Hubo un problema al registrar el usuario');
    }
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterAdminPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/Logo.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.clientButton} onPress={handleRegisterAdminPress}>
        <Text style={styles.clientButtonText}>Vendedor</Text>
        <Icon name="arrow-forward-outline" size={20} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TextInput 
        placeholder="Nombre" 
        style={styles.textInput} 
        placeholderTextColor="black" 
        value={nombre} 
        onChangeText={setNombre} 
      />
      <TextInput 
        placeholder="Apellido" 
        style={styles.textInput} 
        placeholderTextColor="black" 
        value={apellido} 
        onChangeText={setApellido} 
      />
      <TextInput 
        placeholder="Correo" 
        style={styles.textInput} 
        placeholderTextColor="black" 
        value={correo} 
        onChangeText={setCorreo} 
      />
      <TextInput 
        placeholder="Contraseña" 
        style={styles.textInput} 
        placeholderTextColor="black" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.title}>Registrar</Text>
      </TouchableOpacity>
      <Text style={styles.subText}>
        ¿Ya tienes una cuenta? Haz click{' '}
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.highlighted}>aquí</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
