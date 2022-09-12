import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const Layout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
}


const PortfolioHeader = () => {
  return (
    <View style={styles.header}>
        <Image style={styles.img} source={require('../../image/avatar.png')}/>
      <Text style={styles.text}>Frontend-developer</Text>
      
    </View>
  )
}

export default PortfolioHeader

const styles = StyleSheet.create({
    header:{
        paddingTop: Layout.height *0.03,
        paddingBottom: Layout.height *0.1,
        alignItems: 'center',
        backgroundColor: '#39496c',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    text:{
        fontSize: 15,
        backgroundColor: '#e2dbdb',
        marginHorizontal: Layout.width*0.2,
        textAlign: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 20,
        padding: 8,
        overflow: 'hidden'
        
    },
    img:{
        width: 150,
        height: 150,
        borderRadius: 40
       
        
        
    }
})