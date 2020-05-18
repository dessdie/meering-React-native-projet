import React ,{ useState } from 'react';
import { StyleSheet, View,TextInput, Button,Picker,Component,Text ,Dimensions} from 'react-native';
import meetings from './../data/MeetingData';
import Salle from './../data/salles';
import DatePicker from 'react-native-datepicker';




var newId=1;

export default class AjoutMeeting extends React.Component {
  
  constructor(props) {
    super(props);
    this.forceUpdate;
    this.state = { titre: '',lieu:'',datetime:'',salle:'',participants:'',id:0};
    }

    onNewValueSelected = (newVal) => {
      
      this.setState({salle: newVal});
  }

  ajouter= ()=>{
    
      var dateTime = this.state.datetime.split(" ");
      

      if(this.state.titre!='' && this.state.lieu!='' && this.state.datetime!='' && this.state.participants!=''){
       
        var trouve=false;
        var sallereunion = this.state.salle.toLowerCase();

        for(var index=0;index<=9;index++){
          
          if(sallereunion==Salle[index].nom){
            trouve = true;
            var i=index;
            }
          
          }
        
        if(trouve==true){
          const meet={ "id": newId, "salle":Salle[i].nom,"titre": this.state.titre,"participant": this.state.participants,"time":dateTime[1],"date":dateTime[0],"lieu": this.state.lieu.toLowerCase()}
      
            meetings.push(meet);
            
            newId++;
            alert("Cette reunion a ete ajouté")
            this.props.navigation.navigate("meeting",{meetings: meetings})
        }else{
          alert("Cette salle n'est pas disponible !")
        }
        
      }else{
        alert("Remplissez tous les champs" );
      }

}
    
   
  render(){
    
    
    
    const myloop =[];

    for(var i = 0; i<=9;i++){
      var label = Salle[i].nom+" | Disponiblite: "+Salle[i].dispo;
        myloop.push(
          
          
        );
  }

  return (

    
    <View style={styles.container}>

          <View>
                <View>
                <TextInput style={styles.input} placeholder="titre"
                          onChangeText={(text) => this.setState({titre:text})}
                          value={this.state.titre}
                          
                ></TextInput>
                </View>

                <View>
                <TextInput style={styles.input} placeholder="Lieu"
                          onChangeText={(text) => this.setState({lieu:text})}
                          value={this.state.lieu}
                          
                ></TextInput>
                </View>

                <View>
                <TextInput  style={styles.input}
                    placeholder="participants"
                    onChangeText={(text) => this.setState({participants:text})}
                    value={this.state.participants}
                    keyboardType="email-address"
                ></TextInput>
                </View>
          </View>
          <View style={{marginTop:7,}}>
                    
          <DatePicker
              style={{

                width:250,
              }}
              date={this.state.datetime}
              mode="datetime"
              placeholder="select date"
              format="YYYY-MM-DD hh:mm"
              minDate="2020-05-16 00:00"
              maxDate="2025-05-16 23:59"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                
              }}
              onDateChange={(date) => {this.setState({datetime: date})
                                          
            }}
            />

            <TextInput style={styles.input} placeholder="Salle: salle 1 à salle 10"
                          onChangeText={(text) => this.setState({salle:text})}
                          value={this.state.salle}
                          
                ></TextInput>

                </View>
          

          
          <View style={styles.buttonD}>
            <View
            style={{flex:1}}
            >
            <Button 
                color="#ff2e63"
                title='cancel'
                
                onPress={()=>this.props.navigation.goBack() }
            ></Button>
            </View>

            <View  style={{flex:1}}
            >
            <Button 
            color="#252a34"
            title='s a v e'
            style={{flex:1}}
            onPress ={this.ajouter}
            ></Button>
            </View>
          </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  

  input: {
    height:40,
    backgroundColor:'#eaeaea',
    alignContent:"center",
    paddingLeft:10,
    fontSize:20,
    color:'grey',
    borderRadius:7,
    marginTop:10,
  },
  buttonD: {
    
    marginTop:7,
    backgroundColor:"#252a34",
    flexDirection:'row',
    
    
  }
});

