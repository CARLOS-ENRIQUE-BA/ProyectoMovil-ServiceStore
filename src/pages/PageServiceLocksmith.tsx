import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavbarUser from '../components/organisms/NavbarUser';
import OrganismHeader from '../components/organisms/OrganismHeader';
import OrganismDropdownMenu from '../components/organisms/OrganismDropdownMenu';

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
    marginBottom: 10,
    resizeMode: 'cover',
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

export default function PageServiceLocksmith() {
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

  const handlePress = () => {
    navigation.navigate('PageMoreInformation');
  };


  return (
    <View style={styles.container}>
      <OrganismHeader onMenuPress={toggleMenu} iconSize={30} />
      <OrganismDropdownMenu menuVisible={menuVisible} toggleMenu={toggleMenu} navigation={navigation} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={styles.title}>Cerrajería</Text>
        <View style={styles.serviceContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={require('../assets/img/locksmith/img1.jpg')} style={styles.imagePlaceholder} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.serviceTitle}>Servicio</Text>
          </TouchableOpacity>
          <StarRating
            rating={ratings.service1}
            setRating={(rating) => handleRatingChange('service1', rating)}
          />
          <Text>Cerrajería Hernández, la seguridad en manos expertas.</Text>
        </View>
        <View style={styles.serviceContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={require('../assets/img/locksmith/img2.jpg')} style={styles.imagePlaceholder} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.serviceTitle}>Servicio</Text>
          </TouchableOpacity>
          <StarRating
            rating={ratings.service2}
            setRating={(rating) => handleRatingChange('service2', rating)}
          />
          <Text>Servicios de Cerrajería Pérez, abriendo puertas con confianza</Text>
        </View>
        <View style={styles.serviceContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={require('../assets/img/locksmith/img3.jpg')} style={styles.imagePlaceholder} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.serviceTitle}>Servicio</Text>
          </TouchableOpacity>
          <StarRating
            rating={ratings.service3}
            setRating={(rating) => handleRatingChange('service3', rating)}
          />
          <Text>Cerrajería Martínez, tu mejor opción para soluciones rápidas y seguras</Text>
        </View>
      </ScrollView>
      <NavbarUser/>
    </View>
  );
}
