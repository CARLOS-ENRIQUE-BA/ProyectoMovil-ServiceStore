import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavbarUser from '../components/organisms/NavbarUser';
import OrganismHeader from '../components/organisms/OrganismHeader';
import OrganismDropdownMenu from '../components/organisms/OrganismDropdownMenu';
import MoleculeServiceCard from '../components/molecules/MoleculeServiceCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  subTittle: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
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
});

const StarRating = ({ rating, setRating }) => {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
      {Array.from({ length: 5 }, (_, index) => (
        <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
          <Icon
            name={index < rating ? 'star' : 'star-outline'}
            size={20}
            color='#FFD700'
            style={{ marginHorizontal: 2 }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function PageMoreInformation() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [ratings, setRatings] = useState({ service1: 0, service2: 0, service3: 0 });

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

  return (
    <View style={styles.container}>
      <OrganismHeader onMenuPress={toggleMenu} iconSize={30} />
      <OrganismDropdownMenu menuVisible={menuVisible} toggleMenu={toggleMenu} navigation={navigation} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Image source={require('../assets/img/electrician/img1.jpg')} style={styles.mainImage} />
        <StarRating rating={2} setRating={() => { }} />
        <View style={styles.iconLocation}>
          <Icon name="location-sharp" size={20} color="black" />
          <Text> Localizacion</Text>
        </View>
        <Text style={styles.subTittle}>
          Servicios Eléctricos López, tu mejor opción para todas tus necesidades
          eléctricas.
        </Text>

        <MoleculeServiceCard
          imageSource={require('../assets/img/locksmith/img1.jpg')}
          serviceTitle="Servicio 1"
          subTitle="Servicio de cerrajería"
          onPress={handlePress}
          rating={ratings.service1}
          setRating={rating => handleRatingChange('service1', rating)}
        />

        <MoleculeServiceCard
          imageSource={require('../assets/img/mechanical/img2.jpg')}
          serviceTitle="Servicio 2"
          subTitle="Reparación y cambios de aceite"
          onPress={handlePress}
          rating={ratings.service2}
          setRating={rating => handleRatingChange('service2', rating)}
        />

        <MoleculeServiceCard
          imageSource={require('../assets/img/hairdresser/img3.jpg')}
          serviceTitle="Servicio 3"
          subTitle="Estilista y cortes de cabello"
          onPress={handlePress}
          rating={ratings.service3}
          setRating={rating => handleRatingChange('service3', rating)}
        />

        <TouchableOpacity style={styles.nextButton} onPress={handlePress}>
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavbarUser />
    </View>
  );
}
