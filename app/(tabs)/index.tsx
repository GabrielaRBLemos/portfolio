import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { Linking, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
            headerColors={{light: '#A1CEDC',dark: '#1D3D47',
            }}>
      <ThemedText type='title'>Gabriela R. B. Lemos</ThemedText>
      <ThemedText type='subtitle'>Cientista de Dados</ThemedText>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
          Eu sou uma estudante e <Text style={styles.emphasis}>pesquisadora de ciência da computação</Text> na <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://portal.unicap.br/')}
          >
            Universidade Católica de Pernambuco
          </Text>, com experiência em pesquisa científica, análise e ciência de dados 
          com habilidades em <Text style={styles.emphasis}>Python</Text> e <Text style={styles.emphasis}>SQL</Text>. 
          No meu tempo livre eu gosto de ler, fazer <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://github.com/GabrielaRBLemos')}
          >
            projetos de ciência de dados
          </Text> 
          e fazer yoga. Espero que você goste do meu site!
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  paragraphContainer: {
    padding: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  emphasis: {
    fontStyle: 'italic',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
