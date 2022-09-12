import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CardList = (props) => {
    const {movies= []} = props

    if(movies.length) {}
  return (
    <View style={styles.list}>
        {movies.length ?
                (movies.map(movie => {
                    return <Card key={movie.imdbID} {...movie} />
                })) : <Text style={styles.text}>Nothing found</Text>
            }
    </View>
    
  )
}

export default CardList

const styles = StyleSheet.create({
    text:{
        fontSize: 50,
        paddingTop: 20
    },
    list:{
        
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        
        
    }
})