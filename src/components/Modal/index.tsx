import React, { ReactNode } from 'react';
import { Modal as RNModal, Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './styles';

interface iModal {
  isVisible: boolean;
  toggle: () => void;
  children: ReactNode;
}

export const Modal: React.FC<iModal> = ({
  isVisible,
  toggle,
  children,
}: iModal) =>
  isVisible ? (
    <View style={styles.centeredView}>
      <RNModal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={styles.closeButton} onPress={toggle}>
              <Icon name="x-circle" style={styles.closeButtonIcon} />
            </Pressable>

            {children}
          </View>
        </View>
      </RNModal>
    </View>
  ) : null;
