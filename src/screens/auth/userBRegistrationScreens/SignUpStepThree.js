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
            Step 3 of 6
          </Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: colors.theme,
      },
      headerTitleStyle: {
        fontFamily: 'Roboto-Regular',
      },
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

  componentDidMount() {
    this.props.navigation.setParams({backPress: this.backPress});
  }
  backPress = () => {
    console.log('backgetting called:');
    this.props.navigation.goBack();
  };

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
            marginStart: 0.06 * screenWidth,
            fontFamily: 'Roboto-Regular',
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
      this.props.navigation.navigate('SignUpStepFour');
    }
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{marginTop: 0.03 * screenHeight}} />
          <Text style={styles.generaText}>Please select at least one city</Text>
          <Text style={styles.generaText}>
            where you can provide your service
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
            <Text style={styles.checkboxLabel}>Tallinn</Text>
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
            <Text style={styles.checkboxLabel}>Loksa</Text>
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
            <Text style={styles.checkboxLabel}>Maardu</Text>
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
            <Text style={styles.checkboxLabel}>Paldiski</Text>
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
            <Text style={styles.checkboxLabel}>Saue</Text>
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
            <Text style={styles.checkboxLabel}>Keila</Text>
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
          <View style={{marginTop: 0.28 * screenHeight}} />
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
  },
  checkboxLabel: {
    color: colors.grey,
    fontSize: 0.02 * screenHeight,
    fontWeight: '500',
    marginBottom: '1%',
  },
});
