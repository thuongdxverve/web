import {View, StyleSheet} from "react-native";
import React from "react";
import SearchPC from "./search";
import HeaderPC from "@/app/pc/layouts/header";
import GiveCoin from "../../../components/give-coin";
import TabViewCoin from "@/components/tab-view";

const HomePC = () => {

  return (
    <View style={styles.container}>
      <View>
        <HeaderPC />
        <SearchPC />
      </View>

      <TabViewCoin
        isMobile={false}
      />

      <GiveCoin isMobile={false} />
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
