import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'emphasis' | 'title' | 'subtitle' | 'subsubtitle' | 'link' | 'paragraph' | 'tab';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const defaultColor = useThemeColor({}, 'text');
  const tabColor = useThemeColor({}, 'tabIconDefault');
  const color = type === 'tab' ? tabColor : (type === 'default' ? defaultColor : useThemeColor({}, type === 'link' ? 'link' : 'text'));

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'emphasis' ? styles.emphasis : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'subsubtitle' ? styles.subsubtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'paragraph' ? styles.paragraph : undefined,
        type === 'tab' ? styles.tab : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  emphasis: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 32,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subsubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    padding: 16,
    textAlign: 'center',
  },
  tab: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
  },
});
