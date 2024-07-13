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

const NavbarUser: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <IconButton onPress={() => navigation.navigate('HomeUser')} iconName="home" iconSize={30} iconColor="black" />
      <IconButton onPress={() => navigation.navigate('PageFremium')} iconName="heart" iconSize={30} iconColor="black" />
    </View>
  );
};

export default NavbarUser;
