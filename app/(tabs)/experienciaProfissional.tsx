import ThemedScrollView from "@/components/ThemedScrollView";
import { ThemedText } from "@/components/ThemedText";
import { Button, Dimensions, Linking, StyleSheet, View } from "react-native";

const width = Dimensions.get("window").width * 0.86;

export default function ExperienciaProfissional() {
    return (
        <ThemedScrollView>
            <ThemedText type="title">Experiência Profissional</ThemedText>
            <ThemedText type="paragraph">
                Eu não possuo experiência profissional em computação ainda... Mas você
                pode mudar isso!
            </ThemedText>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => {
                        Linking.openURL("https://github.com/GabrielaRBLemos").catch((err) =>
                            console.error("Failed to open URL:", err)
                        );
                    }}
                    title="Meu GitHub"
                    color="#181717"
                    accessibilityLabel="Acesse meu Github"
                />
                <Button
                    onPress={() => {
                        Linking.openURL(
                            "https://www.linkedin.com/in/gabrielarblemos"
                        ).catch((err) => console.error("Failed to open URL:", err));
                    }}
                    title="Meu LinkedIn"
                    color="#0A66C2"
                    accessibilityLabel="Acesse meu LinkedIn"
                />
            </View>
        </ThemedScrollView>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: width,
    },
});
