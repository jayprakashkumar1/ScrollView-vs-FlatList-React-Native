import React, { Component } from 'react';
import { Text,View,StyleSheet,FlatList } from "react-native";
export default class FlatListDemo extends Component{
    // array of data for FlatList
    state = {
        names: [
           {'name': 'jay kumar', 'id': 1},
           {'name': 'Rakesh Main', 'id': 2},
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
        // isrefreshing=true;
        // status=true;
        // num=4;

        return (
            <View style={{flex:1,alignItems:'center',marginTop:30}}>
{/*                 
     FlatList  example 
    required : data & renderItem 
*/}                
                <FlatList
                    data={this.state.names}
                    renderItem={({item,index}) => <View key = {item.id} style = {styles.item}>
                                            <Text>{item.name}</Text>
                                            </View>
                    }
                // these all are optional props

                    keyExtractor={(item, index) => 'key' + item.id}  // should return string NOT NUMBER

                    // initialScrollIndex={num}
                    // initialNumToRender={num}
                    // inverted={status}             // works
                    // horizontal=true               // works

                    // refreshing={isrefreshing}
                    // onRefresh = {()=>alert("refreshed")}   // works when refreshing='true'
                    //.etc
                />
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