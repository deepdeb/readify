import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/read.jpeg'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

      <Link style={styles.link} href="/about">About</Link>
      <Link style={styles.link} href="/contact">Contact</Link>

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
  },
      link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})