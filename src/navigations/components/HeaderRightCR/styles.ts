import { StyleSheet, Dimensions } from 'react-native';
import Sizes from '../../../constants/Sizes';

const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
        // marginRight: Sizes.width * 0.01,
    },
    spaceBetween:
    {
        width: Sizes.width * 0.04
    }
});

export default styles;