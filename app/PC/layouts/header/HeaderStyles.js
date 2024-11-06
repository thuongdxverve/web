import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logoPC: {
        width: 200,
        height: 60,
    },
    titleMenu: {
        fontWeight: '700',
        color: 'rgba(15, 16, 60, 1)',
    },
    avatarLogoSP: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    pcSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 75,
        shadowColor: '#0A114D',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    pcItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pcItemActive: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(236, 238, 254, 1)',
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    pcPoints: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
    },
    avatarLogoAlertSP: {
        marginRight: 10,
    },
});
