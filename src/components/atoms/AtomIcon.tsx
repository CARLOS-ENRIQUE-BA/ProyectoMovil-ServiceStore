import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface AtomIconProps {
  name: string;
  size: number;
  color: string;
}

const AtomIcon: React.FC<AtomIconProps> = ({ name, size, color }) => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity>
        <Icon name={name} size={size} color={color} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
  },
});

export default AtomIcon;
