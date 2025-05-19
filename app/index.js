import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/read.jpeg'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  logo: {
    height: 50,
    width: 50,
    marginVertical: 20
  }
})