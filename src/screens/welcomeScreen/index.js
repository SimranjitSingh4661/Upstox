import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {STRINGS} from '../../constants/string';
import {
  ScreenContainer,
  Header,
  ErrorToast,
  EmptyComponent,
} from '../../components/atoms';
import {getUserHoldingApi} from '../../api/gitHubApi';
import {HoldingFooter, StockListCard} from '../../components/molecules';
import ScreenLoading from './ScreenLoading';
import {transformUserData} from '../../utils';

const WelcomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [footerData, setFooterData] = useState({});

  useEffect(() => {
    getUserHoldingApi()
      .then(res => {
        console.log('REs', res);
        setData(res);
        setFooterData(transformUserData(res?.userHolding));
        console.log('transformUserData', transformUserData(res?.userHolding));
      })
      .catch(err => {
        setError(err?.errorMessage);
        console.log('err', err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ScreenLoading />;
  }

  return (
    <ScreenContainer>
      <Header title={STRINGS.UPSTOX_HOLDING} />
      <FlatList
        data={data?.userHolding}
        ListEmptyComponent={<EmptyComponent />}
        keyExtractor={item => item?.symbol?.toString()}
        renderItem={({item, index}) => <StockListCard item={item} />}
      />
      <HoldingFooter
        todayPNL={footerData?.todayPNL}
        totalPNL={footerData?.totalPNL}
        totalCurrentValue={footerData?.totalCurrentValue}
        totalInvestmentValue={footerData?.totalInvestmentValue}
      />
      {error && <ErrorToast />}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WelcomeScreen;
