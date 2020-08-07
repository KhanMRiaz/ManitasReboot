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
      title: 'Step 5 of 6',
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
    this.selectedCategories = this.props.navigation.getParam(
      'selectedCategories',
    );
    console.log('received: ', this.selectedCategories);
    this.state = {
      cleaningSubcategories: [],
      airConditioningSubcategories: [],
      handymanSubcategories: [],
      plumbingSubcategories: [],
      electricitySubcategories: [],
      movingServiceSubcategories: [],
      paintingSubcategories: [],
      electricalDevicesSubcategories: [],
      //all subcategories
      //cleaning
      home: '',
      office: '',
      industrial: '',
      hotelOrRental: '',
      //airConditioning
      acInstallation: '',
      acMaintenanceOrRepair: '',
      heatingInstallation: '',
      heatingMaintenanceOrRepair: '',
      //handyman
      furnitureAssembly: '',
      smallRepairs: '',
      hangingShelfOrTv: '',
      //plumbing
      installOrRepairPlumbing: '',
      wcInstallationOrRepairs: '',
      unclogPipes: '',
      changeBathtubForShower: '',
      sinkOrFaucetInstallationAndRepairs: '',
      generalPlumbingServices: '',
      other: '',
      //electricity
      installOutletsOrLightFixtures: '',
      generalElectricityIssues: '',
      restoreElectricity: '',
      installConventionalOrLEDLighting: '',
      installOrRepairCentralElectricalPanel: '',
      otherElectricalInstallations: '',
      //movingService
      smallVans: '',
      bigVansOrTrucks: '',
      platformsElevation: '',
      fullMoving: '',
      storageServices: '',
      //painting
      paintingInside: '',
      paintingOutside: '',
      applyOrRemoveTexturePainting: '',
      applyOrRemoveWallpapers: '',
      bathtubReglazing: '',
      //electricalDevices
      fridgeRepair: '',
      washingMachineRepair: '',
      ovenRepair: '',
      dishwasherRepair: '',
      otherLargeAppliancesRepair: '',
      smallAppliancesRepair: '',
      smallElectronicsRepair: '',
      antennasInstallationOrRepair: '',
      otherElectricalDevicesRepair: '',
    };
  }

  nextButtonPress = () => {
    this.props.navigation.navigate('SignUpStepSix');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.generalText}>
            Please select atleast one sub-category for each category you support
          </Text>
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
          </View>

          {/* next buttton */}
          <View style={{marginTop: 0.05 * screenHeight}} />
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
});
