import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SCREEN, COLORS} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {Skeleton} from '@rneui/themed';
import {SCREEN_PADDING} from '../../constants';

const {WIDTH} = SCREEN;

const HoldingFooterLoading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.rowSpaceBetween}>
          {[WIDTH / 2.5, WIDTH / 3.6].map((w, index) => {
            return (
              <Skeleton
                width={w}
                height={20}
                animation="wave"
                key={`Loading + ${w}${index}`}
                LinearGradientComponent={LinearGradient}
              />
            );
          })}
        </View>
        <View style={[styles.rowSpaceBetween, {paddingTop: 15}]}>
          {[WIDTH / 2.9, WIDTH / 3.3].map((w, index) => {
            return (
              <Skeleton
                width={w}
                height={20}
                animation="wave"
                key={`Loading + ${w}${index}`}
                LinearGradientComponent={LinearGradient}
              />
            );
          })}
        </View>
        <View style={[styles.rowSpaceBetween, {paddingTop: 15}]}>
          {[WIDTH / 3, WIDTH / 3.6].map((w, index) => {
            return (
              <Skeleton
                width={w}
                height={20}
                animation="wave"
                key={`Loading + ${w}${index}`}
                LinearGradientComponent={LinearGradient}
              />
            );
          })}
        </View>
        <View style={[styles.rowSpaceBetween, {paddingTop: 30}]}>
          {[WIDTH / 3.45, WIDTH / 3.7].map((w, index) => {
            return (
              <Skeleton
                width={w}
                height={20}
                animation="wave"
                key={`Loading + ${w}${index}`}
                LinearGradientComponent={LinearGradient}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default HoldingFooterLoading;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SCREEN_PADDING,
  },
  itemContainer: {
    paddingVertical: 15,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
