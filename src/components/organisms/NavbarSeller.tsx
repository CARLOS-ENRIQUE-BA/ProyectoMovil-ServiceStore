import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../molecules/IconButton';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const NavbarSeller: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <IconButton onPress={() => navigation.navigate('HomeSeller')} iconName="home" iconSize={30} iconColor="black" />
      <IconButton onPress={() => navigation.navigate('PageFremium')} iconName="diamond" iconSize={30} iconColor="black" />
      <IconButton onPress={() => navigation.navigate('AddService')} iconName="add" iconSize={30} iconColor="black" />
      <IconButton onPress={() => navigation.navigate('PageProfileSeller')} iconName="person" iconSize={30} iconColor="black" />
    </View>
  );
};

export default NavbarSeller;
