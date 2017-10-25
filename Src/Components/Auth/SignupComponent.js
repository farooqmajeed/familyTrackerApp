import React, { Component } from 'react'
import * as NB from 'native-base';
import { StyleSheet, Text, Image, Dimensions, Platform } from 'react-native';
// import { Constants } from 'expo'
const window = Dimensions.get('window');
import { NavigationActions } from 'react-navigation';


class SignUp extends Component {
    static navigationOptions = {
        title: 'Login',
        headerTitleStyle: { alignSelf: 'center' },
        // headerStyle: {
        //     height: Constants.statusBarHeight + (Platform.OS === "ios" ? 44 : 56),
        //     paddingTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight,
        // },
    };
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', showToast: false };
    }
    onButtonPress() {
        console.log("login", { username: this.state.username, password: this.state.password });
        if (!this.state.username || !this.state.password) {
            NB.Toast.show({
                text: 'Please insert Username and Password',
                position: 'bottom',
                buttonText: 'Okay'
            })
            //ToastAndroid.show('Please insert Username and Password', ToastAndroid.SHORT);
        } else {
            this.props.signUpRequest({ username: this.state.username, password: this.state.password });
        }
    }

    componentWillReceiveProps(newProps) {
        setTimeout(() => {
            if (newProps.login.isAuthenticated) {
                newProps.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Activity' })] }))
            }
        }, 5)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <NB.Container>
                <NB.Card style={styles.card}>
                    <NB.CardItem style={styles.cardItem}>
                        <NB.Item floatingLabel>
                            <NB.Label style={{ marginLeft: 10, color: 'black' }} >Username</NB.Label>
                            <NB.Input
                                onChangeText={(value) => this.setState({ username: value })}
                            />
                        </NB.Item>
                        <NB.Item floatingLabel>
                            <NB.Label style={{ marginLeft: 10, color: 'black' }} >Password</NB.Label>
                            <NB.Input
                                onChangeText={(value) => this.setState({ password: value })} secureTextEntry
                            />
                        </NB.Item>
                    </NB.CardItem>
                    {/* <NB.Button style={styles.button} onPress={() => navigate('Activity')} ><Text> SIGN IN </Text></NB.Button> */}
                    <NB.Button style={styles.button} onPress={() => this.onButtonPress()} ><Text> SignUp </Text></NB.Button>
                </NB.Card>
            </NB.Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 50,
        width: window.width * 1,
        height: window.height,
    },
    card: {
        paddingTop: 10,
        width: window.width * 1,
        height: window.height,
        alignSelf: 'center'
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#B0BEC5',
        width: window.width * 0.9,
        marginTop: '70%',
        alignSelf: 'center'
    },
    cardItem: {
        borderRadius: 10,
        flexDirection: 'column',
        width: window.width * 0.95,
        alignSelf: 'center',
        height: window.height * 0.25,
        // marginTop: 10
    }
});

export default SignUp;