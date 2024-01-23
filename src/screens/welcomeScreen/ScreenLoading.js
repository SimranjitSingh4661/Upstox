import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenContainer, Header} from '../../components/atoms';
import {
  HoldingFooterLoading,
  StockListCardLoading,
} from '../../components/skeletonLoading';
import {SharedStyles} from '../../shared';
import {STRINGS} from '../../constants/string';

const ScreenLoading = () => {
  return (
    <ScreenContainer>
      <Header title={STRINGS.UPSTOX_HOLDING} />
      <View style={styles.container}>
        <View style={SharedStyles.fullFlex}>
          <StockListCardLoading />
        </View>
        <HoldingFooterLoading />
      </View>
    </ScreenContainer>
  );
};

export default ScreenLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
