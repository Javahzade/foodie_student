import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
let id = 52772
const Ingredient = () => {
    // if(!props.id){
    //     id = 52772
    // }
    const [ingredientMap, setIngredientMap] = useState({});
    const [activeTab, setActiveTab] = useState(0)

    const [meal, setMeal] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                const meal = data.meals[0];
                setMeal(meal)

                const newIngredientMap = {};
                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];

                    if (ingredient && ingredient.trim() !== "") {
                        newIngredientMap[ingredient] = measure || 'N/A';
                    }
                }

                setIngredientMap(newIngredientMap);
            } catch (error) {
                console.error('Error fetching meal data:', error);
            }
        };

        fetchData();
    }, [id]);






    return (
 <>
 <View style={styles.main}>
    <TouchableOpacity
        onPress={() => {
            //geri gelmek
            console.log("geri")
        }}
        style={{width: 40, height: 40}}>
            <Image
            style={styles.headerBack}
            resizeMode='cover'
            source={require("../assets/images/Headerback.png")}
/>
        
                </TouchableOpacity>
                <View>
                    {meal?.["strMealThumb"] &&
                        <Image
                            style={styles.mealImg}
                            source={{ uri: meal?.["strMealThumb"] || "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg" }}>

                        </Image>

                    }
                </View>
                <Text style={styles.mealName}>
                    {meal?.strMeal || "Hamburger"}
                </Text>

                <View style={styles.tabs}>

                    <TouchableOpacity style={[styles.tab, activeTab == 0 ? styles.tabActive : null]} onPress={() => { setActiveTab(0) }} ><Text style={activeTab == 0 ? styles.tabactivetext : styles.tabpassive}>Ingrident</Text></TouchableOpacity>

                    <TouchableOpacity style={[styles.tab, activeTab == 1 ? styles.tabActive : null]} onPress={() => { setActiveTab(1) }} ><Text style={activeTab == 1 ? styles.tabactivetext : styles.tabpassive}>Procedure</Text></TouchableOpacity>
                </View>



                {
                    activeTab == 0 && ingredientMap && ingredientMap != undefined && (





                        <ScrollView style={{ display: 'flex', flexDirection: 'column', height: "60%" }} showsVerticalScrollIndicator={false}>
                            {Object.entries(ingredientMap).map(([ingredient, measure], index) => (


                                <View key={index} style={styles.ingredient} >
                                    <Text style={styles.igName}> {ingredient}  </Text>

                                    <Text style={styles.igCount}> {measure} </Text>
                                </View>

                            ))}
                        </ScrollView>


                    )



                }


                {activeTab == 1 && (<>
                    {meal?.["strInstructions"] &&
                        <ScrollView  style={{ display: 'flex', flexDirection: 'column', height: "70%" }} showsVerticalScrollIndicator={false}>
                            <View style={styles.procedure}>
                                <Text style={styles.proceduretext}>{meal?.["strInstructions"]} </Text>
                            </View>
                        </ScrollView>
                    }




                </>)}
            </View>

        </>
    )
}

export default Ingredient

const styles = StyleSheet.create({

    main: {
        width: "90%",
        marginLeft: "5%"
    }
    ,
    headerBack: {
        width: 24,
        height: 24,
        marginTop: 20,

    },
    mealName: {
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: "600",
        marginTop: 10,
        marginLeft: 5
    },
    mealImg: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginTop: 10
    }
    ,
    ingredient: {
        marginVertical: 5,
        height: 76,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 170,
        backgroundColor: "#129575",
        borderRadius: 12,
    },
    igName: {
        margin: 15,
        fontSize: 16,
        fontWeight: "600",
        color: "#121212",
    },
    igCount: {
        margin: 15,
        fontSize: 16,
        color: "#FFF",
    },
    tabs: {
        width: "90%",
        display: 'flex',
        marginLeft: "5%",
        marginVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    tab: {

        width: 150,
        padding: 8,
        height: 40,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"

    },
    tabActive: {
        color: "white",
        borderRadius: 10,
        backgroundColor: "green",
    }
    ,
    tabpassive: {
        color: "green"
    },
    tabactivetext: {
        color: "white",
    },
    procedure: {

        fontWeight: "400",
        backgroundColor: '#129575',
        padding: 15,
        borderRadius: 12,
    },

    proceduretext: {
        color: 'black',
        fontSize: 15,
    },
})
