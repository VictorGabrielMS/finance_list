import React from 'react';
import { TransactionsProvider } from './transactions';

export const ContextProvider: React.FC = ({ children }) => {
  return <TransactionsProvider>{children}</TransactionsProvider>;
};
