import { SafeAreaView, StatusBar } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className={styles.container}>
      <StatusBar backgroundColor="#151218" barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};

const styles = {
  container: 'bg-primary w-full flex-1',
};
