import { Fragment } from "react"
import Media from "react-media"

import LargeNavbar from "./largeNavbar"
import MediumNavbar from "./mediumNavbar"
import SmallNavbar from "./smallNavbar"

export default function Navbar(){
    return(
        <>
            <Media queries={{
                small: "(max-width: 600px)",
                medium: "(min-width: 601px) and (max-width: 950px)",
                large: "(min-width: 951px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <SmallNavbar/>}
                        {matches.medium && <MediumNavbar/>}
                        {matches.large && <LargeNavbar/>}
                    </Fragment>
                )}

            </Media>
        </>
    )
}