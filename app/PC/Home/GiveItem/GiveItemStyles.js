import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    app: {
        flex: 3,
        paddingHorizontal: 65,
        backgroundColor: 'rgb(242, 244, 255)',
        paddingTop: 25,
    },
    mainItem: {
        flex: 1,
        maxWidth: "33.33%",
        borderRadius: 20,
        backgroundColor: 'white',
        height: 350,
        padding: 15,
        borderWidth: 10,
        borderColor: "rgb(242, 244, 255)",
    },
    arrow: {
        width: 25,
        height: 25,
    },
    sectionInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: '700',
    },
    avatarGive: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 15,
    },
    avatarUser: {
        width: 105,
        height: 105,
    },
    avatarCoin: {
        width: 48,
        height: 48,
    },
    avatarHand: {
        width: 47,
        height: 20,
    },
    times: {
        color: '#BDBDBD',
        fontSize: 12,
        fontWeight: 500,
    },
    description: {
        color: '#828282',
        fontSize: 14,
        fontWeight: 400,
        height: 70,
        marginTop: 15,
        marginBottom: 10,
    },
    sectionHeart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
        alignItems: 'center',
    },
    actionComment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
