import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#EFD3A3',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subTittle: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  tittle: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 50,
  },
  serviceContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    backgroundColor: 'black',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  ratingStar: {
    color: '#FFD700',
    marginHorizontal: 2,
  },
  footer: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    right: 0,
    width: 400,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#EFD3A3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  dropdownItemText: {
    marginLeft: 10,
  },
  nextButton: {
    backgroundColor: '#EFD3A3',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginVertical: 30,
  },
  nextButtonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainImage: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
  },
  iconLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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
  imagePlaceholder: {
    width: '75%',
    height: 250,
    backgroundColor: 'black',
    marginBottom: 10,
  },
});

const StarRating = ({ rating, setRating }) => {
  return (
    <View style={styles.rating}>
      {Array.from({ length: 5 }, (_, index) => (
        <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
          <Icon
            name={index < rating ? 'star' : 'star-outline'}
            size={20}
            style={styles.ratingStar}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const DropdownMenu = ({ menuVisible, toggleMenu, navigation }) => {
  if (!menuVisible) {
    return null;
  }

  return (
    <View style={styles.dropdown}>
      <View style={styles.dropdownHeader}>
        <Text>Servicios</Text>
      </View>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('PageServicePlumber');
          toggleMenu();
        }}
      >
        <Icon name="build-sharp" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Plomería</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('PageServiceCarpenter');
          toggleMenu();
        }}
      >
        <Icon name="hammer" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Carpintería</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('PageServiceElectrician');
          toggleMenu();
        }}
      >
        <Icon name="flash" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Electricidad</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('PageServiceHairdresser');
          toggleMenu();
        }}
      >
        <Icon name="cut-sharp" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Peluquería</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('PageServiceManicure');
          toggleMenu();
        }}
      >
        <Icon name="hand-right-sharp" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Manicure</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('PageServiceLocksmith');
          toggleMenu();
        }}
      >
        <Icon name="key" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Cerrajería</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('PageServiceMechanical');
          toggleMenu();
        }}
      >
        <Icon name="car-sport-sharp" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Mecánica Automotriz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function NewDate() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [ratings, setRatings] = useState({ service1: 0, service2: 0, service3: 0 });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState('');

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleRatingChange = (service, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [service]: rating,
    }));
  };

  const handlePress = async () => {
    try {
      const response = await axios.post('http://34.203.2.126:3000/appointments/mysql', {
        nombre,
        fecha: selectedDate.toISOString().split('T')[0],
        hora,
      });

      if (response.status === 201) {
        Alert.alert('Éxito', 'Cita agendada exitosamente', [
          { text: 'OK', onPress: () => navigation.navigate('HomeUser') }
        ]);
      } else {
        Alert.alert('Error', 'Error al agendar la cita');
      }
    } catch (error) {
      console.error('Error agendando la cita:', error);
      Alert.alert('Error', 'Hubo un problema al agendar la cita');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="person" size={30} color="black" />
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <DropdownMenu menuVisible={menuVisible} toggleMenu={toggleMenu} navigation={navigation} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={styles.tittle}>Rellene el formulario para agendar una cita.</Text>
        <TextInput
          placeholder="Nombre"
          style={styles.TextInput}
          value={nombre}
          onChangeText={setNombre}
        />
        <TouchableOpacity style={styles.TextInput} onPress={() => setShowDatePicker(true)}>
          <Text>{selectedDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DatePicker
            date={selectedDate}
            onDateChange={setSelectedDate}
            mode="datetime"
          />
        )}
        <TextInput
          placeholder="Hora"
          style={styles.TextInput}
          value={hora}
          onChangeText={setHora}
        />
        <TouchableOpacity style={styles.nextButton} onPress={handlePress}>
          <Text style={styles.nextButtonText}>Agendar</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeUser')}>
          <Icon name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeUser')}>
          <Icon name="heart" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
