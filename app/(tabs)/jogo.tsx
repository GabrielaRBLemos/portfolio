import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { DataTable } from 'react-native-paper';

export default function HomeScreen() {
    return (
    <ParallaxScrollView
    headerColors={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
        <ThemedText type='title'>Experiência Acadêmica</ThemedText>
        <ThemedText type='subtitle'>Certificações</ThemedText>
        <DataTable>
        <DataTable.Header>
            <DataTable.Title><ThemedText type='subtitle'>Ano</ThemedText></DataTable.Title>
            <DataTable.Title><ThemedText type='subtitle'>Instituição</ThemedText></DataTable.Title>
            <DataTable.Title><ThemedText type='subtitle'>Curso</ThemedText></DataTable.Title>
        </DataTable.Header>

        {certifications.map((cert, index) => (
            <DataTable.Row key={index}>
            <DataTable.Cell><ThemedText type='default'>{cert.year}</ThemedText></DataTable.Cell>
            <DataTable.Cell><ThemedText type='default'>{cert.institution}</ThemedText></DataTable.Cell>
            <DataTable.Cell><ThemedText type='default'>{cert.course}</ThemedText></DataTable.Cell>
            </DataTable.Row>
        ))}
        </DataTable>

        <ThemedText type='subtitle'>Iniciativas</ThemedText>
        <DataTable>
        <DataTable.Header>
            <DataTable.Title><ThemedText type='subtitle'>Ano</ThemedText></DataTable.Title>
            <DataTable.Title><ThemedText type='subtitle'>Função</ThemedText></DataTable.Title>
            <DataTable.Title><ThemedText type='subtitle'>Iniciativa</ThemedText></DataTable.Title>
        </DataTable.Header>

        {initiatives.map((init, index) => (
            <DataTable.Row key={index}>
            <DataTable.Cell><ThemedText type='default'>{init.year}</ThemedText></DataTable.Cell>
            <DataTable.Cell><ThemedText type='default'>{init.role}</ThemedText></DataTable.Cell>
            <DataTable.Cell><ThemedText type='default'>{init.initiative}</ThemedText></DataTable.Cell>
            </DataTable.Row>
        ))}
        </DataTable>
    </ParallaxScrollView>
    );
}

const certifications = [
    { year: '2024', institution: 'IBM', course: 'Python for Data Science, AI & Development' },
    { year: '2024', institution: 'IBM', course: 'Data Science Methodology' },
    { year: '2024', institution: 'IBM', course: 'Tools for Data Science' },
    { year: '2024', institution: 'IBM', course: 'What is Data Science?' },
    { year: '2023', institution: 'UNICAP', course: 'IA para Iniciantes' },
    { year: '2023', institution: 'IBM', course: 'Databases and SQL for Data Science with Python' },
    { year: '2023', institution: 'Escola Virtual Fundação Bradesco', course: 'Modelagem de Dados' },
    { year: '2023', institution: 'UNICAP', course: 'Automação da revisão sistemática utilizando Python e Ferramentas auxiliares' },
];

const initiatives = [
    { year: '2024-2025', role: 'Pesquisadora PIBIC', initiative: 'Simulação, Controle e Otimização de um Processo Industrial em Escala Piloto de uma Cervejaria Artesanal' },
    { year: '2023 - 2024', role: 'Pesquisadora PIBIC', initiative: 'Cidades Inteligentes: Estudos de Soluções Colaborativas para a Avaliação de Aplicações, Processamento de Imagens e Mineração de Dados' },
    { year: '2024', role: 'Mentora', initiative: 'Projeto Technovation Girls' },
];
