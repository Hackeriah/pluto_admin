import { clientsOverview } from "../Tables/TableHeaders"
import { clientsOverviewData } from "../Tables/TableData"
import { ClientOverviewDCP } from "../dcpData"
import { ClientOverviewToolBar } from "../actionToolBarData"
import DataControlPanel from "../dataControlPanel"
import { clientsOverviewFullData } from "@/app/api/fullTableData"

import Table from "../Tables/Table"
export default function ClientsOverview() {
  const  fullData = clientsOverviewFullData()[0].clients;
  return (
    <div className='pl-4 '>
      <DataControlPanel  buttons={ClientOverviewToolBar()} dropdownData={ClientOverviewDCP()} />
      <Table header={clientsOverview()} tableData={clientsOverviewData()} fullData={fullData} modalType="clientsOverview" />
    </div>
  )
}
