import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SCREEN, COLORS} from '../../constants';
import {SharedStyles} from '../../shared';
import LinearGradient from 'react-native-linear-gradient';
import {Skeleton} from '@rneui/themed';

const {WIDTH} = SCREEN;
const {WHITE, BORDER_GREY} = COLORS;

const UserCardloading = () => {
  return (
    <View style={styles.container}>
      <View style={SharedStyles.row}>
        <Skeleton
          circle
          width={60}
          height={60}
          animation="wave"
          LinearGradientComponent={LinearGradient}
        />
        <View style={styles.rightBox}>
          <Skeleton
            height={20}
            animation="wave"
            width={WIDTH / 2}
            LinearGradientComponent={LinearGradient}
          />
        </View>
      </View>
    </View>
  );
};

export default UserCardloading;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 20,
    backgroundColor: WHITE,
    ...SharedStyles.shadow,
    borderColor: BORDER_GREY,
  },
  rightBox: {
    paddingLeft: 15,
    justifyContent: 'center',
  },
});
