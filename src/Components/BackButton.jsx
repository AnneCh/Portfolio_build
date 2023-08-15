import { IconButton, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  let navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="flex-start" width="100%">
      <IconButton
        color="secondary"
        aria-label="go back"
        component="span"
        onClick={() => navigate(-1)}
      >
        <ArrowBack sx={{color:'gray', fontSize:30}}/>
      </IconButton>
    </Box>
  );
}
