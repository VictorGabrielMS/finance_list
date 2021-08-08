import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

type DocData = {
  id: string;
  name: string;
  price: number;
  type: number;
};

type Transaction = {
  name: string;
  price: number;
  type: 0 | 1;
};

type TransactionsContextData = {
  loading: boolean;
  currentBalance: number;
  entries: DocData[];
  outflows: DocData[];
  addTransaction: (data: Transaction) => void;
  removeTransaction: (key: string) => void;
};

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export const TransactionsProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [entries, setEntries] = useState<DocData[]>([]);
  const [outflows, setOutflows] = useState<DocData[]>([]);

  const addTransaction = useCallback(({ name, price, type }: Transaction) => {
    firestore()
      .collection('transactions')
      .add({
        name,
        price,
        type,
      })
      .then(() => {
        Alert.alert('Success', 'Transaction added successfully');
      });
  }, []);

  const removeTransaction = useCallback((key: string) => {
    firestore()
      .collection('transactions')
      .doc(key)
      .delete()
      .then(() => {
        Alert.alert('Success', 'Transaction removed successfully');
      });
  }, []);

  useEffect(() => {
    setLoading(true);

    const subscriber = firestore()
      .collection('transactions')
      .onSnapshot((querySnapshot) => {
        const data: DocData[] = [];

        querySnapshot.forEach((documentSnapshot) => {
          data.push({
            id: documentSnapshot.id,
            name: documentSnapshot.get('name'),
            price: documentSnapshot.get('price'),
            type: documentSnapshot.get('type'),
          });
        });

        setCurrentBalance(
          data.reduce((prev, elem) => {
            if (elem.type == 0) return prev + elem.price;
            else return prev - elem.price;
          }, 0)
        );
        setEntries(data.filter((element) => element.type == 0));
        setOutflows(data.filter((element) => element.type == 1));

        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        loading,
        currentBalance,
        entries,
        outflows,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = (): TransactionsContextData =>
  useContext(TransactionsContext);
