import { AppointmentsInterface } from "../types/AppointmentsType";
import DashboardTableBody from "./DashboardTableBody";

import { Table, TableHead, TableHeader, TableRow } from "./ui/table";

export default function DashboardTable({
  appointments,
}: {
  appointments: AppointmentsInterface[];
}) {
  return (
    <Table className="border-none">
      <TableHeader className="border-none bg-black/20">
        <TableRow className="border-none text-xs text-n-1">
          <TableHead className="h-8 rounded-tl-2xl py-3">Patient</TableHead>
          <TableHead className="h-8 py-3">Date</TableHead>
          <TableHead className="h-8 py-3">Status</TableHead>
          <TableHead className="h-8 py-3">Doctor</TableHead>
          <TableHead className="h-8 rounded-tr-2xl py-3">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <DashboardTableBody appointments={appointments} />
    </Table>
  );
}
