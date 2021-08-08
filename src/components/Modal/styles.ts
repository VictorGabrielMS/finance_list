import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '70%',
    minHeight: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  closeButtonIcon: {
    fontSize: 16,
    color: colors.secondary,
  },
});
