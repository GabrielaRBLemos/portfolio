import ThemedScrollView from "@/components/ThemedScrollView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

export default function Academic() {
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

    return (
        <ThemedScrollView>
            <ThemedText type="title">Experiência Acadêmica</ThemedText>

            <Carousel
                ref={ref}
                width={Dimensions.get("window").width * 0.86}
                height={Dimensions.get("window").height * 0.64}
                data={[certifications, initiatives]}
                onProgressChange={progress}
                loop={false}
                renderItem={({ index }) => (
                    <View style={styles.carouselItem}>
                        {index === 0 ? (
                            <>
                                <ThemedText type="subtitle">Certificações</ThemedText>
                                <DataTable style={styles.dataTable}>
                                    <DataTable.Header>
                                        <DataTable.Title>
                                            <ThemedText type="subsubtitle">Ano</ThemedText>
                                        </DataTable.Title>
                                        <DataTable.Title>
                                            <ThemedText type="subsubtitle">Instituição</ThemedText>
                                        </DataTable.Title>
                                        <DataTable.Title>
                                            <ThemedText type="subsubtitle">Curso</ThemedText>
                                        </DataTable.Title>
                                    </DataTable.Header>

                                    {certifications.map((cert, index) => (
                                        <DataTable.Row key={index}>
                                            <DataTable.Cell>
                                                <ThemedText type="default">{cert.year}</ThemedText>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <ThemedText type="default">
                                                    {cert.institution}
                                                </ThemedText>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <ThemedText type="default">{cert.course}</ThemedText>
                                            </DataTable.Cell>
                                        </DataTable.Row>
                                    ))}
                                </DataTable>
                            </>
                        ) : (
                            <>
                                <ThemedText type="subtitle">Iniciativas</ThemedText>
                                <DataTable style={styles.dataTable}>
                                    <DataTable.Header>
                                        <DataTable.Title>
                                            <ThemedText type="subsubtitle">Ano</ThemedText>
                                        </DataTable.Title>
                                        <DataTable.Title>
                                            <ThemedText type="subsubtitle">Função</ThemedText>
                                        </DataTable.Title>
                                        <DataTable.Title>
                                            <ThemedText type="subsubtitle">Iniciativa</ThemedText>
                                        </DataTable.Title>
                                    </DataTable.Header>

                                    {initiatives.map((init, index) => (
                                        <DataTable.Row key={index}>
                                            <DataTable.Cell>
                                                <ThemedText type="default">{init.year}</ThemedText>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <ThemedText type="default">{init.role}</ThemedText>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <ThemedText type="default">
                                                    {init.initiative}
                                                </ThemedText>
                                            </DataTable.Cell>
                                        </DataTable.Row>
                                    ))}
                                </DataTable>
                            </>
                        )}
                    </View>
                )}
            />

            <Pagination.Basic
                progress={progress}
                data={[certifications, initiatives]}
                dotStyle={{ backgroundColor: inactivePag, borderRadius: 5 }}
                activeDotStyle={{ backgroundColor: activePag }}
                containerStyle={{ gap: 8, marginTop: 8 }}
                onPress={onPressPagination}
            />
        </ThemedScrollView>
    );
}

const styles = StyleSheet.create({
    carouselItem: {
        flex: 1,
    },
    dataTable: {
        flex: 1,
    },
});

const certifications = [
    {
        year: "2024",
        institution: "IBM",
        course: "Python for Data Science, AI & Development",
    },
    { year: "2024", institution: "IBM", course: "Data Science Methodology" },
    { year: "2024", institution: "IBM", course: "Tools for Data Science" },
    { year: "2024", institution: "IBM", course: "What is Data Science?" },
    { year: "2023", institution: "UNICAP", course: "IA para Iniciantes" },
    {
        year: "2023",
        institution: "IBM",
        course: "Databases and SQL for Data Science with Python",
    },
    {
        year: "2023",
        institution: "Escola Virtual Fundação Bradesco",
        course: "Modelagem de Dados",
    },
    {
        year: "2023",
        institution: "UNICAP",
        course:
            "Automação da revisão sistemática utilizando Python e Ferramentas auxiliares",
    },
];

const initiatives = [
    {
        year: "2024-2025",
        role: "Pesquisadora PIBIC",
        initiative:
            "Simulação, Controle e Otimização de um Processo Industrial em Escala Piloto de uma Cervejaria Artesanal",
    },
    {
        year: "2023 - 2024",
        role: "Pesquisadora PIBIC",
        initiative:
            "Cidades Inteligentes: Estudos de Soluções Colaborativas para a Avaliação de Aplicações, Processamento de Imagens e Mineração de Dados",
    },
    { year: "2024", role: "Mentora", initiative: "Projeto Technovation Girls" },
];
