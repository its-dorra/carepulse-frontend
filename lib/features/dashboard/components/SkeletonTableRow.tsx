import { Skeleton } from "@/lib/components/ui/skeleton";
import { TableCell, TableRow } from "@/lib/components/ui/table";

export default function SkeletonTableRow() {
  return (
    <TableRow className="border-none odd:bg-foreground even:bg-transparent">
      <TableCell className="flex h-12 items-center gap-x-2 py-3">
        <Skeleton className="aspect-square w-6 bg-white/10" />
      </TableCell>
      <TableCell className="h-12 py-3">
        <Skeleton className="h-6 w-14 bg-white/10" />
      </TableCell>
      <TableCell className="h-12 py-3">
        <Skeleton className="h-6 w-14 rounded-full bg-white/10" />
      </TableCell>
      <TableCell className="hidden h-12 py-3 md:table-cell">
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-6 w-6 rounded-full bg-white/10" />
          <Skeleton className="h-6 w-14 bg-white/10" />
        </div>
      </TableCell>
      <TableCell className="hidden h-12 py-3 md:table-cell">
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-6 w-14 bg-white/10" />
          <Skeleton className="h-6 w-14 bg-white/10" />
        </div>
      </TableCell>
    </TableRow>
  );
}
