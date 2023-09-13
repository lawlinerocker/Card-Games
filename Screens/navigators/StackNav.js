import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens/LoginScreen'
import { PokdengScreen } from '../screens/PokdengScreen'
import { HomePokdengScreen } from '../screens/HomePokdengScreen'
import { createRoomPokdeng } from '../screens/createRoomPokdeng'
import { TicTacToe } from '../screens/TicTacToe'
import { TicTacHome } from '../screens/TicTacHome'
import { TicTacCreate } from '../screens/TicTacCreate'
 
const Stack = createNativeStackNavigator()

export const StackNav = () => {
    return (
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={
                 
      { headerShown: false }
            }
        >
            <Stack.Screen name="xxxx" component={LoginScreen} />
            <Stack.Screen name="Login" component={PokdengScreen} />
            <Stack.Screen name="HomePok" component={HomePokdengScreen} />
            <Stack.Screen name="createPok" component={createRoomPokdeng} />
            <Stack.Screen name="TicTacToe" component={TicTacToe} />
            <Stack.Screen name="TicTacHome" component={TicTacHome} />
            <Stack.Screen name="TicTacCreate" component={TicTacCreate} />

        </Stack.Navigator>
    )
}
