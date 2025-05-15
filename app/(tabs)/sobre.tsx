import { ThemedText } from '@/components/ThemedText'; // Supondo que você tenha um componente ThemedText
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const Sobre = () => {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <ThemedText style={[styles.header, { color: textColor }]} type="title">Sobre o App</ThemedText>
        <ThemedText style={[styles.paragraph, { color: textColor }]}>
          Este aplicativo foi desenvolvido utilizando as seguintes tecnologias:
        </ThemedText>

        <ThemedText style={[styles.subHeader, { color: textColor }]}>Tecnologias Utilizadas:</ThemedText>
        
        <ThemedText style={[styles.paragraph, { color: textColor }]}>
          <strong>React:</strong> Uma biblioteca JavaScript para construir interfaces de usuário. Utilizada para criar a estrutura do aplicativo.
        </ThemedText>
        
        <ThemedText style={[styles.paragraph, { color: textColor }]}>
          <strong>Expo:</strong> Uma plataforma para desenvolvimento de aplicativos React Native que simplifica o processo de configuração e desenvolvimento.
        </ThemedText>
        
        <ThemedText style={[styles.paragraph, { color: textColor }]}>
          <strong>TypeScript:</strong> Um superconjunto do JavaScript que adiciona tipagem estática. Utilizado para melhorar a qualidade do código e facilitar a manutenção.
        </ThemedText>
        
        <ThemedText style={[styles.paragraph, { color: textColor }]}>
          <strong>react-native-paper:</strong> Uma biblioteca de componentes que implementa o Material Design para React Native. Utilizada para criar tabelas de dados (DataTable) de forma estilizada e funcional.
        </ThemedText>
        
        <ThemedText style={[styles.paragraph, { color: textColor }]}>
          <strong>react-native-reanimated-carousel:</strong> Uma biblioteca para criar carrosséis animados em aplicativos React Native. Utilizada para implementar a funcionalidade de carrossel no aplicativo.
        </ThemedText>
        
        <ThemedText style={[styles.paragraph, { color: textColor }]}>
          <strong>react-native-reanimated:</strong> Uma biblioteca que fornece animações de alto desempenho para React Native. Utilizada em conjunto com o carrossel para criar transições suaves.
        </ThemedText>
        
        <ThemedText style={[styles.paragraph, { color: textColor }]}>
          <strong>react-native-gesture-handler:</strong> Uma biblioteca que fornece um sistema de manipulação de gestos para React Native. Utilizada para melhorar a experiência do usuário ao interagir com o carrossel.
        </ThemedText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Sobre;
