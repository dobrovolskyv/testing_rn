import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Card = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster 
    } = props

  return (
    <View style={styles.bodyCard} id={id}>
    <View >
        {
            poster === "N/A" ?
                <Image style={styles.img} source={{uri: `https://via.placeholder.com/80x100?text=${title}`}} /> :
                <Image style={styles.img} source={{uri: poster}} />
        }

    </View>
    <View style={styles.card}>
        <Text style={styles.text}>{title}</Text>
        <Text>{year} <Text>{type}</Text></Text>
    </View>
</View>
  )
}

export default Card

const styles = StyleSheet.create({
    img:{
        width: 100,
        height: 100
    },
    text:{
        width: 100,
        fontWeight: 'bold',
        flexWrap: 'wrap'
    },
    card:{
        
    },
    bodyCard:{
        width: 150,
        height: 150,
        margin: 10
    }
})