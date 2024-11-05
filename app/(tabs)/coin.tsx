import { Stack } from 'expo-router';
import { Button, Text, Image, StyleSheet } from 'react-native';
import { useState } from 'react';

function LogoTitle() {
    return (
        <Image style={styles.image_logo} source={require('@/assets/images/logo.png')} />
    );
}

function ImageBell() {
    return (
        <Image style={styles.image_bell} source={require('@/assets/images/bell-icon.png')} />
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
                    headerRight: props => <ImageBell {...props} />,

                }}
            />
            <Text>Count: {count}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    image_logo: {
        width: 238,
        height: 37,
    },
    image_bell: {
        width: 28,
        height: 33,
        marginRight: 10
    },
});
