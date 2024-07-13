import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AtomIcon from '../atoms/AtomIcon';

interface MoleculeDropdownItemProps {
  iconName: string;
  text: string;
  onPress: () => void;
}

const MoleculeDropdownItem: React.FC<MoleculeDropdownItemProps> = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemContainer}>
        <AtomIcon name={iconName} size={20} color="black" />
        <Text style={styles.itemText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 15,
  },
  itemText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 16,
  },
});

export default MoleculeDropdownItem;
