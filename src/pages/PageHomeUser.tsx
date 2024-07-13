import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavbarUser from '../components/organisms/NavbarUser';
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
    color: 'black', // Color del título del servicio
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  ratingStar: {
    color: '#FFD700',
    marginHorizontal: 2,
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

  const handlePress = () => {
    navigation.navigate('PageMoreInformation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="person" size={30} color="black" />
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <OrganismDropdownMenu menuVisible={menuVisible} toggleMenu={toggleMenu} navigation={navigation} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={styles.title}>Favoritos</Text>
        <Text style={styles.subTitle}>Aún no tienes favoritos. Busca algún negocio y agrégalo.</Text>
        <Text style={styles.title}>Recomendados</Text>
        <View style={styles.serviceContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={require('../assets/img/carpinter/img3.jpg')} style={styles.imagePlaceholder} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.serviceTitle}>Servicio</Text>
          </TouchableOpacity>
          <StarRating
            rating={ratings.service1}
            setRating={(rating) => handleRatingChange('service1', rating)}
          />
          <Text style={styles.subTitle}>servicio de carpintería</Text>
        </View>
        <View style={styles.serviceContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={require('../assets/img/mechanical/img3.jpg')} style={styles.imagePlaceholder} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.serviceTitle}>Servicio</Text>
          </TouchableOpacity>
          <StarRating
            rating={ratings.service2}
            setRating={(rating) => handleRatingChange('service2', rating)}
          />
          <Text style={styles.subTitle}>Reparacion y cambio de valatas</Text>
        </View>
        <View style={styles.serviceContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={require('../assets/img/plumber/img3.jpg')} style={styles.imagePlaceholder} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.serviceTitle}>Servicio</Text>
          </TouchableOpacity>
          <StarRating
            rating={ratings.service3}
            setRating={(rating) => handleRatingChange('service3', rating)}
          />
          <Text style={styles.subTitle}>Instalación y revición de plomería</Text>
        </View>
      </ScrollView>
      <NavbarUser/>
    </View>
  );
}
