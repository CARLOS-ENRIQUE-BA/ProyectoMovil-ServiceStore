import React from 'react';
import { View, StyleSheet } from 'react-native';
import MoleculeHeaderButton from '../molecules/MoleculeHeaderButton';

interface OrganismHeaderProps {
  onMenuPress?: () => void;
  iconSize?: number; // Propiedad opcional para el tamaño de los íconos
}

const OrganismHeader: React.FC<OrganismHeaderProps> = ({ onMenuPress, iconSize = 35 }) => {
  return (
    <View style={styles.header}>
      <MoleculeHeaderButton iconName="person-circle-sharp" size={iconSize} />
      <MoleculeHeaderButton iconName="menu" size={iconSize} onPress={onMenuPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#EFD3A3',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
});

export default OrganismHeader;
