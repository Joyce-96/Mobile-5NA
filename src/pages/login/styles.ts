import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes"

export const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37
    },
    boxButton: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80
    },
    titulo: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    tituloInput: {
        marginLeft: 5,
        color: themes.colors.gray,
        marginTop: 20
    },
    boxInput: {
        backgroundColor: themes.colors.lightGray,
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderColor: themes.colors.lightGray
    },
    input: {
        height: '100%',
        width: '90%',
        paddingLeft: 7,
        borderRadius: 40
    },
    button: {
        width: 220,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: themes.colors.primary,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.40,
        shadowRadius: 4.50,
        elevation: 5,
    },
    textButton: {
        fontSize: 16,
        color: themes.colors.secondary
    },
    textSemConta: {
        fontSize: 16,
        color: themes.colors.gray
    },
    textCriarConta: {
        fontSize: 16,
        color: themes.colors.primary
    }
})