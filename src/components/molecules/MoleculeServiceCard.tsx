// MoleculeServiceCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AtomImage from '../atoms/AtomImage';
import AtomText from '../atoms/AtomText';
import AtomStarRating from '../atoms/AtomStarRating';

interface MoleculeServiceCardProps {
  imageSource: any;
  serviceTitle: string;
  subTitle: string;
  onPress?: () => void;
  rating: number;
  setRating: (rating: number) => void;
}

const MoleculeServiceCard: React.FC<MoleculeServiceCardProps> = ({
  imageSource,
  serviceTitle,
  subTitle,
  onPress,
  rating,
  setRating,
}) => {
  return (
    <View style={styles.serviceContainer}>
      <AtomImage source={imageSource} onPress={onPress} />
      <AtomText text={serviceTitle} onPress={onPress} />
      <AtomStarRating rating={rating} setRating={setRating} />
      <AtomText text={subTitle} style={styles.subTitle} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  serviceContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    elevation: 2,
  },
  subTitle: {
    fontSize: 15,
    color: 'black',
    marginHorizontal: 20,
  },
});

export default MoleculeServiceCard;
