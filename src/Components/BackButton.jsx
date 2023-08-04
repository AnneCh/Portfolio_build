import {IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  let navigate = useNavigate();

  return (
    <IconButton
      color="secondary"
      aria-label="go back"
      component="span"
      onClick={() => navigate(-1)}
    >
      <ArrowBack sx={{color:'gray', fontSize:30, position:'static'}}/>
    </IconButton>
  );
}
