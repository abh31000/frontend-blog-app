import { Fragment } from "react"
import Media from "react-media"

import LargeLanding from "./largeLanding"
import MediumLanding from "./mediumLanding"
import SmallLanding from "./smallLanding"

export default function Landing(){
    return(
        <>
            <Media queries={{
                small: "(max-width: 600px)",
                medium: "(min-width: 601px) and (max-width: 950px)",
                large: "(min-width: 951px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <SmallLanding/>}
                        {matches.medium && <MediumLanding/>}
                        {matches.large && <LargeLanding/>}
                    </Fragment>
                )}

            </Media>
        </>
    )
}