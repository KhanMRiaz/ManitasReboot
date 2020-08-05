import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
//constants
import colors from '../../../globalConstans/colors';
import {
  screenWidth,
  screenHeight,
} from '../../../globalConstans/GlobalConstants';

export default class SignUpStepFour extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Step 5 of 6',
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
    const selectedCategories = this.props.navigation.getParam(
      'selectedCategories',
    );
    console.log('received: ', selectedCategories);
  }

  nextButtonPress = () => {
    console.log('navigate here!');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.generalText}>
            Please select atleast one sub-category for each category you support
          </Text>

          {/* next buttton */}
          <View style={{marginTop: 0.05 * screenHeight}} />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => this.nextButtonPress()}>
            <Text style={{fontSize: 0.022 * screenHeight, color: 'white'}}>
              Next
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  generalText: {
    fontSize: 0.018 * screenHeight,
    color: colors.grey,
    alignSelf: 'center',
    marginTop: 0.01 * screenHeight,
  },
  nextButton: {
    backgroundColor: colors.theme,
    marginHorizontal: 0.05 * screenWidth,
    height: 0.05 * screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (0.05 * screenHeight) / 4,
  },
});
