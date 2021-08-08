import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';

import { styles } from './styles';

export const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <LottieView
          style={styles.animation}
          source={require('../../assets/animation/money-stack.json')}
          autoSize
          autoPlay
          loop
        />
      </View>

      <Text style={styles.title}>Finacelist</Text>
      <Text style={styles.subtitle}>an app to finances</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('App')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
