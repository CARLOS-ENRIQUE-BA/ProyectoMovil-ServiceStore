import React from 'react';
import { TouchableOpacity } from 'react-native';
import IconAtom from '../atoms/IconAtom';

interface IconButtonProps {
  onPress: () => void;
  iconName: string;
  iconSize: number;
  iconColor: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onPress, iconName, iconSize, iconColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconAtom name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
