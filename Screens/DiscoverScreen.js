import { View, Text,StyleSheet ,Image,TouchableOpacity,Dimensions} from 'react-native'
import React,{ useContext} from 'react'
import Carousel from "react-native-snap-carousel";

import { NewsContext } from '../API/Context'
import { categories ,sources } from '../API/api' 
import Search from '../components/Search';


const DiscoverScreen = () => {

  const {setCategory,setSource,darkTheme,setDarkTheme}=useContext(NewsContext);

  const windowWidth=Dimensions.get("window").width ;
  const SLIDE_WIDTH=Math.round(windowWidth/3.5) ;

  return (
    <View style={styles.discover}>

       {/* Search */}
 
       <Search/> 
        {/* In search.js */}

       {/* Categories */}
        <Text style={{ ...styles.subtitle, color:  darkTheme ? "white" : "black" }}>
        Categories
      </Text>
   
      <Carousel layout={"default"} data={categories}
        renderItem={
          ({ item , index})=>(
            <TouchableOpacity 
            style={styles.category}
            onPress={() =>setCategory(item.name)}    
             >
                <Image source={{ uri: item.pic }} style={styles.categoryImage}/>

                <Text
                style={{ ...styles.name, color:  darkTheme ? "white" : "black" }}
                >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1} 
      />

       {/* Source */}

       <Text style={ {...styles.subtitle , color:  darkTheme? "white" : "black" } }  Sources ></Text>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>



    </View>
  )
}

const styles= StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
   category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "60%",
    width: "90%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
})

export default DiscoverScreen