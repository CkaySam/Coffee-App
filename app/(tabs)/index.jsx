import IceCoffee from "@/assets/images/coffee1.jpg"
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={IceCoffee}
        resizeMode='cover'
        style={styles.image}
        >
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  }
})