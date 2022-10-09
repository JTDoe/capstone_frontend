import React from 'react'
import {Routes, Route} from "react-router"

function Router() {
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route />
  <Route />

</Routes>
  )
}

export default Router