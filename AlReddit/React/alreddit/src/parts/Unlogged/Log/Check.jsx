import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"

import LoadingScreen from "../../GeneralUse/LoadingScreen";
import { postCredentials } from "../../../utils/AuthenticationCalls";

export default function Check() {
    const [search] = useSearchParams();

    const state = search.get("state")
    const code = search.get("code")
    const values = { "state": state, "code": code }

    const navigate = useNavigate()
    let direction = "/log/not-authorized"

    const { isLoading, isError, data, error } = useQuery(["webData", values], async () => {
        return (await postCredentials(values))
    })


    while (isLoading) {
        return (
            <>
                <LoadingScreen />
            </>
        )
    }

    if (isError) {
        <h1>{error}</h1>
    }

    if (data === 202) {
        direction = "/"
    }

    navigate(direction)
}