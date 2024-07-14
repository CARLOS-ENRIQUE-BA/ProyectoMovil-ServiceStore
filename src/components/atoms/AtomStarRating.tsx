// AtomStarRating.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface AtomStarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const AtomStarRating: React.FC<AtomStarRatingProps> = ({ rating, setRating }) => {
  return (
    <View style={styles.rating}>
      {Array.from({ length: 5 }, (_, index) => (
        <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
          <Icon
            name={index < rating ? 'star' : 'star-outline'}
            size={20}
            style={styles.ratingStar}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  ratingStar: {
    color: '#FFD700',
    marginHorizontal: 2,
  },
});

export default AtomStarRating;
