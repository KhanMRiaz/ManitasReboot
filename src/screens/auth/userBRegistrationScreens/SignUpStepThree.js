import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
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

  constructor(props) {
    super(props);
    this.state = {
      Tallinn: '',
      Loksa: '',
      Maardu: '',
      Paldiski: '',
      Saue: '',
      Keila: '',
    };
    this.citySelected = false;
  }

  warningTextDecider = () => {
    if (
      this.state.Maardu === '' &&
      this.state.Tallinn === '' &&
      this.state.Loksa === '' &&
      this.state.Paldiski === '' &&
      this.state.Saue === '' &&
      this.state.Keila === ''
    ) {
      this.citySelected = false;
      return (
        <Text
          style={{
            color: 'red',
            fontSize: 0.018 * screenHeight,
            marginStart: 0.05 * screenWidth,
          }}>
          please select at least one city
        </Text>
      );
    } else {
      this.citySelected = true;
      return (
        <Text
          style={{
            color: 'transparent',
            fontSize: 0.018 * screenHeight,
            marginStart: 0.05 * screenWidth,
          }}>
          please select at least one city
        </Text>
      );
    }
  };
  nextButtonPress = () => {
    if (this.citySelected === true) {
      console.log('next press getting called');
    }
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{marginTop: 0.03 * screenHeight}} />
          <Text style={styles.generaText}>
            Please select at least one city where you can provide your service
          </Text>
          <View style={{marginTop: 0.05 * screenHeight}} />
          {/* cities */}
          <TouchableOpacity
            style={styles.flastlistRow}
            onPress={() =>
              this.setState({
                Tallinn: this.state.Tallinn === '' ? 'Tallinn' : '',
              })
            }>
            <Text
              style={{
                color: colors.grey,
                fontSize: 0.02 * screenHeight,
                fontWeight: '500',
              }}>
              Tallinn
            </Text>
            {this.state.Tallinn === 'Tallinn' ? (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
              />
            ) : (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flastlistRow}
            onPress={() =>
              this.setState({
                Loksa: this.state.Loksa === '' ? 'Loksa' : '',
              })
            }>
            <Text
              style={{
                color: colors.grey,
                fontSize: 0.02 * screenHeight,
                fontWeight: '500',
              }}>
              Loksa
            </Text>
            {this.state.Loksa === 'Loksa' ? (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
              />
            ) : (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flastlistRow}
            onPress={() =>
              this.setState({
                Maardu: this.state.Maardu === '' ? 'Maardu' : '',
              })
            }>
            <Text
              style={{
                color: colors.grey,
                fontSize: 0.02 * screenHeight,
                fontWeight: '500',
              }}>
              Maardu
            </Text>
            {this.state.Maardu === 'Maardu' ? (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
              />
            ) : (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flastlistRow}
            onPress={() =>
              this.setState({
                Paldiski: this.state.Paldiski === '' ? 'Paldiski' : '',
              })
            }>
            <Text
              style={{
                color: colors.grey,
                fontSize: 0.02 * screenHeight,
                fontWeight: '500',
              }}>
              Paldiski
            </Text>
            {this.state.Paldiski === 'Paldiski' ? (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
              />
            ) : (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flastlistRow}
            onPress={() =>
              this.setState({
                Saue: this.state.Saue === '' ? 'Saue' : '',
              })
            }>
            <Text
              style={{
                color: colors.grey,
                fontSize: 0.02 * screenHeight,
                fontWeight: '500',
              }}>
              Saue
            </Text>
            {this.state.Saue === 'Saue' ? (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
              />
            ) : (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flastlistRow}
            onPress={() =>
              this.setState({
                Keila: this.state.Keila === '' ? 'Keila' : '',
              })
            }>
            <Text
              style={{
                color: colors.grey,
                fontSize: 0.02 * screenHeight,
                fontWeight: '500',
              }}>
              Keila
            </Text>
            {this.state.Keila === 'Keila' ? (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
              />
            ) : (
              <Image
                source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
              />
            )}
          </TouchableOpacity>
          {/* next button */}
          <View style={{marginTop: 0.3 * screenHeight}} />
          {this.warningTextDecider()}
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
  generaText: {
    fontSize: 0.02 * screenHeight,
    color: colors.grey,
    alignSelf: 'center',
    marginHorizontal: 0.05 * screenWidth,
  },
  flastlistRow: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    height: 0.06 * screenHeight,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 0.05 * screenWidth,
    flexDirection: 'row',
    paddingBottom: 0.005 * screenHeight,
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
