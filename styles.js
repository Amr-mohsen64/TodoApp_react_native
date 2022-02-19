import { StyleSheet } from 'react-native';

export const COLORS = { primary: "#004085", appBackGround: "#E6E6EC", white: '#FFF', danger: '#ED5E68', success: '#58B957' }
export const styles = StyleSheet.create({
    header: {
        padding: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        color: COLORS.appBackGround,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    inputContainer: {
        backgroundColor: COLORS.white,
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    iconContainer: {
        width: 70,
        height: 70,
        backgroundColor: COLORS.primary,
        borderRadius: 35,
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItem: {
        padding: 20,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10,
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: COLORS.primary
    },
    todoText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    actionIcon: {
        height: 35,
        width: 35,
        backgroundColor: 'green',
        marginLeft: 5,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noTodos: {
        padding: 20,
        fontSize: 20,
        backgroundColor: COLORS.danger,
        color: COLORS.white
    },
    message: {
        paddingHorizontal:20,
        color: COLORS.success,
        fontWeight:'bold'
    }
});