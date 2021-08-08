import React, { useCallback, useMemo, useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Layout } from '../../components/Layout';
import { ListItem } from '../../components/ListItem';
import { Modal } from '../../components/Modal';

import { useTransactions } from '../../contexts/transactions';
import { useModal } from '../../hooks/useModal';

import { styles } from './styles';

export const Entries: React.FC = () => {
  const { entries, addTransaction } = useTransactions();
  const { isVisible, toggle } = useModal();

  const [entryName, setEntryName] = useState('');
  const [entryPrice, setEntryPrice] = useState('');

  const addNewEntry = useCallback(() => {
    if (entryName && entryPrice) {
      addTransaction({
        name: entryName,
        price: Number(entryPrice),
        type: 0,
      });

      toggle();
    }
  }, [entryName, entryPrice]);

  const addEntryModal = useMemo(
    () => (
      <Modal isVisible={isVisible} toggle={toggle}>
        <View style={styles.formRow}>
          <Text>Entry name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEntryName(text)}
            value={entryName}
          />
        </View>

        <View style={styles.formRow}>
          <Text>Entry price:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEntryPrice(text)}
            value={entryPrice}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formRow}>
          <Pressable style={styles.formButton} onPress={addNewEntry}>
            <Icon name="plus-circle" style={styles.formButtonIcon} />
            <Text style={styles.formButtonText}>add</Text>
          </Pressable>
        </View>
      </Modal>
    ),
    [isVisible, toggle, entryName, entryPrice]
  );

  return (
    <Layout>
      <TouchableOpacity style={styles.addButton} onPress={toggle}>
        <Icon name="plus-circle" style={styles.addButtonIcon} />
        <Text style={styles.addButtonText}>Add new entry</Text>
      </TouchableOpacity>

      <FlatList
        data={entries}
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

      {addEntryModal}
    </Layout>
  );
};
