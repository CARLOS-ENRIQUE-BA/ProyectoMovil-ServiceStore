// PageHomeUser.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OrganismHeader from '../components/organisms/OrganismHeader';
import OrganismDropdownMenu from '../components/organisms/OrganismDropdownMenu';
import NavbarUser from '../components/organisms/NavbarUser';
import MoleculeServiceCard from '../components/molecules/MoleculeServiceCard';

const PageHomeUser = () => {
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
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <OrganismHeader onMenuPress={toggleMenu} />
      <OrganismDropdownMenu menuVisible={menuVisible} toggleMenu={toggleMenu} navigation={navigation} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: '#959292', fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
          Favoritos
        </Text>
        <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', marginHorizontal: 20 }}>
          Aún no tienes favoritos. Busca algún negocio y agrégalo.
        </Text>
        <Text style={{ fontSize: 30, color: '#959292', fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
          Recomendados
        </Text>

        <MoleculeServiceCard
          imageSource={require('../assets/img/carpinter/img3.jpg')}
          serviceTitle="Servicio de carpintería"
          subTitle="Servicio de carpintería"
          onPress={handlePress}
          rating={ratings.service1}
          setRating={(rating) => handleRatingChange('service1', rating)}
        />

        <MoleculeServiceCard
          imageSource={require('../assets/img/mechanical/img3.jpg')}
          serviceTitle="Reparación y cambio de válvulas"
          subTitle="Reparación y cambio de válvulas"
          onPress={handlePress}
          rating={ratings.service2}
          setRating={(rating) => handleRatingChange('service2', rating)}
        />

        <MoleculeServiceCard
          imageSource={require('../assets/img/plumber/img3.jpg')}
          serviceTitle="Instalación y revisión de plomería"
          subTitle="Instalación y revisión de plomería"
          onPress={handlePress}
          rating={ratings.service3}
          setRating={(rating) => handleRatingChange('service3', rating)}
        />

      </ScrollView>
      <NavbarUser />
    </View>
  );
};

export default PageHomeUser;
