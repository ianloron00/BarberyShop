import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import { useContext } from "react";
import { InputOfItemsContext, InputOfItemsType } from "../../context/InputOfItemsContext";

const ItemInput = () => {

  const section = {
    height: "50px",
    paddingTop: 5,
    color: "#ffffff",
  };

  const {itemName, setItemName, setListOfItems} = useContext(InputOfItemsContext) as InputOfItemsType

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <TextField
            id="outlined-controlled"
            label="Add an Item"
            className="textfield"
            onChange={(event) => setItemName(event.target.value)}
            value={itemName}
            InputProps = {{
              sx: {
                height: section.height,
                color: section.color
              }
            }}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <Button
            variant="contained"
            onClick={() => {
              if(itemName !== "") {
                setListOfItems(listOfItems => [...listOfItems, itemName])
                setItemName("")
            }}}
            style={section}
          >
            Add item
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ItemInput