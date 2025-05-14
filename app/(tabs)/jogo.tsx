import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

export default function Sobre(){
    return (
    <ParallaxScrollView
            headerColors={{light: '#A1CEDC',dark: '#1D3D47',
            }}>
        <ThemedText>This app includes example code to help you get started.</ThemedText>
    </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
},
titleContainer: {
    flexDirection: 'row',
    gap: 8,
},
});
