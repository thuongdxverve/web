import {FlatList, Image, ScrollView, Text, View} from "react-native";
import coinHistoryMock from "@/mocks/coinHistoryMock";
import {ThemedView} from "@/components/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {AntDesign} from "@expo/vector-icons";
import React from "react";
import styles from './coin-styles';

export default function Coin() {

  return (
      <ScrollView >
        {
          coinHistoryMock.map((item, index)=> (
              <ThemedView key={item.id}  style={styles.overGive}>
                <ThemedView style={{ marginBottom: 15 }}>
                  <ThemedView style={styles.sectionGive}>
                    <Text style={styles.titleRespected}>BE RESPECTEDコイン</Text>
                    <ThemedView style={styles.sectionInfoTitle}>
                      <Text style={styles.titleHeadGive}>
                        {item.sender_name.length > 20 ? item.sender_name.substring(0, 13) + '...' : item.sender_name}
                      </Text>
                      <Image
                          style={styles.arrow}
                          source={require('@/assets/images/coin/flowbite.png')}
                      />
                      <Text style={styles.titleHeadGive}>
                        {item.receiver_name.length > 20 ? item.receiver_name.substring(0, 13) + '...' : item.receiver_name}
                      </Text>
                    </ThemedView>

                    <ThemedView style={styles.avatarGive}>
                      <Image
                          style={styles.avatarUser}
                          source={item.sender_avatar}
                      />
                      <ThemedView>
                        <Image
                            style={styles.coinTypeImage}
                            source={require('@/assets/images/coin/coin-type-image.png')}
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
          ))
        }
      </ScrollView>

  );
}