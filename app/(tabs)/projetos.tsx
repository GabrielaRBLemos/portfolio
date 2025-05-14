import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';

export default function PortfolioCarousel(){
    const progress = useSharedValue<number>(0);
    const inactivePag = useThemeColor({}, 'tabIconDefault');
    const activePag = useThemeColor({}, 'text');
    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };
  const portfolioItems = [
    {
      id: 1,
      title: 'Cadastro de Usuário',
      // image: require('./Assets/cadastro.png'), // Adjust the path as necessary
      link: 'https://progamacao-web-mobile.vercel.app/portfolio/cadastro.html',
    },
    {
      id: 2,
      title: 'Minha Rotina - HTML',
      // image: require('./Assets/raw.png'),
      link: 'https://progamacao-web-mobile.vercel.app/portfolio/minha-rotina-raw.html',
    },
    {
      id: 3,
      title: 'Minha Rotina + CSS',
      // image: require('./Assets/css.png'),
      link: 'https://progamacao-web-mobile.vercel.app/portfolio/minha-rotina.html',
    },
    {
      id: 4,
      title: 'Jogo da Senha',
      // image: require('./Assets/senha.png'),
      link: 'https://progamacao-web-mobile.vercel.app/portfolio/senha.html',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.portItem} onPress={() => console.log(`Navigate to ${item.link}`)}>
      {/* Uncomment the line below to display the image */}
      {/* <Image source={item.image} style={styles.image} /> */}
      <ThemedText style={styles.title} type="title">{item.title}</ThemedText>
    </TouchableOpacity>
  );

  return (
    
    <View style={styles.container}>
      <ThemedText style={styles.header} type="title">Projetos</ThemedText>
      <Carousel
        loop
        width={300} // Adjust width as necessary
        height={200} // Adjust height as necessary
        data={portfolioItems}
        renderItem={renderItem}
        pagingEnabled={true}
        OnProgressChange={progress}
      />
      <Pagination.Basic
        progress={progress}
        data={portfolioItems}
        dotStyle={{ backgroundColor: inactivePag, borderRadius: 5 }}
        activeDotStyle={{backgroundColor: activePag}}
        containerStyle={{ gap: 8, marginTop: 8 }}
        onPress={onPressPagination}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 16,
  },
  portItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 100, // Adjust size as necessary
    height: 100, // Adjust size as necessary
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
  },
});
