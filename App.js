import React from 'react';
import { StyleSheet,Image, View,Text,Button,TextInput  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListeMeeting from './navigations/ListeMeeting';
import DetailMeeting from './navigations/DetailMeeting';
import AjoutMeeting from './navigations/AjoutMeeting';
//import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="meeting"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ff2e63',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
              
              
            },
            
          }}
      >
        <Stack.Screen
          name="meeting"
          component={ListeMeeting}
          options={{

            headerTitle: props => <View style={{
              flexDirection:'row',
            }}>
                  <Image
                    style={{ width: 100, height: 50 }}
                    source={require('./images/logo.png')}
                 />


          </View>,

              headerRight: () => (
                <View></View>

                ),


          }}
        />
        <Stack.Screen name="DetailMeeting" component={DetailMeeting}
        options={{title: 'meeting infos'}} />
        <Stack.Screen name="AjoutMeeting" component={AjoutMeeting}
        options={{title: 'ajouter meeting'}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHeader:{
    fontWeight:"500",
    color:'#fff',
    fontSize:30,
    justifyContent:"center",
    alignItems:"center",
    
  },
  input:{

    borderBottomWidth:2,
    borderBottomColor:"white",
    height:30,
    color:'white' ,
    

  }

});
