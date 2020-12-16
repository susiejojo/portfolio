/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"
import ParticlesBg from 'particles-bg'

const Layout = ({ children }) => {
  
  return (
    <>
    <ParticlesBg color="#ff0000" num = {100} type="cobweb" bg={true} />
      <Navbar></Navbar>
      <main>
      
        {children}</main>
    </>
  )
}
export default Layout
