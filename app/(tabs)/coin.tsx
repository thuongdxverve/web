import {Stack} from 'expo-router';
import {Button, Text, View, Image, StyleSheet, ScrollView, Platform} from 'react-native';
import {useState} from 'react';
import {ThemedView} from "@/components/ThemedView";
import {FontAwesome, Ionicons} from "@expo/vector-icons";

function LogoTitle() {
    return (
        <Image style={styles.image_logo} source={require('@/assets/images/common/logo.png')}/>
    );
}

function BellImage() {
    return (
        <Image style={styles.image_bell} source={require('@/assets/images/common/bell-icon.png')}/>
    );
}

function AvatarImage() {
    return (
        <Image style={styles.image_avatar} source={require('@/assets/images/common/avatar.png')}/>
    );
}

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: props => <LogoTitle {...props} />,
                    headerTitleAlign: "center",
                    headerRight: props => <BellImage {...props} />,
                    headerLeft: props => <AvatarImage {...props} />,

                }}
            />

            <ScrollView style={{backgroundColor: 'white', paddingTop: 15}}>
                <View style={{  flexDirection: "row", flexWrap: "wrap", alignItems:'center' }}>
                    <Text style={{marginRight: 5, fontSize: 20, fontWeight: 'bold'}}>コイン</Text>
                    <Text style={{marginRight: 5, fontSize: 16,fontWeight: 'bold', color: 'rgb(12 12 162)'}}>コインの種類について</Text>
                    <Image style={{ width: 23,height: 23,}} source={require('@/assets/images/common/question_mark.png')}/>
                    <Image style={{ width: 25, height: 25, position: 'absolute', right: 10}} source={require('@/assets/images/common/search_icon.png')}/>
                </View>
            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    image_logo: {
        width: 238,
        height: 37,
    },
    image_bell: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    image_avatar: {
        width: 40,
        height: 40,
        marginLeft: 10,
        borderRadius: 10,
    },

});
