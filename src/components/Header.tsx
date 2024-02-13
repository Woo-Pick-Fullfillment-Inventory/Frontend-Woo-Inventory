import { IconButton } from 'react-native-paper';
import { View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { PRIMARYCOLOR, WHITECOLOR, globalStyle } from '../theme';

export const Header = ({navigation}: any) => {
  const drawerNavigation = useNavigation();

  return ({
    headerTintColor: WHITECOLOR,
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: PRIMARYCOLOR,
    },
    headerLeft: () => (
      <IconButton
        style={globalStyle.headerMenuIcon}
        icon='menu'
        iconColor={WHITECOLOR}
        size={30}
        onPress={() => {
          drawerNavigation.dispatch(DrawerActions.openDrawer())
        }}
      />
    ),
    headerRight: () => (
      <View style={globalStyle.headerRightSection}>
        <IconButton
          style={globalStyle.headerIcon}
          icon='bell-outline'
          iconColor={WHITECOLOR}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          style={globalStyle.headerIcon}
          icon='cog-outline'
          iconColor={WHITECOLOR}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          style={globalStyle.headerIcon}
          icon='message-outline'
          iconColor={WHITECOLOR}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          style={globalStyle.headerIcon}
          icon='account-outline'
          iconColor={WHITECOLOR}
          size={20}
          onPress={() => navigation.navigate('ProfileScreen')}
        />
      </View>
    ),
  })
}
