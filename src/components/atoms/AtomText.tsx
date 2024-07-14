// AtomText.tsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AtomTextProps {
  text: string;
  onPress?: () => void;
  style?: object;
}

const AtomText: React.FC<AtomTextProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black', // Color del título del servicio
  },
});

export default AtomText;
