import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.logo} />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>
      <Spacer height={10} />

      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <Link style={styles.link} href="/about">
        <ThemedText>About</ThemedText>
      </Link>
      <Link style={styles.link} href="/contact">
        <ThemedText>Contact</ThemedText>
      </Link>

    </ThemedView>
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
    height: 100,
    width: 100
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})