// AtomImage.tsx
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

interface AtomImageProps {
  source: any; // Tipo de fuente de imagen
  onPress?: () => void;
}

const AtomImage: React.FC<AtomImageProps> = ({ source, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={styles.imagePlaceholder} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagePlaceholder: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
});

export default AtomImage;
