import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
//constants
import colors from '../../../globalConstans/colors';
import {
  screenHeight,
  screenWidth,
} from '../../../globalConstans/GlobalConstants';

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
    this.state = {
      counter: 0,
      description: '',
    };
  }
  signUpButtonPress = () => {
    console.log('call api here');
  };

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.generalText}>
          Please tell about your services. We suggest you provide some basic
          information about your services such as availability and minimal
          charges
        </Text>
        {/* input counter */}
        <Text style={styles.counterText}>{this.state.counter}/500</Text>
        {/* input box */}
        <TextInput
          multiline={true}
          placeholder={
            'Hi, my name is john and I am plumbing technician in the residential home services industry...'
          }
          value={this.state.description}
          onChangeText={(text) =>
            this.setState({
              description: text,
              counter: this.state.description.length,
            })
          }
          editable={this.state.counter < 500 ? true : false}
          style={styles.descriptionBox}
        />
        {/* note text */}
        <View style={{marginTop: 0.05 * screenHeight}} />
        <Text style={styles.noteText}>
          By clicking Sign Up, you agree to our{' '}
          <Text style={{textDecorationLine: 'underline'}}>Terms</Text>
        </Text>
        <Text style={styles.noteText}>
          Learn how we collect, use and share your data in our{' '}
          <Text style={{textDecorationLine: 'underline'}}>data policy </Text>
          and how we use cookies and similar technology in our{' '}
          <Text style={{textDecorationLine: 'underline'}}>
            cookies policy
          </Text>{' '}
        </Text>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => this.signUpButtonPress()}>
          <Text style={{fontSize: 0.022 * screenHeight, color: 'white'}}>
            Next
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: 0.02 * screenHeight}} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  generalText: {
    marginTop: 0.1 * screenHeight,
    alignSelf: 'center',
    marginHorizontal: 0.05 * screenWidth,
    color: colors.grey,
    fontSize: 0.018 * screenHeight,
  },
  descriptionBox: {
    marginTop: 0.01 * screenHeight,
    marginHorizontal: 0.05 * screenWidth,
    height: 0.25 * screenHeight,
    borderWidth: 1.5,
    borderColor: colors.lightGrey,
    padding: 0.01 * screenHeight,
    textAlignVertical: 'top',
  },
  counterText: {
    alignSelf: 'flex-end',
    marginEnd: 0.05 * screenWidth,
    color: colors.grey,
    marginTop: 0.01 * screenHeight,
  },
  noteText: {
    textAlign: 'center',
    color: colors.grey,
    marginHorizontal: 0.05 * screenWidth,
    fontSize: 0.016 * screenHeight,
  },
  signUpButton: {
    marginTop: 0.22 * screenHeight,
    backgroundColor: colors.theme,
    marginHorizontal: 0.05 * screenWidth,
    height: 0.05 * screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (0.05 * screenHeight) / 4,
  },
});
