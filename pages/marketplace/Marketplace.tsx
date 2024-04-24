import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './marketplace.scss'
import { useEffect } from 'react'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import { useState } from 'react'
import Grid from '@mui/material/Grid'

const Marketplace = () => {
  const [listItems, setListItems] = useState<string[]>([])
  const [itemName, setItemName] = useState<string>("")

  const section = {
    height: "50px",
    paddingTop: 5,
    color: "#ffffff",
  };

  useEffect(() => {

  }, [])

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
          <Button variant="contained"
          onClick={() => {
            if(itemName !== "") {
              setListItems(listItems => [...listItems, itemName])
              setItemName("")
          }}}
          style={section}
          >
            Add item
          </Button>
        </Grid>
      </Grid>
      <List>
      {
        listItems && listItems.map((item: string, index: number) =>
          <ListItemText primary={item} key={ index } />)
      }
      </List>
    </>
  )
}

export default Marketplace