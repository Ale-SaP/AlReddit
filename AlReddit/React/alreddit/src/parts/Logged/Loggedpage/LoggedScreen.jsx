import getFrontPage from "../../../utils/FrontPageCalls"

export default function LoggedHome() {
    const { isLoading, isError, data, error } = useQuery( ["webData", values], async () => {
        return (await getFrontPage(values)) })
}