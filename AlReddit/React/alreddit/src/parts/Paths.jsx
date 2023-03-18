import UnloggedPaths from "./Unlogged/UnloggedPaths"
import LoggedPaths from "./Logged/LoggedPaths"
import LoadingScreen from "./GeneralUse/LoadingScreen"
import { useQuery } from "@tanstack/react-query"
import { checkIfLoggedIn } from "../utils/AuthenticationCalls"

export default function Paths() {

    const { isLoading, isError, data, error } = useQuery(["webData"], async () => {
      return (await checkIfLoggedIn())
    })

    while (isLoading) {
      return (< LoadingScreen Txt="Checking for sessions!"/>)
    }

    if (data === 202){
      return <LoggedPaths />
    }
    else {
      return <UnloggedPaths />
    }
}