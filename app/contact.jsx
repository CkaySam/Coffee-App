import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import CoffeeImage from '../assets/images/menu/contactpagecoffee.jpg'

const contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.coffeeimage}>
        <ImageBackground
          source={CoffeeImage}
          resizeMode='cover'
          style={styles.coffeeimage}
        ></ImageBackground>
      </View>

      <View style={styles.container1}>
        <Text style={styles.header}>Contact Us</Text>
      </View>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  container1: {
    padding: 20,
    borderRadius: 10,
  },
  coffeeimage: {
    width: '100%',
    height: '100%',
  }
})