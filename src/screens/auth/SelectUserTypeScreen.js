import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
//constants
import {screenWidth, screenHeight} from '../../globalConstans/GlobalConstants';
import colors from '../../globalConstans/colors';

export default class selectUserTypeScreen extends Component {
  lookForServicesPress = () => {
    this.props.navigation.navigate('SignUpUserA');
  };
  offerServicesPress = () => {
    this.props.navigation.navigate('SignUpStepOne');
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginTop: 0.02 * screenHeight}} />
        {/* logo/header */}
        <Image
          style={styles.logo}
          source={require('../../assets/auth/landingScreen/logo.png')}
        />
        {/* I want to text */}
        <View style={{marginTop: 0.08 * screenHeight}} />
        <Text style={styles.iWantToText}>I want to:</Text>
        {/* offer/look for services */}
        <View style={{marginTop: 0.05 * screenHeight}} />
        {/* offer services */}
        <TouchableOpacity
          onPress={() => this.offerServicesPress()}
          style={[
            styles.offerServicesContainer,
            {backgroundColor: colors.theme},
          ]}>
          <Image
            style={styles.toolsImage}
            source={require('../../assets/auth/SelectUserTypeScreen/tools.png')}
          />
          <Text style={styles.offerServicesText}>OFFER SERVICES</Text>
          <Image
            style={styles.rightArrowImage}
            source={require('../../assets/auth/SelectUserTypeScreen/rightArrow.png')}
          />
        </TouchableOpacity>
        {/* look services */}
        <View style={{marginTop: 0.05 * screenHeight}} />
        <TouchableOpacity
          onPress={() => this.lookForServicesPress()}
          style={[
            styles.offerServicesContainer,
            {backgroundColor: colors.lightGrey},
          ]}>
          <Image
            style={styles.toolsImage}
            source={require('../../assets/auth/SelectUserTypeScreen/search.png')}
          />
          <Text style={styles.offerServicesText}>LOOK FOR SERVICES</Text>
          <Image
            style={styles.rightArrowImage}
            source={require('../../assets/auth/SelectUserTypeScreen/rightArrow.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.bottomBackground}
          source={require('../../assets/auth/loginScreen/bottomBackground.png')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginStart: 0.1 * screenWidth,
    width: 0.8 * screenWidth,
    height: 0.12 * screenWidth,
  },
  iWantToText: {
    fontSize: 0.032 * screenHeight,
    textAlign: 'center',
    color: colors.grey,
    fontFamily: 'Roboto-Medium',
  },
  offerServicesContainer: {
    width: 0.9 * screenWidth,
    height: 0.1 * screenHeight,
    marginStart: 0.05 * screenWidth,
    borderRadius: (0.1 * screenHeight) / 4,
    paddingStart: 0.04 * screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolsImage: {
    width: 0.05 * screenHeight,
    height: 0.05 * screenHeight,
  },
  offerServicesText: {
    fontSize: 0.061 * screenWidth,
    width: 0.64 * screenWidth,
    paddingStart: 0.06 * screenWidth,
    fontFamily: 'Roboto-Regular',
  },
  rightArrowImage: {
    height: 0.05 * screenHeight,
  },
  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    height: 0.2 * screenHeight,
    width: screenWidth,
  },
});
