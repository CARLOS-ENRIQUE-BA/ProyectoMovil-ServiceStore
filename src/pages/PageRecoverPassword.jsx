import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

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
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
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
  image: {
    marginBottom: 20,
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
  subText: {
    marginTop: 15,
    fontSize: 16,
    color: 'black',
  },
  highlighted: {
    fontSize: 16,
    color: '#F1B77C',
  },
});

export default function RecoverPassword({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showResetFields, setShowResetFields] = useState(false);


  const handleBackPress = () => {
    navigation.navigate('Login');
  };

  const handleRecoverPassword = async () => {
    try {
      // Verificar si el correo existe en la base de datos
      const response = await axios.get('http://34.203.2.126:3000/users/mysql');
      const users = response.data;
      const user = users.find(user => user.correo === correo);

      if (user) {
        // Si el correo existe, mostrar campos para la nueva contraseña
        setShowResetFields(true);
      } else {
        Alert.alert('Error', 'El correo ingresado no está registrado.');
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      Alert.alert('Error', 'Error al verificar el correo. Verifica tu conexión a internet.');
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    try {
      // Obtener el ID del usuario basado en el correo
      const response = await axios.get('http://34.203.2.126:3000/users/mysql');
      const users = response.data;
      const user = users.find(user => user.correo === correo);

      if (user) {
        // Actualizar la contraseña del usuario
        const userId = user.id; // Suponiendo que el ID del usuario está en el campo `id`
        const updateResponse = await axios.put(`http://34.203.2.126:3000/users/mysql/${userId}/password/`, { password: newPassword });

        if (updateResponse.status === 200) {
          Alert.alert('Éxito', 'Contraseña actualizada con éxito.');
          navigation.goBack();
        } else {
          Alert.alert('Error', 'Error al actualizar la contraseña.');
        }
      } else {
        Alert.alert('Error', 'El usuario no se encuentra en la base de datos.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      Alert.alert('Error', 'Error al intentar actualizar la contraseña. Verifica tu conexión a internet.');
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
      <Text style={styles.title}>Recuperar Contraseña</Text>
      {!showResetFields ? (
        <>
          <TextInput 
            placeholder="Correo" 
            style={styles.textInput} 
            placeholderTextColor="black" 
            value={correo} 
            onChangeText={setCorreo} 
          />
          <TouchableOpacity onPress={handleRecoverPassword} style={styles.button}>
            <Text style={styles.title}>Enviar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput 
            placeholder="Nueva Contraseña" 
            style={styles.textInput} 
            placeholderTextColor="black" 
            secureTextEntry 
            value={newPassword} 
            onChangeText={setNewPassword} 
          />
          <TextInput 
            placeholder="Confirmar Contraseña" 
            style={styles.textInput} 
            placeholderTextColor="black" 
            secureTextEntry 
            value={confirmPassword} 
            onChangeText={setConfirmPassword} 
          />
          <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
            <Text style={styles.title}>Actualizar Contraseña</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
