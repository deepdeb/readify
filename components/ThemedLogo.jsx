import { useColorScheme, Image } from 'react-native'
import React from 'react'

import DarkLogo from '../assets/img/read_dark.jpeg'
import LightLogo from '../assets/img/read_light.jpeg'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
    return (
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo