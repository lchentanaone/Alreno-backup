/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Avatar} from 'react-native-paper';
import {styles} from './../Styling/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';
import {
  Text,
  SafeAreaView,
  View,
  Linking,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import {auth, db} from '../../../../../../firebase/firebase';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

const Profile = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [firstName, setFirsname] = useState('');
  const [lastname, setLastname] = useState('');
  // const user = auth.currentUser.uid;

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.replace('Sign in');
    });
  };

  firebase.auth().onAuthStateChanged(currentUser => {
    // console.log("astalabista: ", currentUser);

    if (currentUser) {
      const docRef = db.collection('user_info').doc(currentUser.uid);
      docRef.get().then(doc => {
        console.log(docRef);
        const {firstname, lastname} = doc.data();
        setFirsname(firstname);
        setLastname(lastname);
      });
    } else {
      setFirsname('');
      setLastname('');
    }
  });

  return (
    <SafeAreaView style={styles.profileContainer}>
      <ScrollView>
        <View>
          <Avatar.Image
            style={styles.image}
            marginLeft={150}
            size={100}
            source={require('../../assets/prof.jpg')}
          />
          <Text style={styles.name}>
            {firstName} {lastname}
          </Text>
          <Text style={styles.link}>{auth.currentUser?.email}</Text>
          <View style={styles.edit}>
            <TouchableOpacity
              style={styles.editProfileOpacity}
              onPress={() => navigation.navigate('Edit your Profile')}>
              <Text style={styles.textButton}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.notifictInvite}>
            <Text style={styles.notifictInviteText}>Notifications</Text>
            <View style={styles.toogleInvite}>
              <Text style={styles.toogleText}>Turn on Notifications</Text>
              <Switch
                style={styles.toogle}
                trackColor={{false: 'black', true: 'gray'}}
                thumbColor={isEnabled ? 'white' : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View style={styles.notifictInvite}>
            <Text style={styles.notifictInviteText}>Invite Link</Text>
            <View style={styles.toogleInvite}>
              <Text style={styles.toogleText}>Invite People</Text>
              <View style={styles.invitePeople}>
                <TouchableOpacity
                  style={styles.invite}
                  onPress={() => navigation.navigate('Coming Soon')}>
                  <Text style={styles.inviteButton}>Invite People</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.logout}>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ProfileButtomicons}>
            <TouchableOpacity style={styles.iconOpacity}>
              <AntDesign
                name="home"
                size={30}
                color="black"
                onPress={() => navigation.navigate('Home')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconOpacity}>
              <Ionicons
                name="md-add-circle-sharp"
                size={40}
                color="#007FFF"
                onPress={() => console.log('Add')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconOpacity}
              onPress={() => navigation.navigate('Wi-Fi')}>
              <AntDesign name="setting" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
