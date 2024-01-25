import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper'

import CheckboxActive from '../static/icons/checkbox-active.svg';
import CheckboxPassive from '../static/icons/checkbox-passive.svg'

export type Props = {
  isChecked: boolean,
  title: string,
  action: (event: GestureResponderEvent)  => void,
};

export const CheckBox = (props: Props) => { 
  const {isChecked, title, action} = props;

	return ( 
		<View style={styles.container}> 
			<Pressable onPress={action}>
				{isChecked?
					<CheckboxActive width={13} height={13} style={styles.checkbox} />
					:
					<CheckboxPassive width={13} height={13} style={styles.checkbox} />
				}
			</Pressable>
			<Text style={styles.title}>{title}</Text> 
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		justifyContent: 'flex-start', 
		alignItems: 'center', 
		flexDirection: 'row',
	},

	checkbox: {
		marginRight: 4,
	},

	title: { 
		fontSize: 12, 
		color: 'rgba(0, 0, 0, 0.56)', 
		fontWeight: '400',
		top: 1
	}, 
}); 
