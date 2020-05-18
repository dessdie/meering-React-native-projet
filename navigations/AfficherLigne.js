
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';
import iconeMeeting from './../images/meeting.png' ;


class AfficherLigne extends React.Component{

  constructor(props){
    super(props);
    this.navigation=props.navigation;
  }
  
  render(){
   const ListeMeetings = this.props.meetings;
    const afficherDetail = this.props.afficherDetail
    

    return(
        <View>
            <TouchableOpacity 
            onPress ={ ()=> afficherDetail(ListeMeetings)
                
            }
            style={styles.row}>

            <Image style={styles.picture} source={ iconeMeeting } />
                    <View style={{width: 250,flexDirection:"column"}} >
                        <Text style={styles.primaryText}>
                            {ListeMeetings.titre}
                        </Text>
                        <Text style={styles.secondaryText}>
                            {ListeMeetings.participant}
                        </Text>

                        <Text style={styles.date}>
                            le {ListeMeetings.date} {ListeMeetings.time}  à {ListeMeetings.lieu} 
                        </Text>
                    </View>
                    
            </TouchableOpacity>

        </View>
    )
  }
}

export default  AfficherLigne;

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    padding: 12 ,
    backgroundColor:'#f7f7f7',
    margin:7,
    borderRadius:10,
    flex:1
  },
  
  picture: { width: 50,
     height: 50,
      borderRadius: 25,
       marginRight: 18,
       justifyContent:"center",
       alignItems:"center",
     },

  primaryText: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#252a34',
    marginBottom: 4,
  },
  secondaryText: { 
    color: 'grey',
    fontSize:11,


  },

  icon: {
    
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  date:{
    fontSize:12,
    marginTop:10,
    padding:0,
    alignItems:"flex-end",
    color:"#08afd9",
  }
})