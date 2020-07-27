import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
//constants
import colors from '../../../globalConstans/colors';
import { screenHeight, screeWidth } from '../../../globalConstans/GlobalConstants';

export default class SignUpStepThree extends Component {
    static navigationOptions = ({ navigation }) => {
        const onBackPress = navigation.getParam('onBackPress');
        return {
            title: 'Step 3 of 6',
            headerStyle: {
                backgroundColor: colors.theme,
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 0.024 * screenHeight,
            },
        };
    };

    render() {
        return (
            <SafeAreaView>
                <Text></Text>
            </SafeAreaView>
        )
    }
}
