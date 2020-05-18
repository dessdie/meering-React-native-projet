import React from 'react';
import { 
  StyleSheet,
  View, 
  Dimensions, FlatList, Text,Image, Button} from 'react-native';
import AfficherLigne from './AfficherLigne';
import meetings from './../data/MeetingData'
import { TextInput } from 'react-native-gesture-handler';
import search from './../images/search.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


 class ListeMeeting extends React.Component {

  constructor(props) {
    super(props);
    this.state={ listeMeeting:[], lieuRecherche:'',dateRecherche:''}
    
  }


  _afficherDetail=(meeting) =>{
    
    this.props.navigation.navigate('DetailMeeting', {meeting: meeting})
  }


  componentDidMount(){

    this.state.listeMeeting=meetings;
  }

  rechercher = ()=>{
    
    var meetingRecherché=[]
    var trouve = false
    if(this.state.dateRecherche!='' ){
        if(this.state.lieuRecherche!=''){
              for(var index in meetings){
                if(meetings[index].lieu==this.state.lieuRecherche.toLocaleLowerCase() && meetings[index].date==this.state.dateRecherche){
                  meetingRecherché.push(meetings[index])
                  trouve = true
                }
              }
        }else{

          for(var index in meetings){
            if( meetings[index].date==this.state.dateRecherche){
              meetingRecherché.push(meetings[index])
              trouve = true
            }
          }
        }
      
    }else{

      for(var index in meetings){
        if(meetings[index].lieu==this.state.lieuRecherche.toLocaleLowerCase() ){
          meetingRecherché.push(meetings[index])
          trouve = true
        }
      }
    }
    if(trouve==false){
      alert("Aucun resultat trouvé")
    }else{
      this.setState({listeMeeting:meetingRecherché})
    }
  }
  
  recharger=()=>{
    this.state.lieuRecherche=''
    this.state.dateRecherche=''
    this.setState({listeMeeting:meetings});
  }
  

  
  render() {
    
    return (
      
        
      <View style={styles.container}>
          
          <View style={styles.recherche}>
           <TouchableOpacity
                onPress={()=>{
                  this.props.navigation.navigate("AjoutMeeting");
                }}
                >
                  <Text style={{color:"#08afd9",marginRight:7,fontSize:17}}>Ajouter</Text>
              </TouchableOpacity>

            <TextInput style={styles.input}
            placeholder="Rechercher: lieu"
            onChangeText={(text) => this.setState({lieuRecherche:text})}
            value={this.state.lieuRecherche}

            ></TextInput>

            
            <TouchableOpacity
                onPress={this.rechercher}
            >
            <Image source={search}
            
            style={{height:30,width:30,alignContent:"center",justifyContent:"center"}}
            ></Image>
            </TouchableOpacity>

          </View>
          <View style={styles.recherche}> 
                <View style={{flex:1,top:7}}>
                <Icon 
                name='autorenew'
                type='material'
                color='#ff2e63'
                onPress={this.recharger}
                />
                </View>
                <View style={{flex:4}}>
                <DatePicker
                        style={{
                        
                          alignItem:"center" ,
                          alignContent:"center",
                              
                        }}
                        date={this.state.dateRecherche}
                        mode="date"
                        placeholder="filtre par date"
                        format="YYYY-MM-DD"
                        minDate="2020-05-16"
                        maxDate="2025-05-16"
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
                            
                            width:200,
                          }
                          
                        }}
                        onDateChange={(date) => {
                          this.setState({dateRecherche: date})
                          
                      }}
                              />
                            </View>
          </View>

          <View style={{
              flex: 4,
          }}>
                <FlatList
                
                data={this.state.listeMeeting}
                keyExtractor={item => item.id.toString()}
                renderItem={ ({ item,index }) => <AfficherLigne meetings={item} index={index} recharger={this.recharger}  afficherDetail={this._afficherDetail}/>}
                >
                
                </FlatList>
          </View>  
        
      </View>
      
      
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#fff',
    
    
    
  },
  recherche:{
    flexDirection:'row',
    borderBottomWidth:2,
    borderBottomColor:'#eaeaea',
    alignContent:'center',
    justifyContent:'center',
    padding:10,
    
  },
  input:{
    height:30,
    backgroundColor:'#eaeaea',
    marginRight:2,
    alignContent:"center",
    paddingLeft:10,
    color:'grey',
    borderRadius:7,
    flex:3

  }
});

export default ListeMeeting