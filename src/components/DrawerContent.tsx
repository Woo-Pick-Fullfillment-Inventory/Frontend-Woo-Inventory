import { useNavigation } from '@react-navigation/native';
import { DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-paper';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { BLACKCOLOR } from '../theme';

const drawerList = [
  {
    label: 'Dashboard',
    icon:'view-dashboard',
    component: 'MainMenuScreen',
  },
  {
    label: 'Products',
    icon:'layers-triple-outline',
    component: '',
  },
  {
    label: 'Purchasing',
    icon:'cart-outline',
    component: '',
  },
  {
    label: 'Warehouse',
    icon:'warehouse',
    component: '',
  },
  {
    label: 'Finance',
    icon:'chart-line',
    component: '',
  },
  {
    label: 'Reporting',
    icon:'chart-bar',
    component: '',
  },
  {
    label: 'Production',
    icon:'package',
    component: '',
  },
];

export const DrawerContent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {drawerList.map((item, index) => {
        return (
          <DrawerItem
            key={index}
            icon={() => 
              <Icon
                source={item.icon}
                color={BLACKCOLOR}
                size={20}
              />
            }
            label={item.label}
            onPress={() => {
              //@ts-ignore
              navigation.navigate(item?.component)
            }}
          />
        )
      })}
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    top: '7%'
  }
});