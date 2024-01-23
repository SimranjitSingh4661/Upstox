import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constants';
import StyledText from '../StyledText';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <StyledText textStyle={styles.title}>{title || ''}</StyledText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.PURPLE,
  },
  title: {
    fontSize: 20,
    paddingLeft: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});
