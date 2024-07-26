import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavbarSeller from '../../components/organisms/NavbarSeller';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerInfo: {
    width: '90%',
    marginVertical: 20,
  },
  mainImage: {
    width: '100%',
    height: 250,
  },
  header: {
    backgroundColor: '#EFD3A3',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  serviceContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    elevation: 2,
  },
  imagePlaceholder: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
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
    color: 'black',
  },
  profile: {
    marginTop: 30,
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#EFD3A3',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  tableCell: {
    fontSize: 16,
    color: 'black',
    width: 100,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  icon: {
    paddingHorizontal: 35,
  },
  scrollView: {
    flexDirection: 'row',
    paddingVertical: 10,
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

const Table = ({ data, onDelete }) => {
  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.fecha}</Text>
      <Text style={styles.tableCell}>{item.hora}</Text>
      <Text style={styles.tableCell}>{item.nombre}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Icon name="trash" size={24} color="red" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView horizontal>
      <View>
        <View style={styles.tableHeader}>
          <Text style={styles.tableCell}>Fecha</Text>
          <Text style={styles.tableCell}>Hora</Text>
          <Text style={styles.tableCell}>Nombre</Text>
          <Text style={styles.tableCell}>Acciones</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default function PageProfileSeller() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [ratings, setRatings] = useState({ service1: 0, service2: 0, service3: 0 });
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://34.203.2.126:3000/appointments/mysql');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://34.203.2.126:3000/appointments/mysql/${id}`);
      // Actualiza la lista de citas después de eliminar
      setAppointments((prevAppointments) => 
        prevAppointments.filter((appointment) => appointment.id !== id)
      );
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="person" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Image source={require('../../assets/img/im.png')} style={styles.mainImage} />
        <View style={styles.containerInfo}>
          <Text style={styles.title}>Juan Mecanico</Text>
          <StarRating rating={4} setRating={() => { }} />
          <Text style={styles.name}>Nombre: Juan Pérez</Text>
          <Text style={styles.name}>Profesión: Mecánico Automotriz</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>Citas</Text>
          <Table data={appointments} onDelete={handleDelete} />
        </View>
      </ScrollView>
      <NavbarSeller />
    </View>
  );
}
