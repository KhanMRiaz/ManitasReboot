import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
//constants
import colors from '../../../globalConstans/colors';
import {screenHeight} from '../../../globalConstans/GlobalConstants';

export default class SignUpStepThree extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Step 6 of 6',
      headerStyle: {
        backgroundColor: colors.theme,
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 0.024 * screenHeight,
      },
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>step 6 screen</Text>
      </SafeAreaView>
    );
  }
}
