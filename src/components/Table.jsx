function Table({ tHead = [], tBody = [[]], className = "table" }) {
  return (
    <table className={className}>
      <thead>
        <tr>
          {tHead.map(headItem => (
            <th key={headItem}>{headItem}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tBody.map(tableRow => (
          <tr key={JSON.stringify(tableRow)}>
            {tableRow.map((tableCell, index) => (
              <td key={tableCell + index}>{tableCell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
