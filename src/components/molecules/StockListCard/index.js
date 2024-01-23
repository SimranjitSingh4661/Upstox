import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StyledText} from '../../atoms';
import {STRINGS} from '../../../constants/string';
import {SCREEN_PADDING, FONT_SIZE, COLORS} from '../../../constants';
import {formatAmount, calculatePNL, isPositiveOrNegative} from '../../../utils';

const StockListCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Item
        ltp={item?.ltp}
        avgPrice={item?.avgPrice}
        symbol={item?.symbol}
        quantity={item?.quantity}
      />
    </View>
  );
};

const Item = ({symbol, quantity, ltp, avgPrice}) => {
  const pl = formatAmount(calculatePNL({quantity, ltp, avgPrice}));
  return (
    <View style={styles.itemContainer}>
      <View style={styles.rowSpaceBetween}>
        <StyledText textStyle={styles.symbol}>{symbol || ''}</StyledText>
        <StyledText textStyle={styles.ltp}>
          {STRINGS.LTP}
          <Text style={styles.value}>
            {` ${STRINGS.RUPEE} ${formatAmount(ltp)}` || ''}
          </Text>
        </StyledText>
      </View>
      <View style={[styles.rowSpaceBetween, {paddingTop: 5}]}>
        <StyledText textStyle={styles.quantity}>{quantity || ''}</StyledText>
        <StyledText textStyle={styles.pl}>
          {STRINGS.P_AND_L}
          <Text style={styles.value}>
            {` ${STRINGS.RUPEE} `}
            <Text
              style={{
                color: isPositiveOrNegative(pl) ? COLORS.RED : COLORS.GREEN,
              }}>
              {`${pl}` || ''}
            </Text>
          </Text>
        </StyledText>
      </View>
    </View>
  );
};

export default StockListCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SCREEN_PADDING,
  },
  itemContainer: {paddingVertical: 10},
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symbol: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
    letterSpacing: 0.5,
    fontSize: FONT_SIZE.LG,
  },
  ltp: {
    fontWeight: '500',
    letterSpacing: 0.3,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_GREY_LIGHT,
  },
  quantity: {
    letterSpacing: 0.3,
    fontSize: FONT_SIZE.L,
    fontWeight: '500',
    color: COLORS.TEXT_GREY_LIGHT,
  },
  pl: {
    letterSpacing: 0.3,
    fontSize: FONT_SIZE.L,
    fontWeight: '500',
    color: COLORS.TEXT_GREY_LIGHT,
  },
  value: {
    fontWeight: 'bold',
    letterSpacing: 0.3,
    color: COLORS.BLACK,
  },
});
