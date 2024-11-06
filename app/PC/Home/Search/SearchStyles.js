import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    sectionInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        alignItems: 'center',
        paddingHorizontal: 72,
    },
    yourMoney: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleCoin: {
        fontSize: 24,
        fontWeight: 700,
        color: 'black',
        marginRight: 15,
    },
    titleTypeCoin: {
        fontSize: 14,
        fontWeight: 700,
        color: 'rgba(34, 49, 186, 1)',
        marginRight: 5,
    },

    sectionSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#0058F0',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 7,
    },
    sectionText : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: '#0058F0',
        marginRight: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        height: 35,
        width: 310,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'rgba(221, 221, 221, 1)',
        borderWidth: 1,
        borderRadius: 4,
        flex: 1,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    iconSearch: {
        marginRight: 5,
    }
});
