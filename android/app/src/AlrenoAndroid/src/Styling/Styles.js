import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // profile Button icons
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 90,
  },
  homeHeader: {
    width: 400,
    height: 50,
    backgroundColor: 'white',
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 9,
  },
  homeHeaderText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  homeIcon: {
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 26,
    backgroundColor: 'rgb(38, 38,38)',
    borderWidth: 1,
    borderColor: '#007FFF',
  },
  iconOpacity: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },

  //Logout
  logout: {
    alignItems: 'center',
    marginTop: 100,
  },
  logoutText: {
    color: '#878787',
    fontSize: 17,
  },
  // bbody
  profileContainer: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    paddingTop: 30,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 100,
  },
  name: {
    color: 'black',
    marginTop: 80,
    textAlign: 'center',
    fontSize: 40,
  },
  link: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  // EDIT
  edit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  editProfileOpacity: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 26,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: '#007FFF',
  },
  textButton: {
    fontSize: 17,
    color: '#007FFF',
  },
  // notifications
  notifictInvite: {
    marginTop: 0,
  },
  notifictInviteText: {
    marginLeft: 35,
    marginTop: 5,
    fontSize: 20,
    color: '#696969',
  },
  toogleInvite: {
    padding: 20,
    marginLeft: 30,
    width: 330,
    height: 70,
    borderRadius: 22,
    backgroundColor: 'white',
  },
  toogleText: {
    marginBottom: 3,
    fontSize: 20,
    color: 'black',
  },

  toogle: {marginTop: -35},

  inviteButton: {
    fontSize: 17,
    color: 'white',
  },
  invite: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 26,
    backgroundColor: '#007FFF',
    borderWidth: 1,
    borderColor: '#007FFF',
  },
  appcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Invite Buton
  invitePeople: {
    alignItems: 'flex-end',
    marginTop: -32,
  },
  // SignIn Page
  alrenoContainer: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    flex: 1,
    marginTop: 70,
  },
  LPG: {
    width: 350,
    height: 430,
    marginTop: 45,
    borderRadius: 26,
  },
  lpgTank: {
    alignItems: 'flex-start',
    marginTop: 40,
    marginLeft: 40,
    width: 120,
    height: 190,
  },
  smartRefill: {
    alignItems: 'center',
    marginTop: -180,
    marginLeft: 100,
  },
  alreno: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  smartRefillText: {
    color: 'white',
    fontSize: 12,
    color: 'gray',
    marginTop: -8,
  },

  fastDelivery: {
    alignItems: 'flex-start',
    marginTop: 140,
    marginLeft: 30,
  },
  fastDeliveryText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  // #buttons
  signinCreateButton: {
    alignItems: 'center',
    marginTop: 50,
  },
  // Opacity
  signinButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    backgroundColor: '#007FFF',
    borderColor: '#007FFF',
  },
  signinText: {
    fontSize: 17,
    color: 'white',
  },
  createAccout: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#a9a9a9',
    marginTop: 15,
  },
  termsAndCondition: {
    marginTop: 2,
    color: '#696969',
    fontSize: 13,
  },
  // Home Page
  homeContainer: {
    // backgroundColor: "rgb(38, 38,38)",
    // flex: 1,
  },
  homeHeaderContainer: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  home: {
    alignItems: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  // homeText: {
  //   color: "white",
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  helloUser: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  overviewTransac: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  // Opacity
  overviewButton: {
    width: 140,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    backgroundColor: '#007FFF',
    borderColor: '#007FFF',
  },
  overviewText: {
    color: 'white',
    fontSize: 14,
  },
  usageContainer: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  timeUsage: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  timeUsageText: {
    alignItems: 'center',
  },
  realTimeUsageText: {
    color: 'black',
    fontSize: 30,
    marginBottom: 30,
  },
  tankContainer: {
    // alignItems: "flex-start",
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tankDetails: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  usageTank: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  homeHeaderBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  usagePercentage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usageText: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  remaining: {
    fontSize: 11,
    color: '#C0C0C0',
  },
  remainingPercentage: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
  },
  optionsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 20,
    color: 'white',
  },
  optionOpacity: {
    width: 160,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353839',
    borderRadius: 22,
    marginTop: 15,
  },
  buttomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    // marginTop: 50,
  },
  // Product Page
  productsContainer: {
    backgroundColor: 'rgb(38, 38,38)',
    marginTop: 35,
    flex: 1,
  },
  products: {
    alignItems: 'flex-start',
    marginTop: 15,
    marginLeft: 20,
  },
  productsText: {
    color: 'white',
    fontSize: 30,
    marginLeft: 10,
  },
  backbutton: {
    alignItems: 'center',
    marginTop: -45,
    marginLeft: 100,
    justifyContent: 'space-between',
  },
  nextbutton: {
    alignItems: 'center',
    marginTop: -40,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  backNextBtn: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backNextOpcacity: {
    width: 30,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a9a9a9',
    marginTop: 15,
  },
  productsUserImage: {
    alignItems: 'flex-end',
  },

  userImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column-reverse',
    paddingHorizontal: 30,
  },
  searchbar: {
    alignItems: 'center',
  },
  // search: {
  //   backgroundColor: "#353839",
  //   marginTop: 10,
  //   width: 350,
  //   color: "white",
  //   borderRadius: 15,
  // },

  allFavorite: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  // Opacity
  allFavBtn: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    backgroundColor: '#007FFF',
    borderColor: '#007FFF',
    marginLeft: 25,
  },
  allFavText: {
    color: 'white',
    fontSize: 14,
  },
  petron: {
    alignItems: 'center',
    marginTop: 5,
  },
  gasLpg: {
    width: 350,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 26,
    marginTop: 5,
  },
  gasLpgText: {
    color: '#007FFF',
    fontSize: 16,
  },
  petronContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  // pertronNet: {
  //   backgroundColor: "#353839",
  //   borderRadius: 20,
  //   height: 370,
  //   width: 350,
  // },
  petronGas: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: -30,
  },
  petronTank: {
    width: 110,
    height: 190,
  },
  netwt: {
    alignItems: 'center',
    // flex: 1,
    marginLeft: 85,
  },
  petronGasulText: {
    marginTop: 20,
    marginLeft: 30,
    color: 'white',
    fontSize: 15,
  },
  netwtText: {
    marginLeft: 85,
    color: 'white',
    fontSize: 25,
  },
  quantity: {
    width: 30,
  },
  petronLogo: {
    width: 60,
    height: 75,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    color: '#808080',
  },
  cartButton: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  gasOptionContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  gasOptionBtn: {
    width: 350,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 26,
    marginTop: 6,
  },

  buttomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  cartText: {
    fontSize: 13,
    color: 'white',
  },
  cartOpacity: {
    width: 130,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#696969',
    marginTop: 10,
  },
  // Coming soon
  comingSoon: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 500,
    height: 750,
  },
});
