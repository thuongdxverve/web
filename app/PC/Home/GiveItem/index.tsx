import React from 'react';
import { FlatList, Image, Text, View } from "react-native";
import styles from './GiveItemStyles';
import coinHistoryMock from '../../../../mocks/coinHistoryMock';
import Ionicons from "@expo/vector-icons/Ionicons";
import {AntDesign, Octicons} from "@expo/vector-icons";

const GiveItemPC: React.FC = () => {

  return (
    <View style={styles.app}>
        <FlatList
          data={coinHistoryMock}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.mainItem}>
              <Text style={styles.title}>BE RESPECTEDコイン</Text>
              <View style={styles.sectionInfo}>
                <Text style={styles.title}>
                  {item.sender_name.length > 20 ? item.sender_name.substring(0, 13) + '...' : item.sender_name}
                </Text>
                <Image
                  style={styles.arrow}
                  source={require('@/assets/images/flowbite.png')}
                />
                <Text style={styles.title}>
                  {item.receiver_name.length > 20 ? item.receiver_name.substring(0, 13) + '...' : item.receiver_name}
                </Text>
              </View>

              <View style={styles.avatarGive}>
                <Image
                  style={styles.avatarUser}
                  source={item.sender_avatar}
                />
                <View>
                  <Image
                    style={styles.avatarCoin}
                    source={require('@/assets/images/coin.png')}
                  />
                  <Image
                    style={styles.avatarHand}
                    source={require('@/assets/images/hand.png')}
                  />
                </View>
                <Image
                  style={styles.avatarUser}
                  source={item.receiver_avatar}
                />
              </View>

              <Text style={styles.description}>
                {item.comment.length > 50 ? item.comment.substring(0, 60) + '...' : item.comment}
              </Text>

              <View style={styles.actionComment}>
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
                    <AntDesign name="hearto" size={24} color="black" />
                    <Text style={{ marginLeft: 10 }}>45</Text>
                  </View>
                </View>
              </View>

            </View>
          )}
        />
    </View>
  );
};

export default GiveItemPC;
