import { TextField, FormLabel, Box, Button } from "@mui/material";
import { useState } from "react";
const AddBook = () => {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    available: "",
    image: "",
  });
  return (
    <form>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        maxWidth={"700"}
        alignItems={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={"10"}
      >
        <FormLabel>Name</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="name" />
        <FormLabel>Author</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="author" />
        <FormLabel>Description</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="price" />
        <FormLabel>Image</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="image" />
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
