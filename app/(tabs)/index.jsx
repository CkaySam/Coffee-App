import IceCoffee from "@/assets/images/coffee1.jpg"
import { Link } from 'expo-router'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={IceCoffee}
        resizeMode='cover'
        style={styles.image}
        >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </Pressable>
        </Link>
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
  title: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
})