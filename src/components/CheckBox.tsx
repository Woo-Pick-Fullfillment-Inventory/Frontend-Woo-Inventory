import {GestureResponderEvent, Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-paper';

type Props = {
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
					<Icon
						source={'checkbox-outline'}
						size={13}
					/>
					:
					<Icon
						source={'checkbox-blank-outline'}
						size={13}
					/>
				}
			</Pressable>
			<Text style={styles.title}>{title}</Text> 
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 
	container: {
		justifyContent: 'flex-start', 
		alignItems: 'flex-start', 
		flexDirection: 'row',
	},

	title: { 
		marginLeft: 3,
		bottom: 1,
		fontSize: 13,
		color: 'rgba(0, 0, 0, 0.56)', 
		fontWeight: '400',
	}, 
}); 
