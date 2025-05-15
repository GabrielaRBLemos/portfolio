import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

export default function ExperienciaProfissional(){
    return (
    <ParallaxScrollView>
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