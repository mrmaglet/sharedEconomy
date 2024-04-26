import React from "react"
import { AddFilterDropDown } from "@/app/(shared)/components/config/Filters/AddFilterDropDown"
import { AddedFiltersList } from "@/app/(shared)/components/config/Filters/AddedFiltersList"

const Filters = () => {
  return (
    <>
      <AddFilterDropDown />

      <AddedFiltersList />
    </>
  )
}

export { Filters }
