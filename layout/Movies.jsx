import { StyleSheet, Text, View, ActivityIndicator, Alert, FlatList, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react';

import Search from '../components/movies/Search';
import CardList from '../components/movies/CardList';


const Movies = ({navigation}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
      fetch(`https://www.omdbapi.com/?apikey=fd7abf30&s=iron`)
      .then(response=> response.json())
      .then(data=>{
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err)=>{
        setLoading(false)
        Alert.alert('error', 'нет ответа от сервера')
      })
    }, [])

    const searchMovies = (str, type = 'all') =>{
        fetch(`https://www.omdbapi.com/?apikey=fd7abf30&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response=>response.json())
        .then((data)=>{
            setMovies(data.Search);
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(false)
            Alert.alert('error', 'такой фильм не найден ')
        })
    }
    

    if(loading){
        return <View style={styles.loader}>
             <ActivityIndicator size='35'/>
            <Text>loaded movies</Text>
        </View>
    }

  return (
    
    <View style={styles.body}>
       <TouchableOpacity onPress={()=> navigation.navigate('Portfolio')} ><Text style={{fontSize: 30}}>Моё резюме -&gt; </Text></TouchableOpacity>
        <Search searchMovies={searchMovies} />
        <FlatList 
    data={movies}
    renderItem={() => <CardList movies={movies}/>}
    />
    </View>
    
  )
}

export default Movies

const styles = StyleSheet.create({
    loader:{ 
        marginTop: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    body:{
      overflow: 'hidden'
    }
})