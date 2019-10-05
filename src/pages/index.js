import React from "react"
import { Redirect } from 'react-router-dom'

const Index = () => (
  <Redirect to={{ pathname: `/app/login` }} />
)

export default Index