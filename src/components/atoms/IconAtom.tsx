import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconAtomProps {
  name: string;
  size: number;
  color: string;
}

const IconAtom: React.FC<IconAtomProps> = ({ name, size, color }) => {
  return <Icon name={name} size={size} color={color} />;
};

export default IconAtom;
