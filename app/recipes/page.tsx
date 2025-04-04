import {getRecipes} from "@/lib/getData";
import {Recipe} from "@/lib/structure/recipes";
import {ExtendedIngredient} from "@/lib/structure/extendedIngredients";
import {Steps} from "@/lib/structure/analyzedInstructions";
import {Alert, Card, CardMedia, Typography} from "@mui/material"
import {Box} from "@mui/system";


export default async function Recipes(){
    try{
        const data = await getRecipes();
        const recipe: Recipe = data.recipes[0];
        return (
            <Box component="section"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5%",
                    backgroundColor: "#dad7cd",
                }}>
                <Card
                    sx={{
                        backgroundColor: "#a3b18a",
                        display: "flex",
                        flexDirection: "column",
                        width: "80%",
                        border: "1px solid #3a5a40",
                        borderRadius: "15px",
                        color: "#344e41"
                    }}
                >
                    <Typography component="h1" variant="h1"
                                sx={{
                                    padding: "4%",
                                    margin: "auto",
                                    fontSize: "calc(12px + 3vw)",
                                    textAlign: "center",
                                }}
                    >{recipe.title}</Typography>
                    <CardMedia component="img" src={recipe.image} alt={recipe.title}
                               sx={{
                                   margin: "auto",
                                   width: "50%",
                                   height: "auto",
                                   border: "3px solid #344e41",
                               }}/>
                    <Typography component="h3" variant="h3"
                                sx={{
                                    fontSize: "calc(2px + 1vw)",
                                    margin: "2% auto",
                                }}
                    >Ready in {recipe.readyInMinutes} minutes!</Typography>

                    <Box component="section"
                         sx={{
                             margin: "0 auto",
                             padding: "3%",
                             backgroundColor: "#dad7cd",
                             borderRadius: "15px",
                             width: "80%"
                         }}>
                        <Typography sx={{
                            margin:"2%",
                            fontSize: "calc(6 + 3vw)",
                        }}>Ingredients: </Typography>
                        <ul>
                            {recipe.extendedIngredients.map((ingredient: ExtendedIngredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    </Box>

                    <Box component="section"
                         sx={{
                             margin: "2% auto",
                             padding: "3%",
                             backgroundColor: "#dad7cd",
                             borderRadius: "15px",
                             width: "80%"
                         }}>
                        <Typography sx={{
                            margin:"2%",
                            fontSize: "calc(6 + 3vw)",
                        }}>Instructions: </Typography>
                        {recipe.analyzedInstructions[0].steps.map((instruction: Steps) => (
                            <li key={instruction.number}> {instruction.number}: {instruction.step} </li>
                        ))}
                    </Box>
                </Card>
            </Box>
        )
    } catch (e) {
        console.error(e);
        return(
            <Box component="section"
                 sx={{
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#dad7cd",
                     minHeight: "100vh",
                 }}>
                <Alert severity="error" sx={{
                    maxHeight: "10vh",
                    border: "2px solid #3a5a40",
                    fontSize: "calc(8px + 1vw)",
                    borderRadius: "15px",

                }}>There was an error trying to get you a recipe! Sorry!</Alert>
            </Box>

        )
    }


}