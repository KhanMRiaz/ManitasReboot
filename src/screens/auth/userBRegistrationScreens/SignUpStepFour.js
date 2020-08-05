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
      title: 'Step 4 of 6',
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
      selectedCategories: [],
      //categories used in selected and in next screen
      electricity: '',
      plumbing: '',
      handyman: '',
      cleaning: '',
      movingService: '',
      painting: '',
      airConditioning: '',
      electricalDevices: '',
      carpenter: '',
      doorsAndWindows: '',
      homeWorks: '',
      upholstery: '',
      gardenAndOutdoors: '',
      lockSmith: '',
      others: '',
    };
  }
  warningTextDecider = () => {
    if (this.state.selectedCategories.length === 0) {
      return (
        <Text
          style={{
            color: 'red',
            fontSize: 0.018 * screenHeight,
            marginStart: 0.05 * screenWidth,
          }}>
          please select at least one category
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: 'transparent',
            fontSize: 0.018 * screenHeight,
            marginStart: 0.05 * screenWidth,
          }}>
          please select at least one category
        </Text>
      );
    }
  };
  nextButtonPress = () => {
    if (this.state.selectedCategories.length > 0) {
      this.props.navigation.navigate('SignUpStepFive', {
        selectedCategories: this.state.selectedCategories,
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.generalText}>What service do you need today</Text>
          {/* row 1 */}
          <View style={styles.flagsContainer}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.electricity === 'electricity') {
                  this.setState({electricity: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('electricity'),
                    1,
                  );
                } else {
                  this.setState({electricity: 'electricity'});
                  this.state.selectedCategories.push('electricity');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.electricity === 'electricity' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedElectricity.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/electricity.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.plumbing === 'plumbing') {
                  this.setState({plumbing: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('plumbing'),
                    1,
                  );
                } else {
                  this.setState({plumbing: 'plumbing'});
                  this.state.selectedCategories.push('plumbing');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.plumbing === 'plumbing' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedPlumbing.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/plumbing.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.handyman === 'handyman') {
                  this.setState({handyman: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('handyman'),
                    1,
                  );
                } else {
                  this.setState({handyman: 'handyman'});
                  this.state.selectedCategories.push('handyman');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.handyman === 'handyman' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedHandyman.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/handyman.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* row 2 */}
          <View style={styles.flagsContainer}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.cleaning === 'cleaning') {
                  this.setState({cleaning: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('cleaning'),
                    1,
                  );
                } else {
                  this.setState({cleaning: 'cleaning'});
                  this.state.selectedCategories.push('cleaning');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.cleaning === 'cleaning' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedCleaning.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/cleaning.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.movingService === 'movingService') {
                  this.setState({movingService: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('movingService'),
                    1,
                  );
                } else {
                  this.setState({movingService: 'movingService'});
                  this.state.selectedCategories.push('movingService');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.movingService === 'movingService' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedMovingService.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/movingService.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.painting === 'painting') {
                  this.setState({painting: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('painting'),
                    1,
                  );
                } else {
                  this.setState({painting: 'painting'});
                  this.state.selectedCategories.push('painting');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.painting === 'painting' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedPainting.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/painting.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* row 3 */}
          <View style={styles.flagsContainer}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.airConditioning === 'airConditioning') {
                  this.setState({airConditioning: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('airConditioning'),
                    1,
                  );
                } else {
                  this.setState({airConditioning: 'airConditioning'});
                  this.state.selectedCategories.push('airConditioning');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.airConditioning === 'airConditioning' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedAirConditioning.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/airConditioning.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.electricalDevices === 'electricalDevices') {
                  this.setState({electricalDevices: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('electricalDevices'),
                    1,
                  );
                } else {
                  this.setState({electricalDevices: 'electricalDevices'});
                  this.state.selectedCategories.push('electricalDevices');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.electricalDevices === 'electricalDevices' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedElectricalDevices.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/electricalDevices.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.carpenter === 'carpenter') {
                  this.setState({carpenter: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('carpenter'),
                    1,
                  );
                } else {
                  this.setState({carpenter: 'carpenter'});
                  this.state.selectedCategories.push('carpenter');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.carpenter === 'carpenter' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedCarpenter.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/carpenter.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* row 4 */}
          <View style={styles.flagsContainer}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.doorsAndWindows === 'doorsAndWindows') {
                  this.setState({doorsAndWindows: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('doorsAndWindows'),
                    1,
                  );
                } else {
                  this.setState({doorsAndWindows: 'doorsAndWindows'});
                  this.state.selectedCategories.push('doorsAndWindows');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.doorsAndWindows === 'doorsAndWindows' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedDoorsAndWindows.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/doorsAndWindows.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.homeWorks === 'homeWorks') {
                  this.setState({homeWorks: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('homeWorks'),
                    1,
                  );
                } else {
                  this.setState({homeWorks: 'homeWorks'});
                  this.state.selectedCategories.push('homeWorks');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.homeWorks === 'homeWorks' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedHomeWorks.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/homeWorks.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.upholstery === 'upholstery') {
                  this.setState({upholstery: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('upholstery'),
                    1,
                  );
                } else {
                  this.setState({upholstery: 'upholstery'});
                  this.state.selectedCategories.push('upholstery');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.upholstery === 'upholstery' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedUpholstery.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/upholstery.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* row 5 */}
          <View style={styles.flagsContainer}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.gardenAndOutdoors === 'gardenAndOutdoors') {
                  this.setState({gardenAndOutdoors: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('gardenAndOutdoors'),
                    1,
                  );
                } else {
                  this.setState({gardenAndOutdoors: 'gardenAndOutdoors'});
                  this.state.selectedCategories.push('gardenAndOutdoors');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.gardenAndOutdoors === 'gardenAndOutdoors' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedGardenAndOutdoors.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/gardenAndOutdoors.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.lockSmith === 'lockSmith') {
                  this.setState({lockSmith: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('lockSmith'),
                    1,
                  );
                } else {
                  this.setState({lockSmith: 'lockSmith'});
                  this.state.selectedCategories.push('lockSmith');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.lockSmith === 'lockSmith' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedLockSmith.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/lockSmith.png')}
                />
              )}
            </TouchableOpacity>
            <View style={{marginStart: 0.02 * screenWidth}} />
            <TouchableOpacity
              onPress={() => {
                if (this.state.others === 'others') {
                  this.setState({others: ''});
                  this.state.selectedCategories.splice(
                    this.state.selectedCategories.indexOf('others'),
                    1,
                  );
                } else {
                  this.setState({others: 'others'});
                  this.state.selectedCategories.push('others');
                }
              }}
              style={styles.singleFlagContainer}>
              {this.state.others === 'others' ? (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/clicked/clickedOthers.png')}
                />
              ) : (
                <Image
                  style={styles.flagsImage}
                  source={require('../../../assets/main/userA/homeScreen/unclicked/others.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* next buttton */}
          <View style={{marginTop: 0.05 * screenHeight}} />
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
  generalText: {
    fontSize: 0.018 * screenHeight,
    color: colors.grey,
    alignSelf: 'center',
    marginTop: 0.01 * screenHeight,
  },
  flagsContainer: {
    flexDirection: 'row',
    marginStart: 0.04 * screenWidth,
  },
  singleFlagContainer: {
    paddingTop: 0.01 * screenHeight,
    width: 0.3 * screenWidth,
    height: 0.3 * screenWidth,
    alignItems: 'center',
    borderRadius: 5,
  },
  flagsImage: {
    height: 0.3 * screenWidth,
    width: 0.3 * screenWidth,
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
