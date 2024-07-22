import React from "react"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import Banner from "@modules/layout/templates/banner"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Banner />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
