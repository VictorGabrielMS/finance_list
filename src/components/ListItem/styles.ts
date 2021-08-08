import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.font,
    padding: 8,
  },
  title: {
    flex: 4,
    color: colors.secondary,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  price: {
    flex: 4,
    textAlign: 'center',
    color: colors.secondary,
    fontWeight: 'bold',
  },
  actions: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  buttonIcon: {
    fontSize: 14,
    color: 'white',
  },
});
