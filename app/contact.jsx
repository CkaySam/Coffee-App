import { StyleSheet, Text, View } from 'react-native'

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>explore</Text>

      <View style={styles.container1}>
        <Text style={styles.text1}>
          Hello from Coffee Shop. This is simply just a coffee shop. 
          We serve all kind of morning beverages and hot teas. 
          We are located all around the world since we have a lot of branches. 
          You can also visit our website at &apos;www.coffeeshop.com&apos; 
          or email us at &apos;coffeeshop@gmail.com&apos; for more information. 
          Thank you!
        </Text>
      </View>

    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'orange',
  },
  container1: {
    marginTop: 100,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
})