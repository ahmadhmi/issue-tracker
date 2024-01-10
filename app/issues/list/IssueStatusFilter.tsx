"use client";

import { Status } from "@prisma/client";
import { Select, SelectContent } from "@radix-ui/themes";
import React from "react";

const IssueStatusFilter = () => {
  const statuses: { label: string; value?: Status }[] = [
    { label: "All" },
    { label: "Open", value: "OPEN" },
    { label: "In progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];

  return (
    <Select.Root defaultValue="">
      <Select.Trigger />
      <SelectContent>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || ""}>
            {status.label}
          </Select.Item>
        ))}
      </SelectContent>
    </Select.Root>
  );
};

export default IssueStatusFilter;
