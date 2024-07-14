import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MoleculeHeaderButtonProps {
  iconName: string;
  onPress?: () => void;
  size?: number;
  color?: string;
}

const MoleculeHeaderButton: React.FC<MoleculeHeaderButtonProps> = ({ iconName, onPress, size = 30, color = 'black' }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
});

export default MoleculeHeaderButton;
