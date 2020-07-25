import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

//constants
import {screenWidth, screenHeight} from '../../globalConstans/GlobalConstants';
import colors from '../../globalConstans/colors';

export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlag: '',
      showWarning: false,
    };
  }

  nextButtonPress = () => {
    if (this.state.selectedFlag === '') {
      this.setState({showWarning: true});
    } else {
      this.props.navigation.navigate('LoginScreen');
    }
  };

  render() {
    return (
      <SafeAreaView>
        {/* logo */}
        <View style={{marginTop: 0.01 * screenHeight}} />
        <Image
          style={styles.logo}
          source={require('../../assets/auth/landingScreen/manitas.png')}
        />
        {/* instruction text */}
        <View style={{marginTop: 0.08 * screenHeight}} />
        <Text style={styles.instructionText}>
          Please select the language of the application
        </Text>
        {/* language flags */}
        <View style={{marginTop: 0.05 * screenHeight}} />
        <View style={styles.flagsContainer}>
          <TouchableOpacity
            onPress={() => this.setState({selectedFlag: 'spain'})}
            style={[
              styles.singleFlagContainer,
              {
                backgroundColor:
                  this.state.selectedFlag === 'spain'
                    ? colors.green
                    : colors.lightGrey,
              },
            ]}>
            <Image
              style={styles.flagsImage}
              source={require('../../assets/auth/landingScreen/spainFlag.png')}
            />
            <Text style={styles.flagText}>Espanol</Text>
          </TouchableOpacity>
          <View style={{marginStart: 0.02 * screenWidth}} />
          <TouchableOpacity
            onPress={() => this.setState({selectedFlag: 'english'})}
            style={[
              styles.singleFlagContainer,
              {
                backgroundColor:
                  this.state.selectedFlag === 'english'
                    ? colors.green
                    : colors.lightGrey,
              },
            ]}>
            <Image
              style={styles.flagsImage}
              source={require('../../assets/auth/landingScreen/englishFlag.jpg')}
            />
            <Text style={styles.flagText}>English</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 0.03 * screenHeight}} />
        <View style={styles.flagsContainer}>
          <TouchableOpacity
            onPress={() => this.setState({selectedFlag: 'estonia'})}
            style={[
              styles.singleFlagContainer,
              {
                backgroundColor:
                  this.state.selectedFlag === 'estonia'
                    ? colors.green
                    : colors.lightGrey,
              },
            ]}>
            <Image
              style={styles.flagsImage}
              source={require('../../assets/auth/landingScreen/estoniaFlag.png')}
            />
            <Text style={styles.flagText}>Eesti</Text>
          </TouchableOpacity>
          <View style={{marginStart: 0.02 * screenWidth}} />
          <TouchableOpacity
            onPress={() => this.setState({selectedFlag: 'russia'})}
            style={[
              styles.singleFlagContainer,
              {
                backgroundColor:
                  this.state.selectedFlag === 'russia'
                    ? colors.green
                    : colors.lightGrey,
              },
            ]}>
            <Image
              style={styles.flagsImage}
              source={require('../../assets/auth/landingScreen/russiaFlag.png')}
            />
            <Text style={styles.flagText}>Russian</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 0.05 * screenHeight}} />
        <Text style={styles.noteText}>
          Once you have selected the application language, it cannot be changed.
        </Text>
        <Text style={styles.noteText}>
          you will have to re-install the application.
        </Text>
        {/* next button */}
        <View style={{marginTop: 0.1 * screenHeight}} />
        {this.state.showWarning && (
          <Text style={{color: 'red', marginHorizontal: 0.06 * screenWidth}}>
            Please select the language of the application before clicking Save
          </Text>
        )}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => this.nextButtonPress()}>
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
  logo: {
    marginStart: 0.1 * screenWidth,
    width: 0.8 * screenWidth,
    height: 0.055 * screenHeight,
  },
  instructionText: {
    fontSize: 0.022 * screenHeight,
    marginHorizontal: 0.2 * screenWidth,
    color: colors.grey,
    textAlign: 'center',
  },
  flagsContainer: {
    flexDirection: 'row',
    marginStart: 0.04 * screenWidth,
  },
  singleFlagContainer: {
    paddingTop: 0.01 * screenHeight,
    width: 0.45 * screenWidth,
    height: 0.16 * screenHeight,
    alignItems: 'center',
    borderRadius: 5,
  },
  flagsImage: {
    width: 0.2 * screenWidth,
    height: 0.2 * screenWidth,
    borderRadius: (0.2 * screenHeight) / 2,
  },
  flagText: {
    marginTop: 0.01 * screenHeight,
    color: colors.grey,
    fontSize: 0.022 * screenHeight,
  },
  noteText: {
    marginHorizontal: 0.05 * screenWidth,
    textAlign: 'center',
    color: colors.grey,
    fontSize: 0.018 * screenHeight,
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
