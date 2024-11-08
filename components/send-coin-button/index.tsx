import {Image, Text, View} from "react-native";
import React from "react";
import styles from './send-coin-button-styles';

interface SendCoinButtonProps {
  isMobile: boolean;
}

const SendCoinButton: React.FC<SendCoinButtonProps> = ({ isMobile }) => {
    return (
            <View style={isMobile ? styles.sectionSP : styles.sectionPC}>
                <View style={styles.sectionImage}>
                    <Image
                        style={{ width: 24, height: 24, margin: 'auto' }}
                        source={require('@/assets/images/coin/iconC.png')}
                    />
                </View>
                <View style={styles.sectionTitle}>
                    <Text style={styles.title}>
                        コインを
                    </Text>
                    <Text style={styles.titleSub}>
                        贈る
                    </Text>
                </View>
            </View>
    );
}

export default SendCoinButton;