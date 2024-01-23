import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {STRINGS} from '../../constants/string';
import {ScreenContainer, Header} from '../../components/atoms';
import {COLORS} from '../../constants';
import {getUserHoldingApi} from '../../api/gitHubApi';
import {HoldingFooter, StockListCard} from '../../components/molecules';

const WelcomeScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserHoldingApi()
      .then(res => console.log('REs', res))
      .catch(err => console.log('err'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScreenContainer>
      <Header title={STRINGS.UPSTOX_HOLDING} />
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
          }}>
          <StockListCard />
        </View>
        <HoldingFooter />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default WelcomeScreen;
