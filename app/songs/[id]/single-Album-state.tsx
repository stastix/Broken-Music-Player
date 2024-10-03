import { Album } from "@prisma/client";
import { useState } from "react";

const useSingleAbum = () => {
  const [album, setAlbum] = useState<Album>(); 
  
};
