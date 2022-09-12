import {StyleSheet} from 'react-native';

export const formStyles = StyleSheet.create({
  SignInHeader: {
    width: 400,
    height: 50,
    backgroundColor: 'white',
    marginTop: 20,
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
  SignInHeaderText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  // Sign In form
  signInContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  alrenoContainer: {
    alignItems: 'center',
  },
  alrenoLogo: {
    marginTop: 20,
    height: 190,
    width: 230,
    resizeMode: 'contain',
  },

  textFieldBg: {
    width: '80%',
    maxWidth: 300,
  },
  SignTextField: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  signInBtnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  // text color
  SignInputField: {
    fontSize: 17,
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
    borderColor: 'lightgray',
  },

  signInUpOpacity: {
    width: 300,
    height: 45,
    shadowColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#007FFF',
  },
  SignIntextBtn: {
    fontSize: 17,
    color: 'white',
    justifyContent: 'center',
  },
  signInBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  forgotOpacity: {
    width: 130,
    height: 35,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: -20,
    marginLeft: 160,
  },
  forgotText: {
    fontSize: 15,
    color: '#696969',
    justifyContent: 'center',
  },
  goCreateLink: {
    fontSize: 15,
    color: '#0247fe',
    display: 'flex',
  },

  goCreateOpacity: {
    justifyContent: 'center',
    marginLeft: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
  goCreateText: {
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
  },
  goSignUpText: {
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
    marginRight: 25,
  },
  // --------------------ForgotPage---------------//
  forgotImageBckgnd: {
    width: 380,
    height: 250,
    marginTop: 10,
  },
  forgotImageText: {
    alignItems: 'center',
    marginTop: 100,
    marginLeft: 130,
  },
  forgotTexts: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  forgotPassContainer: {
    alignItems: 'center',
  },
  forgotSubmitOpacity: {
    width: 300,
    height: 45,
    shadowColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#007FFF',
  },
  forgotSubmitText: {
    color: 'black',
    fontSize: 15,
  },

  // ------------------ create form ---------------------------------
  createContainer: {
    backgroundColor: '#008b8b',
    flex: 1,
  },
  textContainer: {
    marginTop: 90,
  },
  FieldsContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 750,
  },
  createText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
  },
  createTextField: {
    width: 300,
    marginLeft: 50,
    marginTop: -120,
  },
  createInputField: {
    color: 'black',
    width: 300,
    marginTop: 10,
  },
  signUpBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  createTextBtn: {
    fontSize: 17,
    color: 'white',
    justifyContent: 'center',
  },

  // Edit Profile Form

  editProfContainer: {
    backgroundColor: '#ffff', //"#d3d3d3"
    alignItems: 'center',
    flex: 1,
    // marginTop: 30,
  },

  editTextField: {
    width: 280,
    marginTop: 20,
  },
  editText: {
    marginTop: 20,
    fontSize: 25,
    color: 'white',
    justifyContent: 'center',
  },
  editTextContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  profImage: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 100,
  },
  profImageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  editImgBackground: {
    width: 400,
    height: 250,
  },
  image: {
    justifyContent: 'center',
    marginTop: 10,
  },
  editFieldContainer: {
    width: 330,
    height: 500,
    borderRadius: 6,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 9,
  },
  // for Wifi Page
  SettingsContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  wifiContainer: {
    backgroundColor: 'white',
    height: 280,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 4,
  },
  wifiOpacity: {
    width: 300,
    height: 45,
    shadowColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#f2f3f4',
  },
  wifiText: {
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
  },
  wifiTextblack: {
    color: 'black',
    fontSize: 40,
  },
  wifiBtn: {
    marginTop: 10,
  },
  wifiTextfield: {
    width: 290,
  },
  textFieldBackground: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 55,
    marginTop: 15,
  },
  // For Tank Weight  input
  tankWeightContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  tankWeightsContainer: {
    backgroundColor: 'white',
    height: 280,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  tankTextblack: {
    color: 'black',
    fontSize: 40,
    alignItems: 'flex-start',
  },
});
