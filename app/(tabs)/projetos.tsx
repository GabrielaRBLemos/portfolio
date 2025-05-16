import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import {
    Dimensions,
    Image,
    Linking,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

interface PortfolioItem {
    id: number;
    title: string;
    image: any;
    link: string;
}

export default function Projetos() {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);
    const inactivePag = useThemeColor({}, "tabIconDefault");
    const activePag = useThemeColor({}, "text");
    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };
    const portfolioItems: PortfolioItem[] = [
        {
            id: 1,
            title: "Cadastro de Usuário",
            image: require("../../assets/images/cadastro.png"),
            link: "https://progamacao-web-mobile.vercel.app/portfolio/cadastro.html",
        },
        {
            id: 2,
            title: "Minha Rotina - HTML",
            image: require("../../assets/images/raw.png"),
            link: "https://progamacao-web-mobile.vercel.app/portfolio/minha-rotina-raw.html",
        },
        {
            id: 3,
            title: "Minha Rotina + CSS",
            image: require("../../assets/images/css.png"),
            link: "https://progamacao-web-mobile.vercel.app/portfolio/minha-rotina.html",
        },
        {
            id: 4,
            title: "Jogo da Senha",
            image: require("../../assets/images/senha.png"),
            link: "https://progamacao-web-mobile.vercel.app/portfolio/senha.html",
        },
    ];

    const renderItem = ({ item }: { item: PortfolioItem }) => (
        <TouchableOpacity
            style={styles.portItem}
            onPress={() => {
                Linking.openURL(item.link).catch((err) =>
                    console.error("Failed to open URL:", err)
                );
            }}
        >
            <ThemedText type="subtitle">{item.title}</ThemedText>
            <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
    );

    return (
        <ParallaxScrollView>
            <ThemedText type="title">Projetos</ThemedText>
            <Carousel
                ref={ref}
                width={Dimensions.get("window").width * 0.86}
                height={Dimensions.get("window").height * 0.7}
                data={portfolioItems}
                onProgressChange={progress}
                loop={true}
                renderItem={renderItem}
            />
            <Pagination.Basic
                progress={progress}
                data={portfolioItems}
                dotStyle={{ backgroundColor: inactivePag, borderRadius: 5 }}
                activeDotStyle={{ backgroundColor: activePag }}
                containerStyle={{ gap: 8, marginTop: 8 }}
                onPress={onPressPagination}
            />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    portItem: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: Dimensions.get("window").width * 0.86,
        height: Dimensions.get("window").height * 0.65,
    },
});