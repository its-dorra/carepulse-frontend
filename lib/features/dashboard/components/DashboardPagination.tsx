"use client";

import { Button } from "@/lib/components/ui/button";
import { PER_PAGE } from "@/lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function DashboardPagination({
  totalCount,
}: {
  totalCount: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(useSearchParams().get("page")) || 1;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const pageCount = Math.ceil(totalCount / PER_PAGE);

  const previousPage = () => {
    if (currentPage === 1) return;
    router.push(
      pathname + "?" + createQueryString("page", `${currentPage - 1}`),
    );
  };

  const nextPage = () => {
    if (currentPage === pageCount) return;
    router.push(
      pathname + "?" + createQueryString("page", `${currentPage + 1}`),
    );
  };

  return (
    <>
      {currentPage > 1 ? (
        <Button
          onClick={previousPage}
          className="self-start bg-white/5 bg-none transition-colors hover:bg-white/10"
        >
          <HiChevronLeft className="text-2xl text-primaryGreen" />
        </Button>
      ) : (
        <div></div>
      )}
      {currentPage < pageCount && (
        <Button
          onClick={nextPage}
          className="justify-self-end bg-white/5 bg-none transition-colors hover:bg-white/10"
        >
          <HiChevronRight className="text-2xl text-primaryGreen" />
        </Button>
      )}
    </>
  );
}
