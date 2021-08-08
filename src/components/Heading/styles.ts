import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const styles = StyleSheet.create({
  container: {
    margin: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  label: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: colors.font,
  },
  currentBalance: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.font,
  },
});
