import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
//constants
import colors from '../../../globalConstans/colors';
import {
  screenHeight,
  screenWidth,
} from '../../../globalConstans/GlobalConstants';

export default class SignUpStepThree extends Component {
  static navigationOptions = ({navigation}) => {
    const onBackPress = navigation.getParam('onBackPress');
    return {
      title: (
        <View
          style={{
            width: 0.7 * screenWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              marginEnd: 0.05 * screenWidth,
              fontSize: 0.024 * screenHeight,
              fontFamily: 'Roboto-Regular',
            }}>
            Step 6 of 6
          </Text>
        </View>
      ),
      headerLeft: (
        <TouchableOpacity
          style={{
            width: 0.1 * screenWidth,
            height: 0.1 * screenWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={navigation.getParam('backPress')}>
          <Image
            style={{
              height: 0.02016 * screenHeight,
              width: 0.012 * screenHeight,
            }}
            source={require('../../../assets/Slider.png')}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: colors.theme,
      },
      headerTitleStyle: {
        fontFamily: 'Roboto-Regular',
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
  componentDidMount() {
    this.props.navigation.setParams({backPress: this.backPress});
  }
  backPress = () => {
    console.log('backgetting called:');
    this.props.navigation.goBack();
  };
  signUpButtonPress = () => {
    console.log('call api here');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
          <TouchableOpacity>
            <Text
              style={[
                styles.noteText,
                {marginHorizontal: 0, textDecorationLine: 'underline'},
              ]}>
              Terms
            </Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.noteText}>
          Learn how we collect, use and share your data in our{' '}
          <TouchableOpacity>
            <Text
              style={[
                styles.noteText,
                {marginHorizontal: 0, textDecorationLine: 'underline'},
              ]}>
              Data Policy{' '}
            </Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.noteText}>
          and how we use cookies and similar technology in our{' '}
          <TouchableOpacity>
            <Text
              style={[
                styles.noteText,
                {marginHorizontal: 0, textDecorationLine: 'underline'},
              ]}>
              Cookies Policy
            </Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => this.signUpButtonPress()}>
          <Text style={{fontSize: 0.024 * screenHeight, color: 'white'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: 0.02 * screenHeight}} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  generalText: {
    marginTop: 0.08 * screenHeight,
    alignSelf: 'center',
    marginHorizontal: 0.05 * screenWidth,
    color: colors.grey,
    fontSize: 0.018 * screenHeight,
    fontFamily: 'Roboto-Regular',
  },
  descriptionBox: {
    marginTop: 0.01 * screenHeight,
    marginHorizontal: 0.05 * screenWidth,
    width: 0.9 * screenWidth,
    height: 0.8 * screenWidth,
    borderWidth: 1.5,
    borderColor: colors.lightGrey,
    padding: 0.01 * screenHeight,
    textAlignVertical: 'top',
    fontFamily: 'Roboto-Regular',
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
    fontSize: 0.029 * screenWidth,
    fontFamily: 'Roboto-Regular',
  },
  signUpButton: {
    marginTop: 0.08 * screenHeight,
    backgroundColor: colors.theme,
    marginHorizontal: 0.05 * screenWidth,
    height: 0.05 * screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (0.05 * screenHeight) / 4,
  },
});
