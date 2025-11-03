import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CoffeeImage from '../assets/images/menu/contactpagecoffee.jpg';

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
        <Text style={styles.desc}>For more enquiries, you can reach us on the following contacts:</Text>
        <Text style={styles.info}><Text style={styles.head}>Email:</Text> coffeeshop45@example.com</Text>
        <Text style={styles.info}><Text style={styles.head}>Phone:</Text> (555)-465-4553</Text>
        <Text style={styles.info}>
          <Text style={styles.hourshead}>Working Hours</Text>
          <Text>
            {'\n'}Monday - Friday: 8:00 AM - 8:00 PM
            {'\n'}Saturday - Sunday: 9:00 AM - 6:00 PM
          </Text>
        </Text>
      </View>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  container1: {
    padding: 20,
    width: '100%',
  },
  coffeeimage: {
    width: '100%',
    height: '100%',
  },
  desc: {
    marginBottom: 10,
  },
  head: {
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 20,
  },
  hourshead: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
})