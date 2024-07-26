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
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 30,
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
    marginTop: 15,
    fontSize: 16,
    color: 'black',
  },
  highlighted: {
    fontSize: 16,
    color: '#F1B77C',
  },
  image: {
    marginBottom: 20,
  },
});

export default function FormLogin() {
  const navigation = useNavigation();

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleBackPress = () => {
    navigation.navigate('Register');
  };
  
  const handlePasswordPress = () => {
    navigation.navigate('RecoverPassword');
  };

  const handleLoginPress = async () => {
    try {
      const adminResponse = await axios.get('http://34.203.2.126:3000/vendedores/mysql');
      
      if (adminResponse.status === 200 && adminResponse.data) {
        const admins = adminResponse.data;
        const adminUser = admins.find(admin => admin.correo === correo && admin.password === password);
        
        if (adminUser) {
          navigation.navigate('PageFremium');
          return;
        }
      }
      
      const userResponse = await axios.get('http://34.203.2.126:3000/users/mysql');
      
      if (userResponse.status === 200 && userResponse.data) {
        const users = userResponse.data;
        const regularUser = users.find(user => user.correo === correo && user.password === password);
        
        if (regularUser) {
          navigation.navigate('HomeUser');
        } else {
          Alert.alert('Error', 'Usuario no encontrado');
        }
      } else {
        Alert.alert('Error', 'Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Error al intentar iniciar sesión. Verifica tu conexión a internet.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={handleBackPress}>
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Image
        source={require('../assets/img/Logo.png')}
        style={styles.image}
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
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />
      <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
        <Text style={styles.title}>Siguiente</Text>
      </TouchableOpacity>
      <Text style={styles.subText}>
        ¿Aun no te has registrado? Haz click{' '}
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={styles.highlighted}>aquí</Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.subText}>
        ¿Haz olvidado tu contraseña? Haz click{' '}
        <TouchableOpacity onPress={handlePasswordPress}>
          <Text style={styles.highlighted}>aquí</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
