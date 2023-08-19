import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Wellcome,
} from "../components";
import { ScrollView, Text, View } from "react-native";
import { useState } from "react";
const Home=()=>{
      const [searchTerm, setSearchTerm] = useState("");
    return(
        <SafeAreaView>
            <Stack.Screen 
                options={{
                    headerStyle:{backgroundColor:COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: ()=>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension=' 60%' />
                    ),
                    headerRight:()=>(
                        <ScreenHeaderBtn iconUrl={images.profile}dimension='100%' />
                    ),
                    headerTitle: " ",
                }}
            />
           <ScrollView>
             <View 
             style={{
            flex: 1,
            padding: SIZES.medium,
          }}>
           <Wellcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
                 <Popularjobs />
                 <Nearbyjobs />
             </View>
           </ScrollView>
        </SafeAreaView>
    )
}

export default Home;