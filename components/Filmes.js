import React, { Component } from 'react';

import { View ,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';

// import styles from './styles';

export default class Filmes extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    onSubmitHandler = (id) =>{
        console.log("ID",id);
        this.props.fetchId(id);
    }
  render() {

      return(
        <TouchableOpacity onPress={()=>this.onSubmitHandler(this.props.id)}  style={styles.card}>
            
            <Text style={{fontSize:24,fontFamily:'Ubuntu-Regular',color:"yellow"}}>{this.props.data.id + 1} )  {this.props.data.title}</Text>

        </TouchableOpacity>
    
    
      )
  }
  
}

const styles = StyleSheet.create({

    card:{
        flex:1,        
        backgroundColor:'#000000',
        borderWidth:.5,
        borderColor:"#ececec",
        width:Dimensions.get('window').width-20,
        marginTop:10,
        elevation:4,
        justifyContent:'center',
        alignItems:'center'
        
    }
})
