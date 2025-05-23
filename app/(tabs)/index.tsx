import ThemedScrollView from "@/components/ThemedScrollView";
import { ThemedText } from "@/components/ThemedText";
import { Linking } from "react-native";

export default function HomeScreen() {
    return (
        <ThemedScrollView>
            <ThemedText type="title">Gabriela R. B. Lemos</ThemedText>
            <ThemedText type="subtitle">Cientista de Dados</ThemedText>
            <ThemedText type="paragraph">
                Eu sou uma estudante e{" "}
                <ThemedText type="emphasis">
                    pesquisadora de ciência da computação
                </ThemedText>{" "}
                na{" "}
                <ThemedText
                    type="link"
                    onPress={() => {
                        Linking.openURL("https://portal.unicap.br/").catch((err) =>
                            console.error("Failed to open URL:", err)
                        );
                    }}
                >
                    Universidade Católica de Pernambuco
                </ThemedText>
                , com experiência em pesquisa científica, análise e ciência de dados com
                habilidades em <ThemedText type="emphasis">Python</ThemedText> e{" "}
                <ThemedText type="emphasis">SQL</ThemedText>. No meu tempo livre eu
                gosto de ler, fazer{" "}
                <ThemedText
                    type="link"
                    onPress={() => {
                        Linking.openURL("https://github.com/GabrielaRBLemos").catch((err) =>
                            console.error("Failed to open URL:", err)
                        );
                    }}
                > projetos de ciência de dados </ThemedText>
                e fazer yoga.
            </ThemedText>
        </ThemedScrollView>
    );
}