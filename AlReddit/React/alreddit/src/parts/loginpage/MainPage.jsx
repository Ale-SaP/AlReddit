import { useNavigate } from "react-router-dom";
import { createLink } from "../../utils/calls";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainPage() {

    const [text, setText] = useState("")
    async function onClick (e) {
        e.preventDefault()
        try {
            const link = await createLink()
                if (link["successful"] === true) { 
                    setText(
                        <Link to={link["link"]}>
                            <div className="content distance">
                                <a href={link["link"]}>
                                    Click Here!
                                </a>
                            </div>
                        </Link> ) }
            else {
                setText(
                    <div className="content distance">
                        <a href="/">
                            Whoops! Either Reddit or our server seems to be down.
                        </a>
                    </div> ) } }
        
        catch {
            setText(
                <div className="content distance">
                    <h3 href="/">
                        Whoops! Either Reddit or our server seems to be down.
                    </h3>
                </div> ) }
        }

    return (
        <div className="box">
            <button className="button is-dark" onClick={e => {onClick(e)}}>Button!</button>
            {text}
        </div>
    )
}