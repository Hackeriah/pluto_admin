interface TableHeader {
  label: string;
}

interface TableData {
  [key: string]: string | number | React.ReactNode;
}

interface DashTableProps {
  headers: TableHeader[];
  data: TableData[];
  title: string;
  viewlink: string;
}

export function DashTable({ headers, data, title, viewlink }: DashTableProps) {
  return (
    <div className="w-[48%] border shadow-lg rounded-xl py-[4vh]">
      <div className="flex justify-between p-[2vw]">
        <p>{title}</p>
        <p className="border border-transparent border-b-black cursor-pointer ">{viewlink}</p>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-2 py-2 border border-x-0 border-t-0"
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-center border border-x-0">
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border border-x-0">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
