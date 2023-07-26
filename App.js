import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/StackNavigator";
import AuthProvider from "./src/hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
