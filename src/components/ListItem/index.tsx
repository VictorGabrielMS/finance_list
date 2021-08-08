import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTransactions } from '../../contexts/transactions';

import { styles } from './styles';

interface iListItemProps {
  id: string;
  name: string;
  price: number;
  type: number;
}

export const ListItem: React.FC<iListItemProps> = ({
  id,
  name,
  price,
  type,
}: iListItemProps) => {
  const { removeTransaction } = useTransactions();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeTransaction(id)}
        >
          <Icon name="trash" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
