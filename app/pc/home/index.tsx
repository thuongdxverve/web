import {View, StyleSheet} from "react-native";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import React from "react";
import SearchPC from "./search";
import GiveItemPC from "./give-item";
import HeaderPC from "@/app/pc/layouts/header";
import GiveCoin from "../../../components/give-coin";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#e30d1e' }} />
);

const FourRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#e30d1e' }} />
);

const FiveRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#e30d1e' }} />
);

const SixRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#e30d1e' }} />
);

const SevenRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#e30d1e' }} />
);

const EightRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#e30d1e' }} />
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
    }}
    activeColor="blue"
    inactiveColor="gray"
  />
);

const HomePC = () => {
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

  return (
    <View style={styles.container}>
      <View>
        <HeaderPC />
        <SearchPC />
      </View>

      <View style={{ width: '60%', paddingLeft: 75 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>

      <GiveItemPC />
      <GiveCoin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D2089',
    textAlign: 'center',
  },
  titleBy: {
    fontSize: 14,
    textAlign: 'center',
    color: '#1D2089',
  },
  avatarLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});

export default HomePC;
