import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,ScrollView} from 'react-native';

import ScrollFlatDemo from './components/ScrollFlatDemo';
import FlatListDemo from './components/FlatListDemo';

export default class App extends React.Component {
  constructor(props) {
    super(props)

// states of APP
    
this.state={
      text:'',
      verticalScroll:true,
      horizScroll:true,
    }
    // binding to this
    this.changeStatus = this.changeStatus.bind(this);
  }
  // making verticalScrolling false when loaded
  componentWillMount() {
    this.setState({text:'Show Names',verticalScroll:false})
  }
  // called when button is pressed
  changeStatus() {
    if(this.state.text=='Show Names') {
    this.setState({text:'Hide Names'});
    this.setState({verticalScroll:true});

  }
    else { 
    this.setState({text:'Show Names'});
    this.setState({verticalScroll:false});
  }
  }

  render() {
  
    // var scrollMode = 'horizontal';      // or horizontal or vertical
    
    return (
      // rendering As a ScrollView
 
  <ScrollView style={{marginTop:10}}>

    <View style={styles.container}>
              <Text style={{marginTop:40}}>ScrollView & FlatList Demo</Text>
            
            {/* button to show/hide */}

            <TouchableOpacity>
              <Text style = {styles.textButton} onPress={this.changeStatus}>
                {this.state.text}
              </Text>
            </TouchableOpacity>

        {
          this.state.verticalScroll?<ScrollFlatDemo scrollMode='vertical'/>:<Text></Text>
        }
        {/* some Views  */}
        
        <Text>  View 1 </Text>
        <Text>  View 2 </Text>
        <Text>  View 3</Text>
        
{/* horizontal scrolling */}
{/* using ScrollView */}

        <ScrollFlatDemo scrollMode='horizontal' />

        {/* some bottome part */}
        
        <View style={styles.item}>
        <Text style={{color:'white'}}>  Bottom 1 </Text>
        </View>
        
        <View style={styles.item}>
        <Text style={{color:'white'}}>  Bottom 2 </Text>
        </View>

        <View style={styles.item}>
        <Text style={{color:'white'}}>  Bottom 3</Text>
        </View>

{/* horizontal scrolling */}
{/* using FlatList */}
      
          <FlatListDemo scrollMode='horizontal' />
      
    </View>
  </ScrollView>
  
  );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    // width:140,
    padding:10,
    fontSize:20,
    marginTop:10,
    fontWeight:'bold',
    borderRadius:30,
    color:'white',
    textAlign:'center',
    backgroundColor: 'green',
  },
  item: {
    flexGrow:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    color:'white',
    backgroundColor: 'green',
 }
});
