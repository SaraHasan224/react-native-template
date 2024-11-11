import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Sentry from "@sentry/react-native";


Sentry.init({
  dsn: "https://b0432a0fc3745b377edb2a1969b771ab@o4508281807831040.ingest.de.sentry.io/4508281809076304",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
  // We recommend adjusting this value in production.
  // tracesSampleRate: 1.0,
  // profilesSampleRate is relative to tracesSampleRate.
  // Here, we'll capture profiles for 100% of transactions.
  // profilesSampleRate: 1.0,
  enableInExpoDevelopment: true, // Captures errors even in development
  debug: true, // Set to false in production
});

function App() {
  // Function to trigger an error
  const handleError = () => {
    throw new Error('My first Sentry error!');
  };

  // Function to trigger a native crash
  const handleNativeCrash = () => {
    Sentry.captureException(new Error('Manually logging a native-like crash.'));
    // Sentry.nativeCrash();
  };

  return (
    <>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Hello, World!</Text>
     <Button title="Trigger Error" onPress={handleError} />
     <Button title="Trigger Native Crash" onPress={handleNativeCrash} />
   </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Sentry.wrap(App);
