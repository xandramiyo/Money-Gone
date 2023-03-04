export default function DailyView() {
    return (
        <>
            <h1>{new Date(Date()).toDateString()}</h1>
        </>
    )
}