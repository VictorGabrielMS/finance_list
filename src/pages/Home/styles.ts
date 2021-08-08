import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  bannerContainer: {
    backgroundColor: colors.font,
    height: 150,
    width: 150,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {},
  title: {
    color: colors.font,
    fontFamily: 'monospace',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  subtitle: {
    color: colors.secondaryVariant,
    fontFamily: 'monospace',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'lowercase',
    letterSpacing: 4,
  },
  button: {
    backgroundColor: colors.secondaryVariant,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 16,
    marginTop: 16,
  },
  buttonText: {
    color: colors.font,
  },
});
