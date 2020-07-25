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

export default class HomeScreenA extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Manitas',
      headerStyle: {
        backgroundColor: colors.theme,
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 0.024 * screenHeight,
      },
      headerLeft: () => (
        <Image
          style={{marginStart: 0.01 * screenWidth}}
          source={require('../../../assets/main/userA/menu.png')}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      serviceType: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.generalText}>What service do you need today</Text>
          {/* row 1 */}
          <View style={styles.flagsContainer}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.serviceType === 'electricity')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'electricity'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'electricity' ? (
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
                if (this.state.serviceType === 'plumbing')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'plumbing'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'plumbing' ? (
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
                if (this.state.serviceType === 'clickedHandyman')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'clickedHandyman'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'clickedHandyman' ? (
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
                if (this.state.serviceType === 'cleaning')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'cleaning'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'cleaning' ? (
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
                if (this.state.serviceType === 'movingService')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'movingService'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'movingService' ? (
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
                if (this.state.serviceType === 'painting')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'painting'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'painting' ? (
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
                if (this.state.serviceType === 'airConditioning')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'airConditioning'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'airConditioning' ? (
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
                if (this.state.serviceType === 'electricalDevices')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'electricalDevices'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'electricalDevices' ? (
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
                if (this.state.serviceType === 'carpenter')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'carpenter'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'carpenter' ? (
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
                if (this.state.serviceType === 'doorsAndWindows')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'doorsAndWindows'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'doorsAndWindows' ? (
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
                if (this.state.serviceType === 'homeWorks')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'homeWorks'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'homeWorks' ? (
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
                if (this.state.serviceType === 'upholstery')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'upholstery'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'upholstery' ? (
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
                if (this.state.serviceType === 'gardenAndOutdoors')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'gardenAndOutdoors'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'gardenAndOutdoors' ? (
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
                if (this.state.serviceType === 'lockSmith')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'lockSmith'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'lockSmith' ? (
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
                if (this.state.serviceType === 'others')
                  this.setState({serviceType: ''});
                else this.setState({serviceType: 'others'});
              }}
              style={styles.singleFlagContainer}>
              {this.state.serviceType === 'others' ? (
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
});
