import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
//api imports
import userARegisterCall from '../../../api/UserARegister';
//spinner imports
import CenterSpinner from '../../../components/CenterSpinner';
//constants
import {
  screenWidth,
  screenHeight,
} from '../../../globalConstans/GlobalConstants';
import colors from '../../../globalConstans/colors';

export default class SignUpStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      spinnerCount: 0,
      workAs: '',
    };
  }

  _menu = null;

  //city
  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  //work as
  _menu1 = null;
  setMenuRef1 = (ref) => {
    this._menu1 = ref;
  };

  hideMenu1 = () => {
    this._menu1.hide();
  };

  showMenu1 = () => {
    this._menu1.show();
  };
  //spinner
  spinnerRendrer() {
    if (this.state.spinnerCount > 0) {
      return <CenterSpinner />;
    }
  }
  //signUpButtonPress
  signupButtonPress = async () => {
    //name validation
    if (this.state.name === '')
      Alert.alert('Oops', 'Name field cannot be empty!');
    else {
      var letters = /^[A-Za-z]+$/;
      if (/[^a-zA-Z]/.test(this.state.name))
        Alert.alert(
          'Oops',
          'Name fields cannot have numbers or special characters',
        );
      else {
        //email validation
        if (this.state.email === '')
          Alert.alert('Oops', 'Email field cannot be empty!');
        else {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(String(this.state.email).toLowerCase())) {
            Alert.alert('Oops', 'Please enter a valid Email address');
          } else {
            //password validation
            if (this.state.password === '')
              Alert.alert('Oops', 'Password field cannot be empty!');
            else {
              if (this.state.password.length < 8)
                Alert.alert(
                  'Oops',
                  'Password should have atleast 8 characters!',
                );
              else {
                //confirm password validation
                if (this.state.confirmPassword === '')
                  Alert.alert('Oops', 'Confirm password cannot be empty!');
                else {
                  if (this.state.password != this.state.confirmPassword)
                    Alert.alert('Oops', 'password does not match');
                  else {
                    // city validation
                    if (this.state.city === '')
                      Alert.alert('Oops', 'Please select city');
                    else {
                      if (this.state.workAs === '')
                        Alert.alert('Oops', 'Please select work type');
                      else {
                        this.props.navigation.navigate('SignUpStepTwo');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <KeyboardAwareScrollView>
          <View style={{marginTop: 0.02 * screenHeight}} />
          {/* logo/header */}
          <Image
            style={styles.logo}
            source={require('../../../assets/auth/landingScreen/logo.png')}
          />
          {/* input fields */}
          <View style={{marginTop: 0.1 * screenHeight}} />
          <Text style={styles.inputFieldsLabel}>Name</Text>
          <View style={{marginTop: 0.005 * screenHeight}} />
          <TextInput
            style={styles.inputFields}
            placeholder={'John'}
            value={this.state.name}
            onChangeText={(text) => this.setState({name: text})}
          />
          <View style={{marginTop: 0.04 * screenHeight}} />
          <Text style={styles.inputFieldsLabel}>Email</Text>
          <View style={{marginTop: 0.005 * screenHeight}} />
          <TextInput
            style={styles.inputFields}
            placeholder={'Johndoeseryices@gmail.com'}
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
          />
          <View style={{marginTop: 0.04 * screenHeight}} />
          <Text style={styles.inputFieldsLabel}>Password</Text>
          <View style={{marginTop: 0.005 * screenHeight}} />
          <TextInput
            style={styles.inputFields}
            placeholder={'Password'}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
          />
          <View style={{marginTop: 0.04 * screenHeight}} />
          <Text style={styles.inputFieldsLabel}>Confirm Password</Text>
          <View style={{marginTop: 0.005 * screenHeight}} />
          <TextInput
            style={styles.inputFields}
            placeholder={'Password'}
            secureTextEntry={true}
            value={this.state.confirmPassword}
            onChangeText={(text) => this.setState({confirmPassword: text})}
          />
          {/* /city */}
          <View style={{marginTop: 0.04 * screenHeight}} />
          <Text style={styles.inputFieldsLabel}>City</Text>
          <View style={{marginTop: 0.005 * screenHeight}} />

          <Menu
            style={{
              width: 0.9 * screenWidth,
              marginTop: 0.023 * screenHeight,
              marginStart: 0.03 * screenWidth,
            }}
            ref={this.setMenuRef}
            button={
              <View style={styles.dropdownFieldContainer}>
                <Text style={{fontSize: 0.02 * screenHeight}}>
                  {this.state.city}
                </Text>
                <TouchableOpacity onPress={this.showMenu}>
                  <Image
                    style={{
                      width: 0.043 * screenWidth,
                      height: 0.02 * screenWidth,
                    }}
                    source={require('../../../assets/auth/userARegistrationScreens/downArrow.png')}
                  />
                </TouchableOpacity>
              </View>
            }>
            <MenuItem
              style={{height: 0.06 * screenHeight}}
              onPress={() => {
                this.setState({city: 'Tallinn'}, this.hideMenu);
              }}>
              Tallinn
            </MenuItem>
            <View style={styles.dividerStyles} />
            <MenuItem
              style={{height: 0.06 * screenHeight}}
              onPress={() => {
                this.setState({city: 'Loksa'}, this.hideMenu);
              }}>
              Loksa
            </MenuItem>
            <View style={styles.dividerStyles} />
            <MenuItem
              style={{height: 0.06 * screenHeight}}
              onPress={() => {
                this.setState({city: 'Maardu'}, this.hideMenu);
              }}>
              Maardu
            </MenuItem>
            <View style={styles.dividerStyles} />
            <MenuItem
              style={{height: 0.06 * screenHeight}}
              onPress={() => {
                this.setState({city: 'Paldiski'}, this.hideMenu);
              }}>
              Paldiski
            </MenuItem>
            <View style={styles.dividerStyles} />
            <MenuItem
              style={{height: 0.06 * screenHeight}}
              onPress={() => {
                this.setState({city: 'Saue'}, this.hideMenu);
              }}>
              Saue
            </MenuItem>
            <View style={styles.dividerStyles} />
            <MenuItem
              style={{height: 0.06 * screenHeight}}
              onPress={() => {
                this.setState({city: 'Keila'}, this.hideMenu);
              }}>
              Keila
            </MenuItem>
            <View style={styles.dividerStyles} />
          </Menu>
          {/* i work as  */}
          <View style={{marginTop: 0.04 * screenHeight}} />
          <Text style={styles.inputFieldsLabel}>I work as</Text>
          <View style={{marginTop: 0.005 * screenHeight}} />

          <Menu
            style={{
              width: 0.9 * screenWidth,
              marginTop: 0.023 * screenHeight,
              marginStart: 0.03 * screenWidth,
            }}
            ref={this.setMenuRef1}
            button={
              <View style={styles.dropdownFieldContainer}>
                <Text style={{fontSize: 0.02 * screenHeight}}>
                  {this.state.workAs}
                </Text>
                <TouchableOpacity onPress={this.showMenu1}>
                  <Image
                    style={{
                      width: 0.043 * screenWidth,
                      height: 0.02 * screenWidth,
                    }}
                    source={require('../../../assets/auth/userARegistrationScreens/downArrow.png')}
                  />
                </TouchableOpacity>
              </View>
            }>
            <MenuItem
              style={{height: 0.06 * screenHeight}}
              onPress={() => {
                this.setState({workAs: 'Private'}, this.hideMenu1);
              }}>
              Private
            </MenuItem>
            <View style={styles.dividerStyles} />
            <MenuItem
              style={{height: 0.06 * screenHeight}}
              onPress={() => {
                this.setState({workAs: 'Company'}, this.hideMenu1);
              }}>
              Company
            </MenuItem>
            <View style={styles.dividerStyles} />
          </Menu>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.signupButtonPress()}>
            <Text style={{fontSize: 0.022 * screenHeight, color: 'white'}}>
              Next
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: 0.02 * screenHeight}} />
        </KeyboardAwareScrollView>
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
    borderBottomColor: colors.inputFieldsBorder,
    marginHorizontal: 0.05 * screenWidth,
    fontSize: 0.02 * screenHeight,
  },
  inputFieldsLabel: {
    marginStart: 0.05 * screenWidth,
    color: colors.grey,
    fontSize: 0.018 * screenHeight,
  },
  dropdownFieldContainer: {
    flexDirection: 'row',
    marginHorizontal: 0.05 * screenWidth,
    borderBottomWidth: 0.001 * screenHeight,
    borderBottomColor: colors.inputFieldsBorder,
    justifyContent: 'space-between',
  },
  noteText: {
    textAlign: 'center',
    color: colors.grey,
    marginHorizontal: 0.05 * screenWidth,
    fontSize: 0.029 * screenWidth,
    fontFamily: 'Roboto-Regular',
  },
  signupButton: {
    backgroundColor: colors.theme,
    marginHorizontal: 0.05 * screenWidth,
    height: 0.05 * screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (0.05 * screenHeight) / 4,
    marginTop: 0.17 * screenHeight,
  },
  dividerStyles: {
    height: 0.0008 * screenHeight,
    width: 0.9 * screenWidth,
    backgroundColor: 'gray',
  },
});
