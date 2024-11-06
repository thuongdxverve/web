import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './HeaderStyles';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {AntDesign} from "@expo/vector-icons";

const HeaderPC = () => {

  return (
    <View>
      <View style={styles.pcSection}>
        <Image
          style={styles.logoPC}
          source={require('@/assets/images/logo.png')}
        />

        <View style={styles.pcItemActive}>
          <AntDesign style={{ marginRight: 10 }} name="copyright" size={22} color="rgba(34, 49, 186, 1)" />
          <Text style={styles.titleMenu}>コイン</Text>
        </View>
        <View style={styles.pcItem}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require('@/assets/images/news.png')}
          />
          <Text style={styles.titleMenu}>ニュース</Text>
        </View>
        <View style={styles.pcItem}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require('@/assets/images/ranking.png')}
          />
          <Text style={styles.titleMenu}>ランキング</Text>
        </View>
        <View style={styles.pcItem}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require('@/assets/images/IconDot.png')}
          />
          <Text style={styles.titleMenu}>その他</Text>
        </View>
        <Text style={styles.pcPoints}>保有ポイント：1,000 pt</Text>
        <View style={{flexDirection: 'row'}}>
          <MaterialIcons style={styles.avatarLogoAlertSP} name="notifications-none" size={32} color="rgba(15, 16, 60, 1)" />
          <Image
            style={styles.avatarLogoSP}
            source={require('@/assets/images/userLogo.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderPC;
