const SimpleTable = ({column, data}) => (
    <table style={{borderCollapse: 'collapse', width: '400px', marginBottom: '20px'}}>
        <tbody>
        <tr key={column}
            style={{borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
            {data.map(item =>
                <>
                    <td>{column}</td>
                    <td>{item.rating}</td>
                </>
        )}
        </tr>
    </tbody>
</table>
)
;
export default SimpleTable