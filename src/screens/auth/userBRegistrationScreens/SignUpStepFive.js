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
            Step 5 of 6
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
    this.selectedCategories = this.props.navigation.getParam(
      'selectedCategories',
    );
    console.log('received: ', this.selectedCategories);
    this.state = {
      showWarning: false,
      allowNavigate: false,
      cleaningSubcategories: ['home', 'office', 'industrial', 'hotelOrRental'],
      airConditioningSubcategories: [
        'acInstallation',
        'acMaintenanceOrRepair',
        'heatingInstallation',
        'heatingMaintenanceOrRepair',
      ],
      handymanSubcategories: [
        'furnitureAssembly',
        'smallRepairs',
        'hangingShelfOrTv',
      ],
      plumbingSubcategories: [
        'installOrRepairPlumbing',
        'wcInstallationOrRepairs',
        'unclogPipes',
        'changeBathtubForShower',
        'sinkOrFaucetInstallationAndRepairs',
        'generalPlumbingServices',
        'other',
      ],
      electricitySubcategories: [
        'installOutletsOrLightFixtures',
        'generalElectricityIssues',
        'restoreElectricity',
        'installConventionalOrLEDLighting',
        'installOrRepairCentralElectricalPanel',
        'otherElectricalInstallations',
      ],
      movingServiceSubcategories: [
        'smallVans',
        'bigVansOrTrucks',
        'platformsElevation',
        'fullMoving',
        'storageServices',
      ],
      paintingSubcategories: [
        'paintingInside',
        'paintingOutside',
        'applyOrRemoveTexturePainting',
        'applyOrRemoveWallpapers',
        'bathtubReglazing',
      ],
      electricalDevicesSubcategories: [
        'fridgeRepair',
        'washingMachineRepair',
        'ovenRepair',
        'dishwasherRepair',
        'otherLargeAppliancesRepair',
        'smallAppliancesRepair',
        'smallElectronicsRepair',
        'antennasInstallationOrRepair',
        'otherElectricalDevicesRepair',
      ],
      carpenterSubcategories: [
        'woodCarpentry',
        'aluminiumCarpentry',
        'otherMetalCarpentry',
        'pvcCarpentry',
        'furnitureRepairs',
        'oldFurnitureRestoration',
      ],
      lockSmithSubcategories: [
        'lockInstallation',
        'lockRepair',
        'openALockedDoorUrgent',
      ],
      homeWorksSubcategories: [
        'completeRepair',
        'kitchen',
        'bathroom',
        'terraceOrOutside',
        'roofWorks',
        'floorWorks',
        'surfaceWorks',
        'tiles',
        'buildOrRemoveWalls',
        'apartmentBuildingsRepairs',
      ],
      doorsAndWindowsSubcategories: [
        'woodenDoorsAndWindows',
        'aluminiumDoorsAndWindows',
        'plasticDoorsAndWindows',
        'glazier',
        'blindsAndShadesInstallationOrRepair',
      ],
      upholsterySubcategoreis: [
        'smallFurniture',
        'bigFurniture',
        'furnitureRepairs',
        'furnitureRestoration',
      ],
      //all subcategories
      //cleaning
      home: 'home',
      office: 'office',
      industrial: 'industrial',
      hotelOrRental: 'hotelOrRental',
      //airConditioning
      acInstallation: 'acInstallation',
      acMaintenanceOrRepair: 'acMaintenanceOrRepair',
      heatingInstallation: 'heatingInstallation',
      heatingMaintenanceOrRepair: 'heatingMaintenanceOrRepair',
      //handyman
      furnitureAssembly: 'furnitureAssembly',
      smallRepairs: 'smallRepairs',
      hangingShelfOrTv: 'hangingShelfOrTv',
      //plumbing
      installOrRepairPlumbing: 'installOrRepairPlumbing',
      wcInstallationOrRepairs: 'wcInstallationOrRepairs',
      unclogPipes: 'unclogPipes',
      changeBathtubForShower: 'changeBathtubForShower',
      sinkOrFaucetInstallationAndRepairs: 'sinkOrFaucetInstallationAndRepairs',
      generalPlumbingServices: 'generalPlumbingServices',
      other: 'other',
      //electricity
      installOutletsOrLightFixtures: 'installOutletsOrLightFixtures',
      generalElectricityIssues: 'generalElectricityIssues',
      restoreElectricity: 'restoreElectricity',
      installConventionalOrLEDLighting: 'installConventionalOrLEDLighting',
      installOrRepairCentralElectricalPanel:
        'installOrRepairCentralElectricalPanel',
      otherElectricalInstallations: 'otherElectricalInstallations',
      //movingService
      smallVans: 'smallVans',
      bigVansOrTrucks: 'bigVansOrTrucks',
      platformsElevation: 'platformsElevation',
      fullMoving: 'fullMoving',
      storageServices: 'storageServices',
      //painting
      paintingInside: 'paintingInside',
      paintingOutside: 'paintingOutside',
      applyOrRemoveTexturePainting: 'applyOrRemoveTexturePainting',
      applyOrRemoveWallpapers: 'applyOrRemoveWallpapers',
      bathtubReglazing: 'bathtubReglazing',
      //electricalDevices
      fridgeRepair: 'fridgeRepair',
      washingMachineRepair: 'washingMachineRepair',
      ovenRepair: 'ovenRepair',
      dishwasherRepair: 'dishwasherRepair',
      otherLargeAppliancesRepair: 'otherLargeAppliancesRepair',
      smallAppliancesRepair: 'smallAppliancesRepair',
      smallElectronicsRepair: 'smallElectronicsRepair',
      antennasInstallationOrRepair: 'antennasInstallationOrRepair',
      otherElectricalDevicesRepair: 'otherElectricalDevicesRepair',
      //carpenter
      woodCarpentry: 'woodCarpentry',
      aluminiumCarpentry: 'aluminiumCarpentry',
      otherMetalCarpentry: 'otherMetalCarpentry',
      pvcCarpentry: 'pvcCarpentry',
      furnitureRepairs: 'furnitureRepairs',
      oldFurnitureRestoration: 'oldFurnitureRestoration',
      //locksmith
      lockInstallation: 'lockInstallation',
      lockRepair: 'lockRepair',
      openALockedDoorUrgent: 'openALockedDoorUrgent',
      //homeWorks
      completeRepair: 'completeRepair',
      kitchen: 'kitchen',
      bathroom: 'bathroom',
      terraceOrOutside: 'terraceOrOutside',
      roofWorks: 'roofWorks',
      floorWorks: 'floorWorks',
      surfaceWorks: 'surfaceWorks',
      tiles: 'tiles',
      buildOrRemoveWalls: 'buildOrRemoveWalls',
      apartmentBuildingsRepairs: 'apartmentBuildingsRepairs',
      //doorsAndWindows
      woodenDoorsAndWindows: 'woodenDoorsAndWindows',
      aluminiumDoorsAndWindows: 'aluminiumDoorsAndWindows',
      plasticDoorsAndWindows: 'plasticDoorsAndWindows',
      glazier: 'glazier',
      blindsAndShadesInstallationOrRepair:
        'blindsAndShadesInstallationOrRepair',
      //upholstery
      smallFurniture: 'smallFurniture',
      bigFurniture: 'bigFurniture',
      furnitureRepairs: 'furnitureRepairs',
      furnitureRestoration: 'furnitureRestoration',
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({backPress: this.backPress});
  }
  backPress = () => {
    console.log('backgetting called:');
    this.props.navigation.goBack();
  };
  warningTextDecider = () => {
    if (this.state.showWarning) {
      return (
        <Text
          style={{
            color: 'red',
            fontSize: 0.018 * screenHeight,
            marginHorizontal: 0.06 * screenWidth,
          }}>
          Please select at least one subcategory for each category you support
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
          Please select at least one subcategory for each category you support
        </Text>
      );
    }
  };

  nextButtonPress = () => {
    if (this.selectedCategories.indexOf('cleaning') != -1) {
      if (this.state.cleaningSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('airConditioning') != -1) {
      if (this.state.airConditioningSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('handy') != -1) {
      if (this.state.handymanSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('plumbing') != -1) {
      if (this.state.plumbingSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('electricity') != -1) {
      if (this.state.electricitySubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('movingService') != -1) {
      if (this.state.movingServiceSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('painting') != -1) {
      if (this.state.paintingSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('electricalDevices') != -1) {
      if (this.state.electricalDevicesSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('carpenter') != -1) {
      if (this.state.carpenterSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('lockSmith') != -1) {
      if (this.state.lockSmithSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('homeWorks') != -1) {
      if (this.state.homeWorksSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('doorsAndWindows') != -1) {
      if (this.state.doorsAndWindowsSubcategories.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    if (this.selectedCategories.indexOf('upholstery') != -1) {
      if (this.state.upholsterySubcategoreis.length === 0) {
        this.setState({
          showWarning: true,
          allowNavigate: false,
        });
        return;
      } else {
        this.setState({allowNavigate: true});
      }
    }
    //navigating check
    if (this.state.allowNavigate === true) console.log('masla hai');
    else this.props.navigation.navigate('SignUpStepSix');
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{marginTop: 0.01 * screenHeight}} />
          <Text style={styles.generalText}>
            Please select atleast one sub-category
          </Text>
          <Text style={styles.generalText}>for each category you support</Text>
          {/* all categories container */}
          <View style={{marginTop: 0.01 * screenHeight}} />
          <View>
            {/* cleaning */}
            {this.selectedCategories.indexOf('cleaning') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Cleaning</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.home === 'home') {
                      this.setState({home: ''});
                      this.state.cleaningSubcategories.splice(
                        this.state.cleaningSubcategories.indexOf('home'),
                        1,
                      );
                    } else {
                      this.setState({home: 'home'});
                      this.state.cleaningSubcategories.push('home');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Home</Text>
                  {this.state.home === 'home' ? (
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
                  onPress={() => {
                    if (this.state.office === 'office') {
                      this.setState({office: ''});
                      this.state.cleaningSubcategories.splice(
                        this.state.cleaningSubcategories.indexOf('office'),
                        1,
                      );
                    } else {
                      this.setState({office: 'office'});
                      this.state.cleaningSubcategories.push('office');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Office</Text>
                  {this.state.office === 'office' ? (
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
                  onPress={() => {
                    if (this.state.industrial === 'industrial') {
                      this.setState({industrial: ''});
                      this.state.cleaningSubcategories.splice(
                        this.state.cleaningSubcategories.indexOf('industrial'),
                        1,
                      );
                    } else {
                      this.setState({industrial: 'industrial'});
                      this.state.cleaningSubcategories.push('industrial');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Industrial</Text>
                  {this.state.industrial === 'industrial' ? (
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
                  onPress={() => {
                    if (this.state.hotelOrRental === 'hotelOrRental') {
                      this.setState({hotelOrRental: ''});
                      this.state.cleaningSubcategories.splice(
                        this.state.cleaningSubcategories.indexOf(
                          'hotelOrRental',
                        ),
                        1,
                      );
                    } else {
                      this.setState({hotelOrRental: 'hotelOrRental'});
                      this.state.cleaningSubcategories.push('hotelOrRental');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}> Hotel/Rental</Text>
                  {this.state.hotelOrRental === 'hotelOrRental' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* airConditioning */}
            {this.selectedCategories.indexOf('airConditioning') ===
            -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Air Conditioning</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.acInstallation === 'acInstallation') {
                      this.setState({acInstallation: ''});
                      this.state.airConditioningSubcategories.splice(
                        this.state.airConditioningSubcategories.indexOf(
                          'acInstallation',
                        ),
                        1,
                      );
                    } else {
                      this.setState({acInstallation: 'acInstallation'});
                      this.state.airConditioningSubcategories.push(
                        'acInstallation',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>AC Installation</Text>
                  {this.state.acInstallation === 'acInstallation' ? (
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
                  onPress={() => {
                    if (
                      this.state.acMaintenanceOrRepair ===
                      'acMaintenanceOrRepair'
                    ) {
                      this.setState({acMaintenanceOrRepair: ''});
                      this.state.airConditioningSubcategories.splice(
                        this.state.airConditioningSubcategories.indexOf(
                          'acMaintenanceOrRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        acMaintenanceOrRepair: 'acMaintenanceOrRepair',
                      });
                      this.state.airConditioningSubcategories.push(
                        'acMaintenanceOrRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    AC Maintenance/Repair
                  </Text>
                  {this.state.acMaintenanceOrRepair ===
                  'acMaintenanceOrRepair' ? (
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
                  onPress={() => {
                    if (
                      this.state.heatingInstallation === 'heatingInstallation'
                    ) {
                      this.setState({heatingInstallation: ''});
                      this.state.airConditioningSubcategories.splice(
                        this.state.airConditioningSubcategories.indexOf(
                          'heatingInstallation',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        heatingInstallation: 'heatingInstallation',
                      });
                      this.state.airConditioningSubcategories.push(
                        'heatingInstallation',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Heating Installation
                  </Text>
                  {this.state.heatingInstallation === 'heatingInstallation' ? (
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
                  onPress={() => {
                    if (
                      this.state.heatingMaintenanceOrRepair ===
                      'heatingMaintenanceOrRepair'
                    ) {
                      this.setState({heatingMaintenanceOrRepair: ''});
                      this.state.airConditioningSubcategories.splice(
                        this.state.airConditioningSubcategories.indexOf(
                          'heatingMaintenanceOrRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        heatingMaintenanceOrRepair:
                          'heatingMaintenanceOrRepair',
                      });
                      this.state.airConditioningSubcategories.push(
                        'heatingMaintenanceOrRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Heating Maintenence/Repair
                  </Text>
                  {this.state.heatingMaintenanceOrRepair ===
                  'heatingMaintenanceOrRepair' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* handyman */}
            {this.selectedCategories.indexOf('handyman') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Handyman</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.furnitureAssembly === 'furnitureAssembly') {
                      this.setState({furnitureAssembly: ''});
                      this.state.handymanSubcategories.splice(
                        this.state.handymanSubcategories.indexOf(
                          'furnitureAssembly',
                        ),
                        1,
                      );
                    } else {
                      this.setState({furnitureAssembly: 'furnitureAssembly'});
                      this.state.handymanSubcategories.push(
                        'furnitureAssembly',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Furniture Assembly
                  </Text>
                  {this.state.furnitureAssembly === 'furnitureAssembly' ? (
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
                  onPress={() => {
                    if (this.state.smallRepairs === 'smallRepairs') {
                      this.setState({smallRepairs: ''});
                      this.state.handymanSubcategories.splice(
                        this.state.handymanSubcategories.indexOf(
                          'smallRepairs',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        smallRepairs: 'smallRepairs',
                      });
                      this.state.handymanSubcategories.push('smallRepairs');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Small Repairs</Text>
                  {this.state.smallRepairs === 'smallRepairs' ? (
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
                  onPress={() => {
                    if (this.state.hangingShelfOrTv === 'hangingShelfOrTv') {
                      this.setState({hangingShelfOrTv: ''});
                      this.state.handymanSubcategories.splice(
                        this.state.handymanSubcategories.indexOf(
                          'hangingShelfOrTv',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        hangingShelfOrTv: 'hangingShelfOrTv',
                      });
                      this.state.handymanSubcategories.push('hangingShelfOrTv');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Hanging Shelf/TV</Text>
                  {this.state.hangingShelfOrTv === 'hangingShelfOrTv' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* plumbing */}
            {this.selectedCategories.indexOf('plumbing') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Plumbing</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (
                      this.state.installOrRepairPlumbing ===
                      'installOrRepairPlumbing'
                    ) {
                      this.setState({installOrRepairPlumbing: ''});
                      this.state.plumbingSubcategories.splice(
                        this.state.plumbingSubcategories.indexOf(
                          'installOrRepairPlumbing',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        installOrRepairPlumbing: 'installOrRepairPlumbing',
                      });
                      this.state.plumbingSubcategories.push(
                        'installOrRepairPlumbing',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Install/Repair Plumbing
                  </Text>
                  {this.state.installOrRepairPlumbing ===
                  'installOrRepairPlumbing' ? (
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
                  onPress={() => {
                    if (
                      this.state.wcInstallationOrRepairs ===
                      'wcInstallationOrRepairs'
                    ) {
                      this.setState({wcInstallationOrRepairs: ''});
                      this.state.plumbingSubcategories.splice(
                        this.state.plumbingSubcategories.indexOf(
                          'wcInstallationOrRepairs',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        wcInstallationOrRepairs: 'wcInstallationOrRepairs',
                      });
                      this.state.plumbingSubcategories.push(
                        'wcInstallationOrRepairs',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    WC Installation/Repairs
                  </Text>
                  {this.state.wcInstallationOrRepairs ===
                  'wcInstallationOrRepairs' ? (
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
                  onPress={() => {
                    if (this.state.unclogPipes === 'unclogPipes') {
                      this.setState({unclogPipes: ''});
                      this.state.plumbingSubcategories.splice(
                        this.state.plumbingSubcategories.indexOf('unclogPipes'),
                        1,
                      );
                    } else {
                      this.setState({
                        unclogPipes: 'unclogPipes',
                      });
                      this.state.plumbingSubcategories.push('unclogPipes');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Unclog Pipes</Text>
                  {this.state.unclogPipes === 'unclogPipes' ? (
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
                  onPress={() => {
                    if (
                      this.state.changeBathtubForShower ===
                      'changeBathtubForShower'
                    ) {
                      this.setState({changeBathtubForShower: ''});
                      this.state.plumbingSubcategories.splice(
                        this.state.plumbingSubcategories.indexOf(
                          'changeBathtubForShower',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        changeBathtubForShower: 'changeBathtubForShower',
                      });
                      this.state.plumbingSubcategories.push(
                        'changeBathtubForShower',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Change Bathtub For Shower
                  </Text>
                  {this.state.changeBathtubForShower ===
                  'changeBathtubForShower' ? (
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
                  onPress={() => {
                    if (
                      this.state.generalPlumbingServices ===
                      'generalPlumbingServices'
                    ) {
                      this.setState({generalPlumbingServices: ''});
                      this.state.plumbingSubcategories.splice(
                        this.state.plumbingSubcategories.indexOf(
                          'generalPlumbingServices',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        generalPlumbingServices: 'generalPlumbingServices',
                      });
                      this.state.plumbingSubcategories.push(
                        'generalPlumbingServices',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    General Plumbing Services
                  </Text>
                  {this.state.generalPlumbingServices ===
                  'generalPlumbingServices' ? (
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
                  onPress={() => {
                    if (this.state.other === 'other') {
                      this.setState({other: ''});
                      this.state.plumbingSubcategories.splice(
                        this.state.plumbingSubcategories.indexOf('other'),
                        1,
                      );
                    } else {
                      this.setState({
                        other: 'other',
                      });
                      this.state.plumbingSubcategories.push('other');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Other</Text>
                  {this.state.other === 'other' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* electricity */}
            {this.selectedCategories.indexOf('electricity') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Electricity</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (
                      this.state.installOutletsOrLightFixtures ===
                      'installOutletsOrLightFixtures'
                    ) {
                      this.setState({installOutletsOrLightFixtures: ''});
                      this.state.electricitySubcategories.splice(
                        this.state.electricitySubcategories.indexOf(
                          'installOutletsOrLightFixtures',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        installOutletsOrLightFixtures:
                          'installOutletsOrLightFixtures',
                      });
                      this.state.electricitySubcategories.push(
                        'installOutletsOrLightFixtures',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Install Outlet/Light Fixtures
                  </Text>
                  {this.state.installOutletsOrLightFixtures ===
                  'installOutletsOrLightFixtures' ? (
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
                  onPress={() => {
                    if (
                      this.state.generalElectricityIssues ===
                      'generalElectricityIssues'
                    ) {
                      this.setState({generalElectricityIssues: ''});
                      this.state.electricitySubcategories.splice(
                        this.state.electricitySubcategories.indexOf(
                          'generalElectricityIssues',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        generalElectricityIssues: 'generalElectricityIssues',
                      });
                      this.state.electricitySubcategories.push(
                        'generalElectricityIssues',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    General Electricity Issues
                  </Text>
                  {this.state.generalElectricityIssues ===
                  'generalElectricityIssues' ? (
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
                  onPress={() => {
                    if (
                      this.state.restoreElectricity === 'restoreElectricity'
                    ) {
                      this.setState({restoreElectricity: ''});
                      this.state.electricitySubcategories.splice(
                        this.state.electricitySubcategories.indexOf(
                          'restoreElectricity',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        restoreElectricity: 'restoreElectricity',
                      });
                      this.state.electricitySubcategories.push(
                        'restoreElectricity',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Restore Electricity
                  </Text>
                  {this.state.restoreElectricity === 'restoreElectricity' ? (
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
                  onPress={() => {
                    if (
                      this.state.installConventionalOrLEDLighting ===
                      'installConventionalOrLEDLighting'
                    ) {
                      this.setState({installConventionalOrLEDLighting: ''});
                      this.state.electricitySubcategories.splice(
                        this.state.electricitySubcategories.indexOf(
                          'installConventionalOrLEDLighting',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        installConventionalOrLEDLighting:
                          'installConventionalOrLEDLighting',
                      });
                      this.state.electricitySubcategories.push(
                        'installConventionalOrLEDLighting',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Install Conventional or LED Lighting
                  </Text>
                  {this.state.installConventionalOrLEDLighting ===
                  'installConventionalOrLEDLighting' ? (
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
                  onPress={() => {
                    if (
                      this.state.installOrRepairCentralElectricalPanel ===
                      'installOrRepairCentralElectricalPanel'
                    ) {
                      this.setState({
                        installOrRepairCentralElectricalPanel: '',
                      });
                      this.state.electricitySubcategories.splice(
                        this.state.electricitySubcategories.indexOf(
                          'installOrRepairCentralElectricalPanel',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        installOrRepairCentralElectricalPanel:
                          'installOrRepairCentralElectricalPanel',
                      });
                      this.state.electricitySubcategories.push(
                        'installOrRepairCentralElectricalPanel',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Install/Repair Central Electical Panel
                  </Text>
                  {this.state.installOrRepairCentralElectricalPanel ===
                  'installOrRepairCentralElectricalPanel' ? (
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
                  onPress={() => {
                    if (
                      this.state.otherElectricalInstallations ===
                      'otherElectricalInstallations'
                    ) {
                      this.setState({otherElectricalInstallations: ''});
                      this.state.electricitySubcategories.splice(
                        this.state.electricitySubcategories.indexOf(
                          'otherElectricalInstallations',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        otherElectricalInstallations:
                          'otherElectricalInstallations',
                      });
                      this.state.electricitySubcategories.push(
                        'otherElectricalInstallations',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Other Electrical Installations
                  </Text>
                  {this.state.otherElectricalInstallations ===
                  'otherElectricalInstallations' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* movingSrevice */}
            {this.selectedCategories.indexOf('movingService') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Moving Service</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.smallVans === 'smallVans') {
                      this.setState({smallVans: ''});
                      this.state.movingServiceSubcategories.splice(
                        this.state.movingServiceSubcategories.indexOf(
                          'smallVans',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        smallVans: 'smallVans',
                      });
                      this.state.movingServiceSubcategories.push('smallVans');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Small Vans</Text>
                  {this.state.smallVans === 'smallVans' ? (
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
                  onPress={() => {
                    if (this.state.bigVansOrTrucks === 'bigVansOrTrucks') {
                      this.setState({bigVansOrTrucks: ''});
                      this.state.movingServiceSubcategories.splice(
                        this.state.movingServiceSubcategories.indexOf(
                          'bigVansOrTrucks',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        bigVansOrTrucks: 'bigVansOrTrucks',
                      });
                      this.state.movingServiceSubcategories.push(
                        'bigVansOrTrucks',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>BigVans/Trucks</Text>
                  {this.state.bigVansOrTrucks === 'bigVansOrTrucks' ? (
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
                  onPress={() => {
                    if (
                      this.state.platformsElevation === 'platformsElevation'
                    ) {
                      this.setState({platformsElevation: ''});
                      this.state.movingServiceSubcategories.splice(
                        this.state.movingServiceSubcategories.indexOf(
                          'platformsElevation',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        platformsElevation: 'platformsElevation',
                      });
                      this.state.movingServiceSubcategories.push(
                        'platformsElevation',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Platform Elevation
                  </Text>
                  {this.state.platformsElevation === 'platformsElevation' ? (
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
                  onPress={() => {
                    if (this.state.fullMoving === 'fullMoving') {
                      this.setState({fullMoving: ''});
                      this.state.movingServiceSubcategories.splice(
                        this.state.movingServiceSubcategories.indexOf(
                          'fullMoving',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        fullMoving: 'fullMoving',
                      });
                      this.state.movingServiceSubcategories.push('fullMoving');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Full Moving</Text>
                  {this.state.fullMoving === 'fullMoving' ? (
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
                  onPress={() => {
                    if (this.state.storageServices === 'storageServices') {
                      this.setState({storageServices: ''});
                      this.state.movingServiceSubcategories.splice(
                        this.state.movingServiceSubcategories.indexOf(
                          'storageServices',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        storageServices: 'storageServices',
                      });
                      this.state.movingServiceSubcategories.push(
                        'storageServices',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Storage Services</Text>
                  {this.state.storageServices === 'storageServices' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* painting */}
            {this.selectedCategories.indexOf('painting') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Painting</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.paintingInside === 'paintingInside') {
                      this.setState({paintingInside: ''});
                      this.state.paintingSubcategories.splice(
                        this.state.paintingSubcategories.indexOf(
                          'paintingInside',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        paintingInside: 'paintingInside',
                      });
                      this.state.paintingSubcategories.push('paintingInside');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Painting Inside (home or office)
                  </Text>
                  {this.state.paintingInside === 'paintingInside' ? (
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
                  onPress={() => {
                    if (this.state.paintingOutside === 'paintingOutside') {
                      this.setState({paintingOutside: ''});
                      this.state.paintingSubcategories.splice(
                        this.state.paintingSubcategories.indexOf(
                          'paintingOutside',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        paintingOutside: 'paintingOutside',
                      });
                      this.state.paintingSubcategories.push('paintingOutside');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Painting Outside (home or office)
                  </Text>
                  {this.state.paintingOutside === 'paintingOutside' ? (
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
                  onPress={() => {
                    if (
                      this.state.applyOrRemoveTexturePainting ===
                      'applyOrRemoveTexturePainting'
                    ) {
                      this.setState({applyOrRemoveTexturePainting: ''});
                      this.state.paintingSubcategories.splice(
                        this.state.paintingSubcategories.indexOf(
                          'applyOrRemoveTexturePainting',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        applyOrRemoveTexturePainting:
                          'applyOrRemoveTexturePainting',
                      });
                      this.state.paintingSubcategories.push(
                        'applyOrRemoveTexturePainting',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Apply/Remove Texture Painting
                  </Text>
                  {this.state.applyOrRemoveTexturePainting ===
                  'applyOrRemoveTexturePainting' ? (
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
                  onPress={() => {
                    if (
                      this.state.applyOrRemoveWallpapers ===
                      'applyOrRemoveWallpapers'
                    ) {
                      this.setState({applyOrRemoveWallpapers: ''});
                      this.state.paintingSubcategories.splice(
                        this.state.paintingSubcategories.indexOf(
                          'applyOrRemoveWallpapers',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        applyOrRemoveWallpapers: 'applyOrRemoveWallpapers',
                      });
                      this.state.paintingSubcategories.push(
                        'applyOrRemoveWallpapers',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Apply/Remove Wallpapers
                  </Text>
                  {this.state.applyOrRemoveWallpapers ===
                  'applyOrRemoveWallpapers' ? (
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
                  onPress={() => {
                    if (this.state.bathtubReglazing === 'bathtubReglazing') {
                      this.setState({bathtubReglazing: ''});
                      this.state.paintingSubcategories.splice(
                        this.state.paintingSubcategories.indexOf(
                          'bathtubReglazing',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        bathtubReglazing: 'bathtubReglazing',
                      });
                      this.state.paintingSubcategories.push('bathtubReglazing');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Bathtub Reglazing
                  </Text>
                  {this.state.bathtubReglazing === 'bathtubReglazing' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* electricalDevices */}
            {this.selectedCategories.indexOf('electricalDevices') ===
            -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Electrical Devices</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.fridgeRepair === 'fridgeRepair') {
                      this.setState({fridgeRepair: ''});
                      this.state.electricalDevicesSubcategories.splice(
                        this.state.electricalDevicesSubcategories.indexOf(
                          'fridgeRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        fridgeRepair: 'fridgeRepair',
                      });
                      this.state.electricalDevicesSubcategories.push(
                        'fridgeRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Fridge Repair</Text>
                  {this.state.fridgeRepair === 'fridgeRepair' ? (
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
                  onPress={() => {
                    if (
                      this.state.washingMachineRepair === 'washingMachineRepair'
                    ) {
                      this.setState({washingMachineRepair: ''});
                      this.state.electricalDevicesSubcategories.splice(
                        this.state.electricalDevicesSubcategories.indexOf(
                          'washingMachineRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        washingMachineRepair: 'washingMachineRepair',
                      });
                      this.state.electricalDevicesSubcategories.push(
                        'washingMachineRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Washing Machine Repair
                  </Text>
                  {this.state.washingMachineRepair ===
                  'washingMachineRepair' ? (
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
                  onPress={() => {
                    if (this.state.ovenRepair === 'ovenRepair') {
                      this.setState({ovenRepair: ''});
                      this.state.electricalDevicesSubcategories.splice(
                        this.state.electricalDevicesSubcategories.indexOf(
                          'ovenRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        ovenRepair: 'ovenRepair',
                      });
                      this.state.electricalDevicesSubcategories.push(
                        'ovenRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Oven Repair</Text>
                  {this.state.ovenRepair === 'ovenRepair' ? (
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
                  onPress={() => {
                    if (this.state.dishwasherRepair === 'dishwasherRepair') {
                      this.setState({dishwasherRepair: ''});
                      this.state.electricalDevicesSubcategories.splice(
                        this.state.electricalDevicesSubcategories.indexOf(
                          'dishwasherRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        dishwasherRepair: 'dishwasherRepair',
                      });
                      this.state.electricalDevicesSubcategories.push(
                        'dishwasherRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    DishWasher Repair
                  </Text>
                  {this.state.dishwasherRepair === 'dishwasherRepair' ? (
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
                  onPress={() => {
                    if (
                      this.state.otherLargeAppliancesRepair ===
                      'otherLargeAppliancesRepair'
                    ) {
                      this.setState({otherLargeAppliancesRepair: ''});
                      this.state.electricalDevicesSubcategories.splice(
                        this.state.electricalDevicesSubcategories.indexOf(
                          'otherLargeAppliancesRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        otherLargeAppliancesRepair:
                          'otherLargeAppliancesRepair',
                      });
                      this.state.electricalDevicesSubcategories.push(
                        'otherLargeAppliancesRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Other Large Appliances Repair
                  </Text>
                  {this.state.otherLargeAppliancesRepair ===
                  'otherLargeAppliancesRepair' ? (
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
                  onPress={() => {
                    if (
                      this.state.smallAppliancesRepair ===
                      'smallAppliancesRepair'
                    ) {
                      this.setState({smallAppliancesRepair: ''});
                      this.state.electricalDevicesSubcategories.splice(
                        this.state.electricalDevicesSubcategories.indexOf(
                          'smallAppliancesRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        smallAppliancesRepair: 'smallAppliancesRepair',
                      });
                      this.state.electricalDevicesSubcategories.push(
                        'smallAppliancesRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Small Appliances Repair
                  </Text>
                  {this.state.smallAppliancesRepair ===
                  'smallAppliancesRepair' ? (
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
                  onPress={() => {
                    if (
                      this.state.smallElectronicsRepair ===
                      'smallElectronicsRepair'
                    ) {
                      this.setState({smallElectronicsRepair: ''});
                      this.state.electricalDevicesSubcategories.splice(
                        this.state.electricalDevicesSubcategories.indexOf(
                          'smallElectronicsRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        smallElectronicsRepair: 'smallElectronicsRepair',
                      });
                      this.state.electricalDevicesSubcategories.push(
                        'smallElectronicsRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Small Electronics Repair
                  </Text>
                  {this.state.smallElectronicsRepair ===
                  'smallElectronicsRepair' ? (
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
                  onPress={() => {
                    if (
                      this.state.antennasInstallationOrRepair ===
                      'antennasInstallationOrRepair'
                    ) {
                      this.setState({antennasInstallationOrRepair: ''});
                      this.state.electricalDevicesSubcategories.splice(
                        this.state.electricalDevicesSubcategories.indexOf(
                          'antennasInstallationOrRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        antennasInstallationOrRepair:
                          'antennasInstallationOrRepair',
                      });
                      this.state.electricalDevicesSubcategories.push(
                        'antennasInstallationOrRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Antennas Installation/Repair
                  </Text>
                  {this.state.antennasInstallationOrRepair ===
                  'antennasInstallationOrRepair' ? (
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
                  onPress={() => {
                    if (
                      this.state.otherElectricalDevicesRepair ===
                      'otherElectricalDevicesRepair'
                    ) {
                      this.setState({otherElectricalDevicesRepair: ''});
                      this.state.electricalDevicesSubcategories.splice(
                        this.state.electricalDevicesSubcategories.indexOf(
                          'otherElectricalDevicesRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        otherElectricalDevicesRepair:
                          'otherElectricalDevicesRepair',
                      });
                      this.state.electricalDevicesSubcategories.push(
                        'otherElectricalDevicesRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Other Electrical Devices Repair
                  </Text>
                  {this.state.otherElectricalDevicesRepair ===
                  'otherElectricalDevicesRepair' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* carpenter */}
            {this.selectedCategories.indexOf('carpenter') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Carpenter</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.woodCarpentry === 'woodCarpentry') {
                      this.setState({woodCarpentry: ''});
                      this.state.carpenterSubcategories.splice(
                        this.state.carpenterSubcategories.indexOf(
                          'woodCarpentry',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        woodCarpentry: 'woodCarpentry',
                      });
                      this.state.carpenterSubcategories.push('woodCarpentry');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Wood Carpentry</Text>
                  {this.state.woodCarpentry === 'woodCarpentry' ? (
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
                  onPress={() => {
                    if (
                      this.state.aluminiumCarpentry === 'aluminiumCarpentry'
                    ) {
                      this.setState({aluminiumCarpentry: ''});
                      this.state.carpenterSubcategories.splice(
                        this.state.carpenterSubcategories.indexOf(
                          'aluminiumCarpentry',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        aluminiumCarpentry: 'aluminiumCarpentry',
                      });
                      this.state.carpenterSubcategories.push(
                        'aluminiumCarpentry',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Aluminium Carpentry
                  </Text>
                  {this.state.aluminiumCarpentry === 'aluminiumCarpentry' ? (
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
                  onPress={() => {
                    if (
                      this.state.otherMetalCarpentry === 'otherMetalCarpentry'
                    ) {
                      this.setState({otherMetalCarpentry: ''});
                      this.state.carpenterSubcategories.splice(
                        this.state.carpenterSubcategories.indexOf(
                          'otherMetalCarpentry',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        otherMetalCarpentry: 'otherMetalCarpentry',
                      });
                      this.state.carpenterSubcategories.push(
                        'otherMetalCarpentry',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Other Metal Carpentry
                  </Text>
                  {this.state.otherMetalCarpentry === 'otherMetalCarpentry' ? (
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
                  onPress={() => {
                    if (this.state.pvcCarpentry === 'pvcCarpentry') {
                      this.setState({pvcCarpentry: ''});
                      this.state.carpenterSubcategories.splice(
                        this.state.carpenterSubcategories.indexOf(
                          'pvcCarpentry',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        pvcCarpentry: 'pvcCarpentry',
                      });
                      this.state.carpenterSubcategories.push('pvcCarpentry');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>PVC Carpentry</Text>
                  {this.state.pvcCarpentry === 'pvcCarpentry' ? (
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
                  onPress={() => {
                    if (this.state.furnitureRepairs === 'furnitureRepairs') {
                      this.setState({furnitureRepairs: ''});
                      this.state.carpenterSubcategories.splice(
                        this.state.carpenterSubcategories.indexOf(
                          'furnitureRepairs',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        furnitureRepairs: 'furnitureRepairs',
                      });
                      this.state.carpenterSubcategories.push(
                        'furnitureRepairs',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Furniture Repair</Text>
                  {this.state.furnitureRepairs === 'furnitureRepairs' ? (
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
                  onPress={() => {
                    if (
                      this.state.oldFurnitureRestoration ===
                      'oldFurnitureRestoration'
                    ) {
                      this.setState({oldFurnitureRestoration: ''});
                      this.state.carpenterSubcategories.splice(
                        this.state.carpenterSubcategories.indexOf(
                          'oldFurnitureRestoration',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        oldFurnitureRestoration: 'oldFurnitureRestoration',
                      });
                      this.state.carpenterSubcategories.push(
                        'oldFurnitureRestoration',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Old Furniture Restoration
                  </Text>
                  {this.state.oldFurnitureRestoration ===
                  'oldFurnitureRestoration' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* lockSmith */}
            {this.selectedCategories.indexOf('lockSmith') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Lock Smith</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.lockInstallation === 'lockInstallation') {
                      this.setState({lockInstallation: ''});
                      this.state.lockSmithSubcategories.splice(
                        this.state.lockSmithSubcategories.indexOf(
                          'lockInstallation',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        lockInstallation: 'lockInstallation',
                      });
                      this.state.lockSmithSubcategories.push(
                        'lockInstallation',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Lock Installation
                  </Text>
                  {this.state.lockInstallation === 'lockInstallation' ? (
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
                  onPress={() => {
                    if (this.state.lockRepair === 'lockRepair') {
                      this.setState({lockRepair: ''});
                      this.state.lockSmithSubcategories.splice(
                        this.state.lockSmithSubcategories.indexOf('lockRepair'),
                        1,
                      );
                    } else {
                      this.setState({
                        lockRepair: 'lockRepair',
                      });
                      this.state.lockSmithSubcategories.push('lockRepair');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Lock Repair</Text>
                  {this.state.lockRepair === 'lockRepair' ? (
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
                  onPress={() => {
                    if (
                      this.state.openALockedDoorUrgent ===
                      'openALockedDoorUrgent'
                    ) {
                      this.setState({openALockedDoorUrgent: ''});
                      this.state.lockSmithSubcategories.splice(
                        this.state.lockSmithSubcategories.indexOf(
                          'openALockedDoorUrgent',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        openALockedDoorUrgent: 'openALockedDoorUrgent',
                      });
                      this.state.lockSmithSubcategories.push(
                        'openALockedDoorUrgent',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Open a locked door(Urgent)
                  </Text>
                  {this.state.openALockedDoorUrgent ===
                  'openALockedDoorUrgent' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* homeWorks */}
            {this.selectedCategories.indexOf('homeWorks') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Home Works</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.completeRepair === 'completeRepair') {
                      this.setState({completeRepair: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf(
                          'completeRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        completeRepair: 'completeRepair',
                      });
                      this.state.homeWorksSubcategories.push('completeRepair');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Complete Repair</Text>
                  {this.state.completeRepair === 'completeRepair' ? (
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
                  onPress={() => {
                    if (this.state.kitchen === 'kitchen') {
                      this.setState({kitchen: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf('kitchen'),
                        1,
                      );
                    } else {
                      this.setState({
                        kitchen: 'kitchen',
                      });
                      this.state.homeWorksSubcategories.push('kitchen');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Kitchen</Text>
                  {this.state.kitchen === 'kitchen' ? (
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
                  onPress={() => {
                    if (this.state.bathroom === 'bathroom') {
                      this.setState({bathroom: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf('bathroom'),
                        1,
                      );
                    } else {
                      this.setState({
                        bathroom: 'bathroom',
                      });
                      this.state.homeWorksSubcategories.push('bathroom');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Bathroom</Text>
                  {this.state.bathroom === 'bathroom' ? (
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
                  onPress={() => {
                    if (this.state.terraceOrOutside === 'terraceOrOutside') {
                      this.setState({terraceOrOutside: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf(
                          'terraceOrOutside',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        terraceOrOutside: 'terraceOrOutside',
                      });
                      this.state.homeWorksSubcategories.push(
                        'terraceOrOutside',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Terrace/Outside</Text>
                  {this.state.terraceOrOutside === 'terraceOrOutside' ? (
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
                  onPress={() => {
                    if (this.state.roofWorks === 'roofWorks') {
                      this.setState({roofWorks: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf('roofWorks'),
                        1,
                      );
                    } else {
                      this.setState({
                        roofWorks: 'roofWorks',
                      });
                      this.state.homeWorksSubcategories.push('roofWorks');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Roof Works</Text>
                  {this.state.roofWorks === 'roofWorks' ? (
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
                  onPress={() => {
                    if (this.state.floorWorks === 'floorWorks') {
                      this.setState({floorWorks: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf('floorWorks'),
                        1,
                      );
                    } else {
                      this.setState({
                        floorWorks: 'floorWorks',
                      });
                      this.state.homeWorksSubcategories.push('floorWorks');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Floor Works</Text>
                  {this.state.floorWorks === 'floorWorks' ? (
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
                  onPress={() => {
                    if (this.state.surfaceWorks === 'surfaceWorks') {
                      this.setState({surfaceWorks: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf(
                          'surfaceWorks',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        surfaceWorks: 'surfaceWorks',
                      });
                      this.state.homeWorksSubcategories.push('surfaceWorks');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Surface Works</Text>
                  {this.state.surfaceWorks === 'surfaceWorks' ? (
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
                  onPress={() => {
                    if (this.state.tiles === 'tiles') {
                      this.setState({tiles: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf('tiles'),
                        1,
                      );
                    } else {
                      this.setState({
                        tiles: 'tiles',
                      });
                      this.state.homeWorksSubcategories.push('tiles');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Tiles</Text>
                  {this.state.tiles === 'tiles' ? (
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
                  onPress={() => {
                    if (
                      this.state.buildOrRemoveWalls === 'buildOrRemoveWalls'
                    ) {
                      this.setState({buildOrRemoveWalls: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf(
                          'buildOrRemoveWalls',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        buildOrRemoveWalls: 'buildOrRemoveWalls',
                      });
                      this.state.homeWorksSubcategories.push(
                        'buildOrRemoveWalls',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Build/Remove Walls
                  </Text>
                  {this.state.buildOrRemoveWalls === 'buildOrRemoveWalls' ? (
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
                  onPress={() => {
                    if (
                      this.state.apartmentBuildingsRepairs ===
                      'apartmentBuildingsRepairs'
                    ) {
                      this.setState({apartmentBuildingsRepairs: ''});
                      this.state.homeWorksSubcategories.splice(
                        this.state.homeWorksSubcategories.indexOf(
                          'apartmentBuildingsRepairs',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        apartmentBuildingsRepairs: 'apartmentBuildingsRepairs',
                      });
                      this.state.homeWorksSubcategories.push(
                        'apartmentBuildingsRepairs',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Apartment Building Repairs
                  </Text>
                  {this.state.apartmentBuildingsRepairs ===
                  'apartmentBuildingsRepairs' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* doorsAndWindows */}
            {this.selectedCategories.indexOf('doorsAndWindows') ===
            -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Doors And Windows</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (
                      this.state.woodenDoorsAndWindows ===
                      'woodenDoorsAndWindows'
                    ) {
                      this.setState({woodenDoorsAndWindows: ''});
                      this.state.doorsAndWindowsSubcategories.splice(
                        this.state.doorsAndWindowsSubcategories.indexOf(
                          'woodenDoorsAndWindows',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        woodenDoorsAndWindows: 'woodenDoorsAndWindows',
                      });
                      this.state.doorsAndWindowsSubcategories.push(
                        'woodenDoorsAndWindows',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Wooden Doors and Windows
                  </Text>
                  {this.state.woodenDoorsAndWindows ===
                  'woodenDoorsAndWindows' ? (
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
                  onPress={() => {
                    if (
                      this.state.aluminiumDoorsAndWindows ===
                      'aluminiumDoorsAndWindows'
                    ) {
                      this.setState({aluminiumDoorsAndWindows: ''});
                      this.state.doorsAndWindowsSubcategories.splice(
                        this.state.doorsAndWindowsSubcategories.indexOf(
                          'aluminiumDoorsAndWindows',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        aluminiumDoorsAndWindows: 'aluminiumDoorsAndWindows',
                      });
                      this.state.doorsAndWindowsSubcategories.push(
                        'aluminiumDoorsAndWindows',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Aluminium Doors and Windows
                  </Text>
                  {this.state.aluminiumDoorsAndWindows ===
                  'aluminiumDoorsAndWindows' ? (
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
                  onPress={() => {
                    if (
                      this.state.plasticDoorsAndWindows ===
                      'plasticDoorsAndWindows'
                    ) {
                      this.setState({plasticDoorsAndWindows: ''});
                      this.state.doorsAndWindowsSubcategories.splice(
                        this.state.doorsAndWindowsSubcategories.indexOf(
                          'plasticDoorsAndWindows',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        plasticDoorsAndWindows: 'plasticDoorsAndWindows',
                      });
                      this.state.doorsAndWindowsSubcategories.push(
                        'plasticDoorsAndWindows',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Plastic Doors and Windows
                  </Text>
                  {this.state.plasticDoorsAndWindows ===
                  'plasticDoorsAndWindows' ? (
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
                  onPress={() => {
                    if (this.state.glazier === 'glazier') {
                      this.setState({glazier: ''});
                      this.state.doorsAndWindowsSubcategories.splice(
                        this.state.doorsAndWindowsSubcategories.indexOf(
                          'glazier',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        glazier: 'glazier',
                      });
                      this.state.doorsAndWindowsSubcategories.push('glazier');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Glazier</Text>
                  {this.state.glazier === 'glazier' ? (
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
                  onPress={() => {
                    if (
                      this.state.blindsAndShadesInstallationOrRepair ===
                      'blindsAndShadesInstallationOrRepair'
                    ) {
                      this.setState({blindsAndShadesInstallationOrRepair: ''});
                      this.state.doorsAndWindowsSubcategories.splice(
                        this.state.doorsAndWindowsSubcategories.indexOf(
                          'blindsAndShadesInstallationOrRepair',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        blindsAndShadesInstallationOrRepair:
                          'blindsAndShadesInstallationOrRepair',
                      });
                      this.state.doorsAndWindowsSubcategories.push(
                        'blindsAndShadesInstallationOrRepair',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Blinds and Shades Installation/Repair
                  </Text>
                  {this.state.blindsAndShadesInstallationOrRepair ===
                  'blindsAndShadesInstallationOrRepair' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
            {/* upholtery */}
            {this.selectedCategories.indexOf('upholstery') === -1 ? null : (
              <View>
                <Text style={styles.categoriesText}>Upholstery</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.smallFurniture === 'smallFurniture') {
                      this.setState({smallFurniture: ''});
                      this.state.upholsterySubcategoreis.splice(
                        this.state.upholsterySubcategoreis.indexOf(
                          'smallFurniture',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        smallFurniture: 'smallFurniture',
                      });
                      this.state.upholsterySubcategoreis.push('smallFurniture');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Small Furniture</Text>
                  {this.state.smallFurniture === 'smallFurniture' ? (
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
                  onPress={() => {
                    if (this.state.bigFurniture === 'bigFurniture') {
                      this.setState({bigFurniture: ''});
                      this.state.upholsterySubcategoreis.splice(
                        this.state.upholsterySubcategoreis.indexOf(
                          'bigFurniture',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        bigFurniture: 'bigFurniture',
                      });
                      this.state.upholsterySubcategoreis.push('bigFurniture');
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>Big Furniture</Text>
                  {this.state.bigFurniture === 'bigFurniture' ? (
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
                  onPress={() => {
                    if (this.state.furnitureRepairs === 'furnitureRepairs') {
                      this.setState({furnitureRepairs: ''});
                      this.state.upholsterySubcategoreis.splice(
                        this.state.upholsterySubcategoreis.indexOf(
                          'furnitureRepairs',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        furnitureRepairs: 'furnitureRepairs',
                      });
                      this.state.upholsterySubcategoreis.push(
                        'furnitureRepairs',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Furniture Repairs
                  </Text>
                  {this.state.furnitureRepairs === 'furnitureRepairs' ? (
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
                  onPress={() => {
                    if (
                      this.state.furnitureRestoration === 'furnitureRestoration'
                    ) {
                      this.setState({furnitureRestoration: ''});
                      this.state.upholsterySubcategoreis.splice(
                        this.state.upholsterySubcategoreis.indexOf(
                          'furnitureRestoration',
                        ),
                        1,
                      );
                    } else {
                      this.setState({
                        furnitureRestoration: 'furnitureRestoration',
                      });
                      this.state.upholsterySubcategoreis.push(
                        'furnitureRestoration',
                      );
                    }
                  }}
                  style={styles.singleRowContainer}>
                  <Text style={styles.subCategoriesText}>
                    Furniture Restoration
                  </Text>
                  {this.state.furnitureRestoration ===
                  'furnitureRestoration' ? (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/checked.png')}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/auth/userBRegistrationScreens/unChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* next buttton */}
          <View style={{marginTop: 0.05 * screenHeight}} />
          {this.warningTextDecider()}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => this.nextButtonPress()}>
            <Text style={{fontSize: 0.024 * screenHeight, color: 'white'}}>
              Next
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: 0.02 * screenHeight}} />
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
    marginHorizontal: 0.05 * screenWidth,
    fontFamily: 'Roboto-Regular',
  },
  nextButton: {
    backgroundColor: colors.theme,
    marginHorizontal: 0.05 * screenWidth,
    height: 0.05 * screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (0.05 * screenHeight) / 4,
  },
  categoriesText: {
    fontSize: 0.024 * screenHeight,
    color: colors.grey,
    marginStart: 0.05 * screenWidth,
    marginTop: 0.01 * screenHeight,
    fontFamily: 'Roboto-Bold',
  },
  singleRowContainer: {
    marginTop: 0.02 * screenHeight,
    flexDirection: 'row',
    marginHorizontal: 0.05 * screenWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: colors.lightGrey,
    paddingBottom: 0.01 * screenHeight,
  },
  subCategoriesText: {
    fontSize: 0.018 * screenHeight,
    color: colors.grey,
  },
  warningText: {
    color: 'red',
    fontSize: 0.014 * screenHeight,
    alignSelf: 'center',
  },
});
