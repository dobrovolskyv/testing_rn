import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Portfolio from "./Portfolio";
import Movies from "./Movies";


const Stack = createNativeStackNavigator();



export default function Navigation  () {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Movies' component={Movies} options={{ title: 'Movies' }} />
            <Stack.Screen name='Portfolio' component={Portfolio} options={{ title: 'My Portfolio' }} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}