import { useNavigation } from '@react-navigation/native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

export const useAppNavigation = <T extends keyof ParamListBase>() => {
  return useNavigation<NavigationProp<ParamListBase, T>>()
}
