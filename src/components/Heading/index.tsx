import React from 'react';
import { Text, View } from 'react-native';
import { useTransactions } from '../../contexts/transactions';

import { styles } from './styles';

export const Heading: React.FC = () => {
  const { currentBalance } = useTransactions();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor:
          currentBalance >= 0 ? styles.container.backgroundColor : 'red',
      }}
    >
      <Text
        style={{
          ...styles.label,
          color: currentBalance >= 0 ? styles.label.color : 'white',
        }}
      >
        Balance:
      </Text>
      <Text
        style={{
          ...styles.currentBalance,
          color: currentBalance >= 0 ? styles.currentBalance.color : 'white',
        }}
      >
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(currentBalance)}
      </Text>
    </View>
  );
};
