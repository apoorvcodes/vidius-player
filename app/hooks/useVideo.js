import * as ImagePicker from "expo-image-picker"

export async function useVideo() {
     let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [],
        quality: 1,
      });
      


      return result

}