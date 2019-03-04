import React, { Component } from 'react';
import { Text,View,StyleSheet,ScrollView } from "react-native";

export default class ScrollFlatDemo extends Component{
    state = {
        names: [
           {'name': 'Jayprakash kumar', 'id': 1},
           {'name': 'Rakesh Viswarkarna', 'id': 2},
           {'name': 'Vivek Kumar', 'id': 3},
           {'name': 'Pranav Kumar', 'id': 4},
           {'name': 'Kuldeep Kumar', 'id': 5},
           {'name': 'Mohan Kumar Sah', 'id': 6},
           {'name': 'Aryan Kumar', 'id': 7},
           {'name': 'Ankit Kumar', 'id': 8},
           {'name': 'Priya jain', 'id': 9},
           {'name': 'Keerthi Eng', 'id': 10},
           {'name': 'Rakesh Alle', 'id': 11},
           {'name': 'JayAryan Karan', 'id': 12}
        ]
     }
    render(){
       
        verScroll=false;
        horScroll=false;
        status=true;
        num=2;
        if(this.props.scrollMode=='vertical')
        verScroll=true;
        
        if(this.props.scrollMode=='horizontal')
        horScroll=true;

        return (
            <View style={{flex:1,alignItems:'center',marginTop:30}}>

{/* ScrollView:

ScrollView must have a bounded height in order to work
ScrollView simply renders all its react child components at once.
Dont' use If you have very long list of items
So Now FlatList comes in picture

FlatList :

FlatList renders items lazily, just when they are about to appear,
and removes items that scroll way off screen to save MEMPRY and PROCESSING TIME.
FlatList is also handy if you want to render separators between your items, 
multiple columns, infinite scroll loading, or any number of other features it supports out of the box. */}

          <ScrollView 

                  horizontal={horScroll} 
                  vertical={verScroll} 
                  style={{flex:1}}
                  // ALL OTHERS PROPS CAN BE APPLIED as functionality
                  //  maximumZoomScale={num} 
                  // ....etc
               >
               
                     {/* Rendering the Data using map to iterate over all */}

                  {  
                     this.state.names.map((item, index) => (
                        <View key = {item.id} style = {styles.item}>
                           <Text>{item.name}</Text>
                        </View>
                     ))
                  }

                  {/* one last view Rendering at bottom */}
         
                        <View key = {'key' + 100} style = {styles.item}>
                           <Text> The End</Text>
                        </View>

         </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create ({
    item: {
       flexGrow:1,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 30,
       margin: 2,
       borderColor: '#2a4944',
       borderWidth: 1,
       backgroundColor: '#d2f7f1',
    }
 })