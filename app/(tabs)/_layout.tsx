import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import React from 'react';
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].tabIconDefault
  const tabColor = Colors[colorScheme ?? 'light'].background

  return (
    <Tabs >
      <TabSlot />
      <TabList style={styles.tabBar,{backgroundColor:tabColor,paddingLeft: 8,paddingRight: 8,paddingBottom: 32,paddingTop: 8,borderWidth: 1, borderColor: iconColor,}}>
        <TabTrigger name="index" href="/" style={styles.tab}>
          <IconSymbol size={28} name="house.fill" color={iconColor} />
          <ThemedText>Home</ThemedText>
        </TabTrigger>
        <TabTrigger name="sobre" href="/sobre" style={styles.tab}>
          <IconSymbol size={28} name="archivebox.fill" color={iconColor} />
          <ThemedText>Sobre</ThemedText>
        </TabTrigger>
        <TabTrigger name="experienciaAcademica" href="/experienciaAcademica" style={styles.tab}>
          <IconSymbol size={28} name="book.fill" color={iconColor} />
          <ThemedText>Sobre</ThemedText>
        </TabTrigger>
        <TabTrigger name="experienciaProfissional" href="/experienciaProfissional" style={styles.tab}>
          <IconSymbol size={28} name="briefcase.fill" color={iconColor} />
          <ThemedText>Profissional</ThemedText>
        </TabTrigger>
        <TabTrigger name="projetos" href="/projetos" style={styles.tab}>
          <IconSymbol size={28} name="tray.fill" color={iconColor} />
          <ThemedText>Projetos</ThemedText>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
  },
  tabBar: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    paddingTop: 8,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  tab:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
});