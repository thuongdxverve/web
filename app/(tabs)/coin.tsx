import { Stack } from 'expo-router';
import {Text, Image, StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import {ThemedView} from "@/components/ThemedView";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import coinHistoryMock from "@/mocks/coinHistoryMock";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {AntDesign} from "@expo/vector-icons";
import GiveCoin from "../../components/give-coin";

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

const FirstRoute = () => (
  <ThemedView style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <ThemedView style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
  <ThemedView style={{ flex: 1, backgroundColor: '#e30d1e' }} />
);

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
  3: ThirdRoute,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'blue' }}
    style={{
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#bdbdbd',
    }}
    activeColor="blue"
    inactiveColor="gray"
  />
);


export default function Home() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '1', title: 'すべて' },
      { key: '2', title: '事務局' },
      { key: '3', title: '管理部' },
    ]);

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
            <Text style={styles.sectionSearch}>
              <ThemedView style={styles.yourMoney}>
                <Text style={styles.titleCoin}>コイン</Text>
                <Text style={styles.titleTypeCoin}>コインの種類について</Text>
                <FontAwesome name="question-circle-o" size={20} color="rgba(34, 49, 186, 1)" />
              </ThemedView>
              <Ionicons name="search" size={32} color="rgba(34, 49, 186, 1)" />

            </Text>
          </ThemedView>

          <ThemedView style={styles.sectionTab}>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              renderTabBar={renderTabBar}
            />
          </ThemedView>

          <FlatList
            data={coinHistoryMock}
            renderItem={({ item }) => (
              <ThemedView style={styles.overGive}>
                <ThemedView style={{ marginBottom: 15 }}>
                  <ThemedView style={styles.sectionGive}>
                    <Text style={styles.titleRespected}>BE RESPECTEDコイン</Text>
                    <View style={styles.sectionInfoTitle}>
                      <Text style={styles.titleHeadGive}>
                        {item.sender_name.length > 20 ? item.sender_name.substring(0, 13) + '...' : item.sender_name}
                      </Text>
                      <Image
                        style={styles.arrow}
                        source={require('@/assets/images/flowbite.png')}
                      />
                      <Text style={styles.titleHeadGive}>
                        {item.receiver_name.length > 20 ? item.receiver_name.substring(0, 13) + '...' : item.receiver_name}
                      </Text>
                    </View>

                    <ThemedView style={styles.avatarGive}>
                      <Image
                        style={styles.avatarUser}
                        source={item.sender_avatar}
                      />
                      <ThemedView>
                        <Image
                          style={styles.avatarCoin}
                          source={require('@/assets/images/coin.png')}
                        />
                        <Image
                          style={styles.avatarHand}
                          source={require('@/assets/images//hand.png')}
                        />
                      </ThemedView>
                      <Image
                        style={styles.avatarUser}
                        source={item.receiver_avatar}
                      />
                    </ThemedView>
                  </ThemedView>

                  <Text style={styles.description}>
                    {item.comment.length > 50 ? item.comment.substring(0, 60) + '...' : item.comment}
                  </Text>

                  <ThemedView style={styles.actionComment}>
                    <Text style={styles.times}>{item.send_time}</Text>
                    <View style={styles.sectionIcon}>
                      <View style={styles.sectionHeart}>
                        <Ionicons name="image-outline" size={24} color="black" />
                        <Text style={{ marginLeft: 10 }}>45</Text>
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <Ionicons name="chatbubble-outline" size={24} color="black" />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <AntDesign name="minus" size={10} color="black" />
                      </View>
                      <View style={styles.sectionHeart}>
                        <AntDesign name="heart" size={24} color="red" />
                        <Text style={{ marginLeft: 10 }}>45</Text>
                      </View>
                    </View>
                  </ThemedView>

                </ThemedView>
              </ThemedView>
            )}
          />

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
  titleHeadGive: {
    fontWeight: 700,
  },
  titleRespected: {
    fontWeight: 700,
    marginTop: 15,
    marginBottom: 5,
  },
  arrow: {
    width: 25,
    height: 25,
  },
  overGive: {
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1
  },
  image_user: {
    width: 40,
    height: 40,
    marginLeft: 10
  },
  sectionInfo: {
    backgroundColor: '#FFFF',
  },
  sectionInfoTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionSearch: {
    padding: 10,
    width: '100%',
    display: 'flex',
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
    justifyContent: 'space-between',
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
  times: {
    color: '#BDBDBD',
    fontSize: 14,
    fontWeight: 500,
  },
  description: {
    color: '#828282',
    fontSize: 14,
    fontWeight: 400,
    marginVertical: 15,
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
  avatarCoin: {
    width: 48,
    height: 48,
  },
  avatarHand: {
    width: 47,
    height: 20,
  },
  avatarUser: {
    width: 105,
    height: 105,
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
  sectionGive: {
    backgroundColor: '#FFFF',
    borderRadius: 12,
  },
  avatarGive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  cake: {
    width: 115,
    height: 85,
  },
  actionComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
    alignItems: 'center',
  },
});
