import React from 'react';
import { Image } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function HeaderRight() {
  return (
    <BorderlessButton>
      <Image
        source={{ uri: 'https://picsum.photos/40' }}
        style={styles.avatar}
        resizeMode="contain"
      />
    </BorderlessButton>
  );
}

export default HeaderRight;
