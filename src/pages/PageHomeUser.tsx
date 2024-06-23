import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  title: {
    fontSize: 30,
    color: '#959292',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subTittle: {
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
    backgroundColor: 'black',
    marginBottom: 10,
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
          navigation.navigate('Service2');
          toggleMenu();
        }}
      >
        <Icon name="flash" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Electricidad</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('Service2');
          toggleMenu();
        }}
      >
        <Icon name="cut-sharp" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Peluquería</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('Service2');
          toggleMenu();
        }}
      >
        <Icon name="hand-right-sharp" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Manicure</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('Service2');
          toggleMenu();
        }}
      >
        <Icon name="key" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Cerrajería</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          navigation.navigate('Service2');
          toggleMenu();
        }}
      >
        <Icon name="car-sport-sharp" size={20} color="black" />
        <Text style={styles.dropdownItemText}>Mecánica Automotriz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function PageHomeUser() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [ratings, setRatings] = useState({ service1: 0, service2: 0, service3: 0 });

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleRatingChange = (service, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [service]: rating,
    }));
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
        <Text style={styles.title}>Favoritos</Text>
        <Text style={styles.subTittle}>Aún no tienes favoritos. Busca algún negocio y agrégalo.</Text>
        <Text style={styles.title}>Recomendados</Text>
        <View style={styles.serviceContainer}>
          <View style={styles.imagePlaceholder} />
          <Text style={styles.serviceTitle}>Servicio</Text>
          <StarRating
            rating={ratings.service1}
            setRating={(rating) => handleRatingChange('service1', rating)}
          />
          <Text>Destapar el ducto de lavado</Text>
        </View>
        <View style={styles.serviceContainer}>
          <View style={styles.imagePlaceholder} />
          <Text style={styles.serviceTitle}>Servicio</Text>
          <StarRating
            rating={ratings.service2}
            setRating={(rating) => handleRatingChange('service2', rating)}
          />
          <Text>Instalación de tubería</Text>
        </View>
        <View style={styles.serviceContainer}>
          <View style={styles.imagePlaceholder} />
          <Text style={styles.serviceTitle}>Servicio</Text>
          <StarRating
            rating={ratings.service3}
            setRating={(rating) => handleRatingChange('service3', rating)}
          />
          <Text>Instalación de tubería</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeUser')}>
          <Icon name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddService')}>
          <Icon name="heart" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
