import * as React from 'react';
import {View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Coin from "@/components/coin";
import GiveItemPC from "@/app/pc/home/give-item";

interface TabViewCoinProps {
  isMobile: boolean;
}

const TabViewCoin: React.FC<TabViewCoinProps> = ({ isMobile }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'すべて' },
    { key: '2', title: '事務局' },
    { key: '3', title: '管理部' },
    { key: '4', title: '開発部' },
    { key: '5', title: '営業部' },
    { key: '6', title: '渋谷店' },
    { key: '7', title: '恵比寿店' },
    { key: '8', title: 'ゲスト' },
  ]);
  const FirstRoute = () => (
      isMobile ? <Coin /> : <GiveItemPC />
  );

  const SecondRoute = () => (
    <View style={{ padding: 16 }}>
      Division
    </View>
  );

  const ThirdRoute = () => (
    <View style={{ padding: 16 }}>
      ThirdRoute
    </View>
  );

  const FourRoute = () => (
    <View style={{ padding: 16 }}>
      FourRoute
    </View>
  );

  const FiveRoute = () => (
    <View style={{ padding: 16 }}>
      FiveRoute
    </View>
  );

  const SixRoute = () => (
    <View style={{ padding: 16 }}>
      SixRoute
    </View>
  );

  const SevenRoute = () => (
    <View style={{ padding: 16 }}>
      SevenRoute
    </View>
  );

  const EightRoute = () => (
    <View style={{ padding: 16 }}>
      EightRoute
    </View>
  );

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: ThirdRoute,
    4: FourRoute,
    5: FiveRoute,
    6: SixRoute,
    7: SevenRoute,
    8: EightRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{
        backgroundColor: 'white',
        marginLeft: !isMobile ? '75px' : '0',
      }}
      activeColor="blue"
      inactiveColor="gray"
      scrollEnabled={true}
      tabStyle={{ width: 100 }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{
        width: Dimensions.get('window').width,
        height: 100,
      }}
    />
  );
}

export default TabViewCoin;
