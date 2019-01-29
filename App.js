/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,ScrollView} from 'react-native';
import Filmes from './components/Filmes';
import Axios from 'axios';
import {resultsFilmes} from './store';

export default class App extends Component {
  state = {
    filmes:[],
    altura:0,
    opening_crawl:'',
    title:''
  }
  

   componentDidMount(){
    this.filmesFetch();
   }
   fetchId = (id) =>{
    alert("Título: "+this.state.filmes[id].title+"\nEpisódio: "+this.state.filmes[id].opening_crawl );
   }
   filmesFetch = ()=>{
     const url = 'https://swapi.co/api/films';    
     const altura = Dimensions.get('screen').height;
     const results = [];
     const filmes = [];
     Axios.get(url)
     .then((response)=>{
      const {results} = response.data;
        results.map((row,i)=>{
          filmes.push({id:i,...row})
        })
        this.setState({
          filmes
        })
     })
     .catch((err)=>console.log(err))
   }
  
  render() {
    
    return (
      <View style={styles.container}>                
        {this.state.filmes.map((data,k)=>(
          <Filmes id = {k} key={k} data = {data} fetchId ={this.fetchId}/>

        ))}
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    flexDirection:'column',
  },


});
