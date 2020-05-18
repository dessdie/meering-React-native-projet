import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import { Icon } from 'react-native-elements';
import iconeMeeting from './../images/meeting.png' ;
import meetings from './../data/MeetingData';

class DetailMeeting extends React.Component{


    render(){
     
        const meeting = this.props.route.params.meeting
        
        
      return(
        
        <View 
        
        style={styles.row}>
  
        <Image source={iconeMeeting}
        style={{width:70,height:70,padding:25}}
        ></Image>
        <View style={{width: 250}} >
            
            <Text style={styles.primaryText}>
                {meeting.titre}
            </Text>
            <Text style={styles.secondaryText}>
             {meeting.participant}
            </Text>
        </View>
        <View>
            <Text style={styles.date}>
                Heure: {meeting.time} DATE: {meeting.date} LIEU: {meeting.lieu} ID:{ meeting.id}
            </Text>
        </View>
        <View style={styles.icon}>
                <Icon 
                name='delete'
                type='material'
                color='#ff2e63'
                onPress={()=>{
                  
                  for(var index in meetings){
                    if(meetings[index].id==meeting.id)
                    var indexSupp=index;
                  }
                  
                 if(indexSupp){
                  meetings.splice(indexSupp,1);
                  alert("reunion supprimé");
                  this.props.navigation.navigate("meeting",{meetings: meetings})
                 }
        
                }}
                />
        </View>
      </View>

      
      )
    }
  }
  
  export default  DetailMeeting;
  
  const styles = StyleSheet.create({
    row: { 
        
      
      alignContent:"center",

    },
    picture: { 
        height:100,
        width:100,
        alignItems:"center",
    },
    primaryText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#252a34',
      marginBottom: 4,
      justifyContent:"center",
      padding:8,
      textAlign:"center"

    },
    secondaryText: { color: 'grey',
    padding:15,
    },
  
    icon: {
      
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      alignContent:'center',
      
    },
    date:{
        fontSize:13,
        marginTop:2,
        padding:19,
        alignItems:"flex-end",
        color:"#08afd9",
      }
  })