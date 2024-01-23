import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StyledText} from '../../atoms';
import {SharedStyles} from '../../../shared';
import {STRINGS} from '../../../constants/string';
import {SCREEN_PADDING, FONT_SIZE, COLORS} from '../../../constants';
import {formatAmount} from '../../../utils';

const HoldingFooter = ({
  todayPNL,
  totalCurrentValue,
  totalInvestmentValue,
  totalPNL,
}) => {
  return (
    <View style={styles.container}>
      <Item title={STRINGS.CURRENT_VALUE} value={totalCurrentValue} />
      <Item title={STRINGS.TOTAL_INVESTMENT} value={totalInvestmentValue} />
      <Item title={STRINGS.TODAYS_PROFIT_LOSS} value={todayPNL} />
      <Item title={STRINGS.PROFIT_LOSS} value={totalPNL } padding />
    </View>
  );
};

const Item = ({title, value, padding = false}) => {
  return (
    <View style={[styles.itemContainer, {paddingTop: padding ? 20 : 2}]}>
      <StyledText textStyle={styles.title}>{title || ''}</StyledText>
      <StyledText textStyle={styles.value}>{`${STRINGS.RUPEE}${
        formatAmount(value) || ''
      }`}</StyledText>
    </View>
  );
};

export default HoldingFooter;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    ...SharedStyles.shadow,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SCREEN_PADDING,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
    letterSpacing: 0.5,
    fontSize: FONT_SIZE.LG,
  },
  value: {
    letterSpacing: 0.3,
    fontSize: FONT_SIZE.LG,
    color: COLORS.TEXT_GREY,
  },
});
