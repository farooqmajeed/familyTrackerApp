import React, { Component } from 'react'
import * as NB from 'native-base';
import { StyleSheet, Text, Image, Dimensions, Platform, Date } from 'react-native';
// import { Constants } from 'expo';
// import Timestamp from 'react-timestamp';

const window = Dimensions.get('window');

class Dashboard extends Component {
    constructor(props) {
        super(props);
        // this.getNameToDisplay = this.getNameToDisplay.bind(this);
        // this.toTitleCase = this.toTitleCase.bind(this);
    }

    static navigationOptions = {
        title: 'Activity',
        headerTitleStyle: { alignSelf: 'center', marginLeft: -12 },
        // headerStyle: {
        //     height: Constants.statusBarHeight + (Platform.OS === "ios" ? 44 : 56),
        //     paddingTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight,
        // }
    };
    // componentDidMount() {
    //     this.props.ActivityRequest(this.props.login.user.data);
    // }
    /**
     * This function is Fetching the Name for Display
     */
    // getNameToDisplay(data) {
    //     if (data.payeeAccount && data.payeeAccount.businessInfo && data.payeeAccount.businessInfo.name) {
    //         return data.payeeAccount.businessInfo.name;
    //     } else if (data.payeeAccount && data.payeeAccount.personalInfo && data.payeeAccount.personalInfo.firstName) {
    //         return data.payeeAccount.personalInfo.firstName + " " + data.payeeAccount.personalInfo.lastName;
    //     } else if (data.payment && data.payment.payeeNoAccountInfo && data.payment.payeeNoAccountInfo.business && data.payment.payeeNoAccountInfo.business.name) {
    //         return data.payment.payeeNoAccountInfo.business.name;
    //     } else if (data.payment && data.payment.payeeNoAccountInfo && data.payment.payeeNoAccountInfo.firstName) {
    //         return data.payment.payeeNoAccountInfo.firstName + " " + data.payment.payeeNoAccountInfo.lastName;
    //     }
    // }

    /**
     * This function is Converting first letter of name 
     */
    // toTitleCase(str) {
    //     if (!str) return "";
    //     else
    //         return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    // }

    render() {
        // const { navigate } = this.props.navigation;
        // const { activities } = this.props.activities && this.props.activities ? this.props.activities : [];
        return (
            <NB.Container>
                <NB.Content>
                    <NB.Card style={styles.card}>
                        {activities ? activities.map((data, index) => {
                            return (
                                <NB.CardItem style={styles.cardItem} key={index}>
                                    {/* <Timestamp time={data.timeCreated/1000} component={Text} format='date'/> */}
                                    {/* <Text>{data.payment.status} </Text> */}
                                    <NB.CardItem style={styles.carditem2}>
                                        {/* <Text> {data.payment.payerAmount && data.payment.payerAmount.number ? data.payment.payerAmount.number : '0'}  {data.payment.payerAmount && data.payment.payerAmount.currency ? data.payment.payerAmount.currency : ""} </Text> */}
                                        <Text> Welcome to Family Tracker App </Text>
                                    </NB.CardItem>
                                </NB.CardItem>
                            )
                        }) : false}

                    </NB.Card>
                </NB.Content>
                <NB.Footer>
                    <NB.FooterTab style={styles.footerTab}>
                        <NB.Button vertical >
                            <NB.Icon active
                                style={styles.icon}
                                name="navigate" />
                            <Text>Activity</Text>
                        </NB.Button>
                        <NB.Button vertical onPress={() => navigate('Contact')} >
                            <NB.Icon
                                style={styles.icon}
                                name="person" />
                            <Text>Contact</Text>
                        </NB.Button>
                    </NB.FooterTab>
                </NB.Footer>
            </NB.Container >
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
        height: window.height * 1
    },
    card: {
        paddingTop: 10,
        width: window.width * 1,
        height: window.height * 1,
        alignSelf: 'center'
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#2962FF',
        width: window.width * 0.9,
        marginTop: '70%',
        alignSelf: 'center'
    },
    cardItem: {
        flexDirection: 'column',
        width: window.width * 0.95,
        alignSelf: 'center',
        alignItems: 'flex-start',
        borderColor: 'black',
        shadowOpacity: 10,
        shadowColor: 'grey',
        backgroundColor: '#EEEEEE',
        margin: 2
    },
    iconStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    carditem2: {
        flexDirection: 'column',
        backgroundColor: '#EEEEEE',
        position: 'absolute',
        right: 0,
        padding: 10,
        borderRadius: 10
    },
    footerTab: {
        backgroundColor: '#B0BEC5'
    },
    icon: {
        color: '#F5F5F5'
    }
});


export default Dashboard;