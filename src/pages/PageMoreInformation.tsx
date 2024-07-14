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
  subTittle: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
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
    color: 'black', // Color del texto del item del dropdown
  },
  nextButton: {
    backgroundColor: '#EFD3A3',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginVertical: 20,
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
  },
  iconLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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

export default function PageMoreInformation() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [ratings, setRatings] = useState({
    service1: 0,
    service2: 0,
    service3: 0,
  });

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleRatingChange = (service, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [service]: rating,
    }));
  };

  const handlePress = () => {
    navigation.navigate('NewDate');
  };

  const images = {
    service1: require('../assets/img/locksmith/img1.jpg'),
    service2: require('../assets/img/mechanical/img2.jpg'),
    service3: require('../assets/img/hairdresser/img3.jpg'),
    mainImage: require('../assets/img/electrician/img1.jpg'),
  };

  return (
    <View style={styles.container}>
      <OrganismHeader onMenuPress={toggleMenu} iconSize={30} />
      <OrganismDropdownMenu
        menuVisible={menuVisible}
        toggleMenu={toggleMenu}
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Image source={images.mainImage} style={styles.mainImage} />
        <StarRating rating={4} setRating={() => { }} />
        <View style={styles.iconLocation}>
          <Icon name="location-sharp" size={20} color="black" />
          <Text> Localizacion</Text>
        </View>
        <Text style={styles.subTittle}>
          Servicios Eléctricos López, tu mejor opción para todas tus necesidades
          eléctricas.
        </Text>
        <View style={styles.serviceContainer}>
          <Image source={images.service1} style={styles.imagePlaceholder} />
          <Text style={styles.serviceTitle}>Servicio 1</Text>
          <StarRating
            rating={ratings.service1}
            setRating={rating => handleRatingChange('service1', rating)}
          />
          <Text style={{ color: 'black' }}>Servicio de cerrajería</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Image source={images.service2} style={styles.imagePlaceholder} />
          <Text style={styles.serviceTitle}>Servicio 2</Text>
          <StarRating
            rating={ratings.service2}
            setRating={rating => handleRatingChange('service2', rating)}
          />
          <Text style={{ color: 'black' }}>Reparación y cambios de aceite</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Image source={images.service3} style={styles.imagePlaceholder} />
          <Text style={styles.serviceTitle}>Servicio 3</Text>
          <StarRating
            rating={ratings.service3}
            setRating={rating => handleRatingChange('service3', rating)}
          />
          <Text style={{ color: 'black' }}>Estilista y cortes de cabello</Text>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handlePress}>
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavbarUser />
    </View>
  );
}
