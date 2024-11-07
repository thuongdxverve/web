import { Stack } from 'expo-router';
import {Text, Image, StyleSheet, ScrollView, Dimensions, View} from 'react-native';
import React from 'react';
import {ThemedView} from "@/components/ThemedView";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import GiveCoin from "@/components/give-coin";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import Coin from "@/components/coin";

function LogoTitle() {
    return (
        <Image style={styles.image_logo} source={require('@/assets/images/logo.png')} />
    );
}

function ImageBell() {
    return (
      <MaterialIcons name="notifications-none" size={35} color="rgba(15, 16, 60, 1)" />
    );
}

function UserLogo() {
  return (
    <Image style={styles.image_user} source={require('@/assets/images/userLogo.png')} />
  );
}


export default function Home() {
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
    <Coin />
  );

  const SecondRoute = () => (
    <View style={{ padding: 16 }}>
      <Text>Division</Text>
    </View>
  );

  const ThirdRoute = () => (
    <View style={{ padding: 16 }}>
      <Text>EightRoute</Text>
    </View>
  );

  const FourRoute = () => (
    <View style={{ padding: 16 }}>
      <Text>EightRoute</Text>
    </View>
  );

  const FiveRoute = () => (
    <View style={{ padding: 16 }}>
      <Text>EightRoute</Text>
    </View>
  );

  const SixRoute = () => (
    <View style={{ padding: 16 }}>
      <Text>EightRoute</Text>
    </View>
  );

  const SevenRoute = () => (
    <View style={{ padding: 16 }}>
      <Text>EightRoute</Text>
    </View>
  );

  const EightRoute = () => (
    <View style={{ padding: 16 }}>
      <Text>EightRoute</Text>
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
        boxShadow: 0,
      }}
      activeColor="blue"
      inactiveColor="gray"
      scrollEnabled={true}
      tabStyle={{ width: 100 }}
    />
  );
    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: props => <LogoTitle />,
                    headerTitleAlign: "center",
                    headerRight: props => <ImageBell />,
                    headerLeft: props => <UserLogo />,
                    headerShadowVisible: false,

                }}
            />
            <ThemedView style={styles.sectionInfo}>
              <ThemedView style={styles.sectionSearch}>
                <ThemedView style={styles.yourMoney}>
                  <Text style={styles.titleCoin}>コイン</Text>
                  <Text style={styles.titleTypeCoin}>コインの種類について</Text>
                  <FontAwesome name="question-circle-o" size={20} color="rgba(34, 49, 186, 1)" />
                </ThemedView>
                <Ionicons name="search" size={32} color="rgba(34, 49, 186, 1)" />
              </ThemedView>
            </ThemedView>

            <ScrollView>
              <ThemedView style={styles.sectionTab}>
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
              </ThemedView>
            </ScrollView>

            <GiveCoin isMobile={true}/>
        </>
    );
}

const styles = StyleSheet.create({
  image_logo: {
    width: 238,
    height: 37,
  },
  image_bell: {
    width: 32,
    height: 37,
    marginRight: 10
  },
  sectionTab: {
    width: '100%',
  },
  image_user: {
    width: 40,
    height: 40,
    marginLeft: 10
  },
  sectionInfo: {
    backgroundColor: '#FFFF',
  },
  sectionSearch: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  titleSearch: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F103C',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D2089',
    textAlign: 'center',
  },
  yourMoney: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleCoin: {
    fontSize: 24,
    fontWeight: 700,
    color: 'black',
    marginRight: 15,
  },
  titleTypeCoin: {
    fontSize: 14,
    fontWeight: 700,
    color: 'rgba(34, 49, 186, 1)',
    marginRight: 5,
  },
  sectionInfoGive: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  titleNameUser: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 700,
  },
  titleSub: {
    color: '#828282',
    fontSize: 12,
    fontWeight: 400,
  },
  titleNameGive: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 10,
  },
  titleGive: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
  },
  cake: {
    width: 115,
    height: 85,
  },
});
