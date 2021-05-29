import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import * as headerStyles from "./header.module.css"

const Header = () => {
  const { title, menuLinks } = useSiteMetadata()
  return (
    <header>
      <div className={headerStyles.branding}>
        <div className={headerStyles.logo}>
          <Link to="/">
            <StaticImage
              src="../../images/usc-logo-512.png"
              width={150}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Use Shopping Cart logo"
              // style={{ marginBottom: `1.45rem` }}
            />
          </Link>
        </div>
        <span className={headerStyles.title}>
          <Link to="/">{title}</Link>
        </span>
      </div>
      <nav>
        <ul>
          {menuLinks.map(link => (
            <li>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header