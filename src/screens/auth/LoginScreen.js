import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
//contants imports
import { screenWidth, screenHeight } from '../../globalConstans/GlobalConstants';
import colors from '../../globalConstans/colors';
//api imports
import loginCall from '../../api/Login';
//Spinner
import CenterSpinner from '../../components/CenterSpinner';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      spinnerCount: 0,
    };
  }
  registerHerePress = () => {
    this.props.navigation.navigate('SelectUserTypeScreen');
  };
  loginButtonPress = async () => {
    if (this.state.email === '') Alert.alert('Oops', 'email cannot be empty!');
    else {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(this.state.email).toLowerCase())) {
        Alert.alert('Oops', 'Please enter a valid Email address');
      } else {
        if (this.state.password.length < 8)
          Alert.alert('Oops', 'password should be atleast 8 characters long!');
        else {
          this.setState({ spinnerCount: 1 });
          const res = await loginCall(this.state);
          this.setState({ spinnerCount: 0 });
          if (res.status === 200) this.props.navigation.navigate('MainStack');
        }
      }
    }
  };
  //spinner
  spinnerRendrer() {
    if (this.state.spinnerCount > 0) {
      return <CenterSpinner />;
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: 0.01 * screenHeight }} />
          {/* logo/header */}
          <Image
            style={styles.logo}
            source={require('../../assets/auth/landingScreen/manitas.png')}
          />
          {/* input fields */}
          <View style={{ marginTop: 0.1 * screenHeight }} />
          {/* email */}
          <Text style={styles.inputFieldsLabel}>Email</Text>
          <View style={{ marginTop: 0.005 * screenHeight }} />
          <TextInput
            style={styles.inputFields}
            placeholder={'Johndoeseryices@gmail.com'}
            placeholderTextColor={colors.lightGrey}
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
          />
          {/* password */}
          <View style={{ marginTop: 0.03 * screenHeight }} />
          <Text style={styles.inputFieldsLabel}>Password</Text>
          <View style={{ marginTop: 0.005 * screenHeight }} />
          <TextInput
            style={styles.inputFields}
            placeholder={'Password'}
            placeholderTextColor={colors.lightGrey}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          />
          {/* login Button */}
          <View style={{ marginTop: 0.05 * screenHeight }} />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.loginButtonPress()}>
            <Text style={{ fontSize: 0.022 * screenHeight, color: 'white' }}>
              Log In
            </Text>
          </TouchableOpacity>
          {/* forgot password */}
          <View style={{ marginTop: 0.02 * screenHeight }} />
          <Text style={styles.forgotPassword}>forgot password</Text>
          {/* bottom background Image  */}
          <View style={styles.absoluteContainer}>
            <Image
              style={styles.bottomBackground}
              source={require('../../assets/auth/loginScreen/bottomBackground.png')}
            />
            <Text
              style={styles.registerHereText}
              onPress={() => this.registerHerePress()}>
              New to Manitas? Register here
        </Text>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.absoluteContainer}>
          <Image
            style={styles.bottomBackground}
            source={require('../../assets/auth/loginScreen/bottomBackground.png')}
          />
          <Text
            style={styles.registerHereText}
            onPress={() => this.registerHerePress()}>
            New to Manitas? Register here
        </Text>
        </View>
        {this.spinnerRendrer()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginStart: 0.1 * screenWidth,
    width: 0.8 * screenWidth,
    height: 0.055 * screenHeight,
  },
  inputFields: {
    color: 'black',
    borderBottomWidth: 0.001 * screenHeight,
    borderBottomColor: colors.lightGrey,
    marginHorizontal: 0.05 * screenWidth,
    fontSize: 0.02 * screenHeight,
  },
  inputFieldsLabel: {
    marginStart: 0.05 * screenWidth,
    color: colors.grey,
    fontSize: 0.018 * screenHeight,
  },
  loginButton: {
    backgroundColor: colors.theme,
    marginHorizontal: 0.05 * screenWidth,
    height: 0.05 * screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (0.05 * screenHeight) / 4,
  },
  forgotPassword: {
    textAlign: 'center',
    color: colors.grey,
    textDecorationLine: 'underline',
  },
  bottomBackground: {
    height: 0.2 * screenHeight,
    width: screenWidth,
  },
  registerHereText: {
    color: 'white',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontSize: 0.018 * screenHeight,
    bottom: 0.07 * screenHeight
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0.77 * screenHeight
  }
});
