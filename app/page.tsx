import {Box} from "@mui/system";
import {Button, Typography} from "@mui/material";
import Link from "@mui/material/Link";

export default function Home(){
    return(
        <Box component="section"
             sx={{
                 backgroundColor: "#dad7cd",
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "center",
                 alignItems: "center",
                 textAlign: "center",
                 minHeight: "100vh",
             }}>
            <Typography component="h1" variant="h1"
                        sx={{
                            marginBottom: "4%",
                            fontSize: "calc(12px + 3vw)",
                            textAlign: "center",
                            color: "#344e41"
                        }}
            >Random Recipe Generator!</Typography>

            <Link href="/recipes">
                <Button variant="contained" sx={{
                    backgroundColor: "#588157",
                    color: "#344e41",
                    fontSize: "calc(10px + 2vw)",
                }}>
                    Test your luck!
                </Button>
            </Link>
        </Box>
  );
}