import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const styles = StyleSheet.create({
  addButton: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  addButtonIcon: {
    fontSize: 16,
    color: colors.font,
    marginRight: 4,
  },
  addButtonText: {
    color: colors.font,
    fontSize: 16,
  },
  formRow: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  formButton: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  formButtonIcon: {
    fontSize: 16,
    color: colors.font,
    marginRight: 4,
  },
  formButtonText: {
    color: colors.font,
    fontSize: 16,
  },
});
