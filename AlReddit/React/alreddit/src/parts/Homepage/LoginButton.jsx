import { createLink } from "../../utils/AuthenticationCalls";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginButton() {

    const [text, setText] = useState("")

    const errorPlaceholder = ( 
        <div className="content distance">
            <a href="/">
                Whoops! Either Reddit or our server seems to be down.
            </a>
        </div> )

    async function onClick (e) {
        e.preventDefault()
        try {
            const link = await createLink()
                if (link !== "error") { 
                    setText(
                        <div className="content distance">
                            <Link to={"/" + link}
                            target="_blank" rel="noreferrer">
                                <a href={link}>
                                    Click Here!
                                </a>
                            </Link>
                        </div> ) }
            else {
                setText(errorPlaceholder) } }
        
        catch {
            setText(errorPlaceholder) }
        }

    return (
        <div className="box">
            <button className="button is-dark" onClick={e => {onClick(e)}}>Button!</button>
            {text}
        </div>
    )
}