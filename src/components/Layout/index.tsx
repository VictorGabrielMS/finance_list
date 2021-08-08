import React from 'react';
import { View } from 'react-native';

import { Heading } from '../Heading';

import { styles } from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <View>
      <Heading />
      <View style={styles.container}>{children}</View>
    </View>
  );
};
