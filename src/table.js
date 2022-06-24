
export default function Table(props) {

    const { characterData } = props

    const TableHeader = () => (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )

    const TableBody = () => (
        <tbody>
            {characterData.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.job}</td>
                    </tr>
                )
            })}
        </tbody>
    )

    return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
    )
}