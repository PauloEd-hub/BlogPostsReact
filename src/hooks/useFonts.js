import * as Font from "expo-font";

import {Quicksand_400Regular} from '@expo-google-fonts/quicksand';


export default useFonts = async () => {
    await Font.loadAsync({
        'Quicksand_400Regular': Quicksand_400Regular,
    })
}