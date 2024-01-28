import {useEffect, useRef} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import {
    Camera, 
    useCameraDevice,
    useCodeScanner
} from 'react-native-vision-camera';

const ScannerScreen = () => {
    const camera = useRef(null);
    const device = useCameraDevice('back');

    const scanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log(`Scanned ${codes.length} codes!`)
        }
    })

    useEffect(() => {
        const getPermission = async () => {
            const newCameraPermission = await Camera.requestCameraPermission();
            console.log(newCameraPermission);
        }
        getPermission();
    }, []);

    if (device == null) {
        return <Text>Camera not available</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
                codeScanner={scanner}
            />
        </View>      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ScannerScreen;