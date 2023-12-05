const SimpleTable = ({column, accessor ,data}) => (
    <table style={{borderCollapse: 'collapse', width: '100%', marginBottom: '20px'}}>
        <tbody>
        <tr key={column}
            style={{borderBottom: '1px solid #ddd', alignItems : 'center' , display: 'flex' , justifyContent: 'space-between', padding: '1rem'}}>
            <td style={{width : '10rem'}}>{column}</td>
            {data.map(item =>
                    <td>{item[accessor]}</td>
        )}
        </tr>
    </tbody>
</table>
)
;
export default SimpleTable