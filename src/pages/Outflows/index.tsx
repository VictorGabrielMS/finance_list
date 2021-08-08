import React, { useCallback, useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Layout } from '../../components/Layout';
import { ListItem } from '../../components/ListItem';
import { Modal } from '../../components/Modal';

import { useTransactions } from '../../contexts/transactions';
import { useModal } from '../../hooks/useModal';

import { styles } from './styles';

export const Outflows: React.FC = () => {
  const { outflows, addTransaction } = useTransactions();
  const { isVisible, toggle } = useModal();

  const [outflowName, setOutflowName] = useState('');
  const [outflowPrice, setOutflowPrice] = useState('');

  const addNewOutflow = useCallback(() => {
    if (outflowName && outflowPrice) {
      addTransaction({
        name: outflowName,
        price: Number(outflowPrice),
        type: 1,
      });

      toggle();
    }
  }, [outflowName, outflowPrice]);

  const addOutflowModal = useMemo(
    () => (
      <Modal isVisible={isVisible} toggle={toggle}>
        <View style={styles.formRow}>
          <Text>Outflow name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setOutflowName(text)}
            value={outflowName}
          />
        </View>

        <View style={styles.formRow}>
          <Text>Outflow price:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setOutflowPrice(text)}
            value={outflowPrice}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formRow}>
          <Pressable style={styles.formButton} onPress={addNewOutflow}>
            <Icon name="plus-circle" style={styles.formButtonIcon} />
            <Text style={styles.formButtonText}>add</Text>
          </Pressable>
        </View>
      </Modal>
    ),
    [isVisible, toggle, outflowName, outflowPrice]
  );

  return (
    <Layout>
      <TouchableOpacity style={styles.addButton} onPress={toggle}>
        <Icon name="plus-circle" style={styles.addButtonIcon} />
        <Text style={styles.addButtonText}>Add new outflow</Text>
      </TouchableOpacity>

      <FlatList
        data={outflows}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            price={item.price}
            type={item.type}
            id={item.id}
          />
        )}
      />

      {addOutflowModal}
    </Layout>
  );
};
