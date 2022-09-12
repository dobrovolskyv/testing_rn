import { StyleSheet, Text, View, ScrollView, Linking} from 'react-native'
import React from 'react'
import PortfolioHeader from '../components/portfolio/PortfolioHeader'
import Resume from '../components/portfolio/Resume'
import Skills from '../components/portfolio/Skills'
import Contact from '../components/portfolio/Contact'


const Portfolio = ({navigation}) => {
  const linkGitHub = () => { Linking.openURL('https://github.com/dobrovolskyv') }
  return (
    <ScrollView style={styles.main}>
       <Text style={styles.link} onPress={linkGitHub}>My GitHub</Text>
        <PortfolioHeader />
    <Resume />
    <Skills/>
    <Contact/>
    </ScrollView>
  )
}

export default Portfolio

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#cccccc'
        
    },
    link: {
      textAlign: 'right',
      paddingVertical: 10,
      paddingRight: 20,
      fontSize: 20,
      backgroundColor: '#39496c',
      color: 'white'

    },
    
})