import './marketplace.scss'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import ItemInput from '../../components/ItemInput/ItemInput'
import { useContext } from 'react'
import { InputOfItemsContext, InputOfItemsType } from '../../context/InputOfItemsContext'

const Marketplace = () => {
  const {listOfItems} = useContext(InputOfItemsContext) as InputOfItemsType

  return (
    <>
      <ItemInput/>
      <List>
      {
        listOfItems && listOfItems.map((item: string, index: number) =>
          <ListItemText primary={item} key={ index } />)
      }
      </List>
    </>
  )
}

export default Marketplace