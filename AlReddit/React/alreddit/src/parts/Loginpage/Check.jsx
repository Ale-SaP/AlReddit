import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"

import Screen from "./Screen";
import { postCredentials } from "../../utils/calls";

export default function Check() {
    const [search, setSearch] = useSearchParams();

    const state = search.get("state")
    const code = search.get("code")
    const values = { "state": state, "code": code }

    const navigate = useNavigate()
    let direction = "/login-error"
    
    const { isLoading, isError, data, error } = useQuery( ["webData", values], async () => { return (await postCredentials(values)) })


    while (isLoading) { return (
        <div>
            <Screen state={state} code={code} />
        </div>
    ) }

    if (isError) {}

    if (data["data"].received) {
        direction = "/your-home"
    }

   navigate(direction)
}