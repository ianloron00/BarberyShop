import { createContext, useState } from "react";

export type InputOfItemsType = {
  listOfItems: string[]
  setListOfItems: React.Dispatch<React.SetStateAction<string[]>>
  itemName: string
  setItemName: React.Dispatch<React.SetStateAction<string>>
}

export const InputOfItemsContext = createContext<InputOfItemsType | null>(null)

export const InputOfItemsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [listOfItems, setListOfItems] = useState<string[]>([])
  const [itemName, setItemName] = useState<string>("")

  return (
    <InputOfItemsContext.Provider value={{
      listOfItems,
      setListOfItems,
      itemName,
      setItemName
    }}>
      {children}
    </InputOfItemsContext.Provider>
  )
}
