import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SCREEN, COLORS} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {Skeleton} from '@rneui/themed';
import {SCREEN_PADDING} from '../../constants';

const {WIDTH} = SCREEN;
const POPULATE_SCREEN = [0, 1, 2, 3, 4, 5];

const StockListCardLoading = () => {
  return (
    <View style={styles.container}>
      {POPULATE_SCREEN.map((i, idx) => (
        <View style={styles.itemContainer}>
          <View style={styles.rowSpaceBetween}>
            {[WIDTH / 2.5, WIDTH / 3].map((w, index) => {
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
          <View style={[styles.rowSpaceBetween, {paddingTop: 12}]}>
            {[WIDTH / 4, WIDTH / 3].map((w, index) => {
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
      ))}
    </View>
  );
};

export default StockListCardLoading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SCREEN_PADDING,
  },
  itemContainer: {paddingVertical: 15},
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
