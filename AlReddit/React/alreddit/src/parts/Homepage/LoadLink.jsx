import { useQuery } from "@tanstack/react-query"
import { createLink } from "../../utils/AuthenticationCalls"
import { useNavigate } from "react-router-dom"

export default function LoadLink() {
    const navigate = useNavigate()
    const { isLoading, isError, data } = useQuery( ["link"], async () => {
        return (await createLink()) })

    if (isError) {
        navigate("/home/login-error") }

    if (isLoading) {
            return(
                    <div className="content distance">
                        <h3> Wait a bit to be redirected! </h3>
                        <progress className="progress is-small is-primary" max="100">15%</progress>
                    </div>
                )
    }
        
    if (data) {
        console.log(data)
        window.location.href = data}
}