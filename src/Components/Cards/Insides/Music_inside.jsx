import React from "react";
import music from '../music_notes.png';
import { Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

//create a Button in styles to go back to the previous page, or to go back to the Cards
export default function MartialInside() {
    const { t } = useTranslation()


    return (
           <img src={music}/>
    )
}