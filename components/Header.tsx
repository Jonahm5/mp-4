import {Box} from "@mui/system";
import Link from "@mui/material/Link";

export default function Header() {
    return(
        <Box component="header" sx={{
            backgroundColor: "#344e41",
            color: "#dad7cd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2%"
        }}>
            <h2>MP-2 Weather App</h2>
            <Box component="nav" sx={{
                display: "flex",
                gap: "1vw"
            }}>
                <Link href="/" underline="none" color="inherit">Home</Link>
                <Link href="/recipes" underline="none" color="inherit">Random Recipes!</Link>
            </Box>
        </Box>
    );
}