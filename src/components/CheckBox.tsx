import {GestureResponderEvent, Pressable, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {checkboxActiveSvg} from '../assets/icons/checkboxActive';
import {checkboxPassiveSvg} from '../assets/icons/checkboxPassive'

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
					<SvgXml
						xml={checkboxActiveSvg}
						width={13}
						height={13}
						style={styles.checkbox}
					/>
					:
					<SvgXml
						xml={checkboxPassiveSvg}
						width={13}
						height={13}
						style={styles.checkbox}
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

	checkbox: {
		marginRight: 4,
		top: 2,
	},

	title: { 
		fontSize: 13, 
		color: 'rgba(0, 0, 0, 0.56)', 
		fontWeight: '400',
	}, 
}); 
