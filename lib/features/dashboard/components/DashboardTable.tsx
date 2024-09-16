import DashboardTableBody from "./DashboardTableBody";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/ui/table";
import DashboardPagination from "./DashboardPagination";

export default function DashboardTable() {
  return (
    <>
      <Table className="border-none">
        <TableHeader className="border-none bg-black/20">
          <TableRow className="border-none text-xs text-n-1">
            <TableHead className="h-8 rounded-tl-2xl py-3">Patient</TableHead>
            <TableHead className="h-8 py-3">Date</TableHead>
            <TableHead className="h-8 rounded-tr-xl py-3 md:rounded-none">
              Status
            </TableHead>
            <TableHead className="hidden h-8 py-3 md:table-cell">
              Doctor
            </TableHead>
            <TableHead className="hidden h-8 rounded-tr-2xl py-3 md:table-cell">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <DashboardTableBody />
      </Table>
      <div className="mt-5 grid w-full grid-flow-col justify-between">
        <DashboardPagination totalCount={15} />
      </div>
    </>
  );
}
