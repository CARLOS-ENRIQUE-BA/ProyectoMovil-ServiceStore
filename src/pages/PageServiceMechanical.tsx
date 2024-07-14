import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OrganismHeader from '../components/organisms/OrganismHeader';
import OrganismDropdownMenu from '../components/organisms/OrganismDropdownMenu';
import NavbarUser from '../components/organisms/NavbarUser';
import MoleculeServiceCard from '../components/molecules/MoleculeServiceCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    color: '#959292',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  }
});

export default function PageServiceMechanical() {
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
      <OrganismHeader onMenuPress={toggleMenu} />
      <OrganismDropdownMenu menuVisible={menuVisible} toggleMenu={toggleMenu} navigation={navigation} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={styles.title}>Mecánica Automotriz</Text>

        <MoleculeServiceCard
          imageSource={require('../assets/img/mechanical/img1.jpg')}
          serviceTitle="Servicio"
          subTitle="Mecánica Automotriz Gómez, tu aliado confiable para el mantenimiento de tu vehículo"
          onPress={handlePress}
          rating={ratings.service1}
          setRating={(rating) => handleRatingChange('service1', rating)}
        />

        <MoleculeServiceCard
          imageSource={require('../assets/img/mechanical/img2.jpg')}
          serviceTitle="Servicio"
          subTitle="Taller Mecánico Rodríguez, especialistas en diagnóstico y reparación automotriz"
          onPress={handlePress}
          rating={ratings.service2}
          setRating={(rating) => handleRatingChange('service2', rating)}
        />

        <MoleculeServiceCard
          imageSource={require('../assets/img/mechanical/img3.jpg')}
          serviceTitle="Servicio"
          subTitle="Servicio Técnico Automotriz Ramírez, calidad y precisión en cada reparación"
          onPress={handlePress}
          rating={ratings.service3}
          setRating={(rating) => handleRatingChange('service3', rating)}
        />
        
      </ScrollView>
      <NavbarUser />
    </View>
  );
}
