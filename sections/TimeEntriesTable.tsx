'use client'

import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export function TimeEntriesTable() {
  const data = [
    { id: 1, name: 'Carlos Rivera', status: 'Needs Review', date: '11/01/24' },
    { id: 2, name: 'Martha Jimenez', status: 'Auto-Approved', date: '11/01/24' },
  ]

  return (
    <ScrollArea className="rounded border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(entry => (
            <tr key={entry.id} className="border-t">
              <td className="p-2">{entry.id}</td>
              <td>{entry.name}</td>
              <td><Badge>{entry.status}</Badge></td>
              <td>{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  )
}
