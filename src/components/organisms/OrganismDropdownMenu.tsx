import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MoleculeDropdownItem from '../molecules/MoleculeDropdownItem';

interface OrganismDropdownMenuProps {
  menuVisible: boolean;
  toggleMenu: () => void;
  navigation: any; // tipo de navegación específico de React Navigation
}

const OrganismDropdownMenu: React.FC<OrganismDropdownMenuProps> = ({ menuVisible, toggleMenu, navigation }) => {
  if (!menuVisible) {
    return null;
  }

  return (
    <View style={styles.dropdown}>
      <View style={styles.dropdownHeader}>
        <Text>Servicios</Text>
      </View>
      <MoleculeDropdownItem
        iconName="build-sharp"
        text="Plomería"
        onPress={() => {
          navigation.navigate('PageServicePlumber');
          toggleMenu();
        }}
      />
      <MoleculeDropdownItem
        iconName="hammer"
        text="Carpintería"
        onPress={() => {
          navigation.navigate('PageServiceCarpenter');
          toggleMenu();
        }}
      />
      <MoleculeDropdownItem
        iconName="flash"
        text="Electricidad"
        onPress={() => {
          navigation.navigate('PageServiceElectrician');
          toggleMenu();
        }}
      />
      <MoleculeDropdownItem
        iconName="cut-sharp"
        text="Peluquería"
        onPress={() => {
          navigation.navigate('PageServiceHairdresser');
          toggleMenu();
        }}
      />
      <MoleculeDropdownItem
        iconName="hand-right-sharp"
        text="Manicure"
        onPress={() => {
          navigation.navigate('PageServiceManicure');
          toggleMenu();
        }}
      />
      <MoleculeDropdownItem
        iconName="key"
        text="Cerrajería"
        onPress={() => {
          navigation.navigate('PageServiceLocksmith');
          toggleMenu();
        }}
      />
      <MoleculeDropdownItem
        iconName="car-sport-sharp"
        text="Mecánica Automotriz"
        onPress={() => {
          navigation.navigate('PageServiceMechanical');
          toggleMenu();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default OrganismDropdownMenu;
