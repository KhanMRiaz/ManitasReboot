import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
//constants
import colors from '../../../globalConstans/colors';
import {
  screenHeight,
  screenWidth,
} from '../../../globalConstans/GlobalConstants';

export default class SignUpStepTwo extends Component {
  static navigationOptions = ({navigation}) => {
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
            Step 2 of 6
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
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      Eesti: '',
      English: '',
      Español: '',
      Català: '',
      Русский: '',
      Українська: '',
      Deutsch: '',
      Français: '',
    };
    this.languageSelected = false;
  }
  componentDidMount() {
    this.props.navigation.setParams({backPress: this.backPress});
  }
  backPress = () => {
    console.log('backgetting called:');
    this.props.navigation.goBack();
  };
  warningTextDecider = () => {
    if (
      this.state.Español === '' &&
      this.state.Eesti === '' &&
      this.state.English === '' &&
      this.state.Català === '' &&
      this.state.Русский === '' &&
      this.state.Українська === '' &&
      this.state.Deutsch === '' &&
      this.state.Français === ''
    ) {
      this.languageSelected = false;
      return (
        <Text
          style={{
            color: 'red',
            fontSize: 0.018 * screenHeight,
            marginStart: 0.06 * screenWidth,
            fontFamily: 'Roboto-Regular',
          }}>
          please select at least one language
        </Text>
      );
    } else {
      this.languageSelected = true;
      return (
        <Text
          style={{
            color: 'transparent',
            fontSize: 0.018 * screenHeight,
            marginStart: 0.05 * screenWidth,
          }}>
          please select at least one language
        </Text>
      );
    }
  };
  nextButtonPress = () => {
    if (this.languageSelected === true) {
      this.props.navigation.navigate('SignUpStepThree');
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{marginTop: 0.03 * screenHeight}} />
          <Text style={styles.generaText}>
            Please select at least one language
          </Text>
          <Text style={styles.generaText}>
            you can communicate with customers
          </Text>
          <View style={{marginTop: 0.05 * screenHeight}} />
          {/* cities */}
          <TouchableOpacity
            style={styles.flastlistRow}
            onPress={() =>
              this.setState({Eesti: this.state.Eesti === '' ? 'Eesti' : ''})
            }>
            <Text style={styles.checkboxLabel}>Eesti</Text>
            {this.state.Eesti === 'Eesti' ? (
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
                English: this.state.English === '' ? 'English' : '',
              })
            }>
            <Text style={styles.checkboxLabel}>English</Text>
            {this.state.English === 'English' ? (
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
                Español: this.state.Español === '' ? 'Español' : '',
              })
            }>
            <Text style={styles.checkboxLabel}>Español</Text>
            {this.state.Español === 'Español' ? (
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
              this.setState({Català: this.state.Català === '' ? 'Català' : ''})
            }>
            <Text style={styles.checkboxLabel}>Català</Text>
            {this.state.Català === 'Català' ? (
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
                Русский: this.state.Русский === '' ? 'Русский' : '',
              })
            }>
            <Text style={styles.checkboxLabel}>Русский</Text>
            {this.state.Русский === 'Русский' ? (
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
                Українська: this.state.Українська === '' ? 'Українська' : '',
              })
            }>
            <Text style={styles.checkboxLabel}>Українська</Text>
            {this.state.Українська === 'Українська' ? (
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
                Deutsch: this.state.Deutsch === '' ? 'Deutsch' : '',
              })
            }>
            <Text style={styles.checkboxLabel}>Deutsch</Text>
            {this.state.Deutsch === 'Deutsch' ? (
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
                Français: this.state.Français === '' ? 'Français' : '',
              })
            }>
            <Text style={styles.checkboxLabel}>Français</Text>
            {this.state.Français === 'Français' ? (
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
          <View style={{marginTop: 0.15 * screenHeight}} />
          {this.warningTextDecider()}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => this.nextButtonPress()}>
            <Text style={{fontSize: 0.024 * screenHeight, color: 'white'}}>
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
    fontFamily: 'Roboto-Regular',
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
    marginBottom: '1%',
  },
  nextButton: {
    backgroundColor: colors.theme,
    marginHorizontal: 0.05 * screenWidth,
    height: 0.05 * screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (0.05 * screenHeight) / 4,
    marginBottom: 0.02 * screenHeight,
  },
  checkboxLabel: {
    color: colors.grey,
    fontSize: 0.02 * screenHeight,
    fontWeight: '500',
    marginBottom: '1%',
  },
});
