import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";
import { default as React, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

interface Technology {
    title: string;
    description: string;
}

interface CollapsibleItemProps {
    item: Technology;
    isExpanded: boolean;
    onPress: () => void;
}

const technologies: Technology[] = [
    {
        title: "React",
        description:
            "Uma biblioteca JavaScript para construir interfaces de usuário. Utilizada para criar a estrutura do aplicativo.",
    },
    {
        title: "Expo",
        description:
            "Uma plataforma para desenvolvimento de aplicativos React Native que simplifica o processo de configuração e desenvolvimento.",
    },
    {
        title: "TypeScript",
        description:
            "Um superconjunto do JavaScript que adiciona tipagem estática. Utilizado para melhorar a qualidade do código e facilitar a manutenção.",
    },
    {
        title: "react-native-paper",
        description:
            "Uma biblioteca de componentes que implementa o Material Design para React Native. Utilizada para criar tabelas de dados (DataTable) de forma estilizada e funcional.",
    },
    {
        title: "react-native-reanimated-carousel",
        description:
            "Uma biblioteca para criar carrosséis animados em aplicativos React Native. Utilizada para implementar a funcionalidade de carrossel no aplicativo.",
    },
    {
        title: "react-native-reanimated",
        description:
            "Uma biblioteca que fornece animações de alto desempenho para React Native. Utilizada em conjunto com o carrossel para criar transições suaves.",
    },
    {
        title: "react-native-gesture-handler",
        description:
            "Uma biblioteca que fornece um sistema de manipulação de gestos para React Native. Utilizada para melhorar a experiência do usuário ao interagir com o carrossel.",
    },
];

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({
    item,
    isExpanded,
    onPress,
}) => {
    const iconColor = useThemeColor({}, "text");
    const iconName = isExpanded ? "arrow.down" : "arrow.right";
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
                <ThemedText type="subsubtitle">{item.title}</ThemedText>
                <IconSymbol size={16} name={iconName} color={iconColor} />
            </TouchableOpacity>
            {isExpanded && (
                <ThemedText type="paragraph">{item.description}</ThemedText>
            )}
        </View>
    );
};

const Sobre: React.FC = () => {
    const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(
        null
    );

    const toggleItem = (index: number) => {
        setExpandedItemIndex(expandedItemIndex === index ? null : index);
    };

    const renderItem = ({ item, index }: { item: Technology; index: number }) => {
        const isExpanded = index === expandedItemIndex;
        return (
            <CollapsibleItem
                item={item}
                isExpanded={isExpanded}
                onPress={() => toggleItem(index)}
            />
        );
    };

    return (
        <ParallaxScrollView>
            <ThemedText type="title">Sobre o App</ThemedText>
            <ThemedText type="subtitle">Tecnologias Utilizadas:</ThemedText>
            <View>
                <FlatList
                    data={technologies}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </ParallaxScrollView>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
        borderBottomWidth: 1,
    },
});
export default Sobre;