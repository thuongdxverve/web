import React from 'react';
import {TextInput, TouchableOpacity, Text, View, Image} from "react-native";
import styles from './SearchStyles';
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchPC: React.FC = () => (
  <View style={styles.sectionInfo}>
    <View style={styles.yourMoney}>
      <Text style={styles.titleCoin}>コイン</Text>
      <Text style={styles.titleTypeCoin}>コインの種類について</Text>
      <FontAwesome name="question-circle-o" size={20} color="rgba(34, 49, 186, 1)" />
    </View>

    <View style={styles.sectionSearch}>
      <View style={styles.searchContainer}>
        <Ionicons style={styles.iconSearch} name="search" size={20} color="rgba(181, 181, 181, 1)" />
        <TextInput
          style={styles.input}
          placeholder="フリーワードで検索"
          placeholderTextColor="#aaa"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.sectionText}>
          <Text style={styles.buttonText}>
            検索条件
          </Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('@/assets/images/Icon-right.png')}
          />
        </View>
      </TouchableOpacity>
    </View>

  </View>
);


export default SearchPC;
