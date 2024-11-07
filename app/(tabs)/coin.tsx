import { Stack } from 'expo-router';
import {Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {ThemedView} from "@/components/ThemedView";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import TabViewCoin from "@/components/tab-view";
import GiveCoin from "@/components/give-coin";

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

            <ScrollView>
              <ThemedView style={styles.sectionTab}>
                <TabViewCoin isMobile={true} />
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
