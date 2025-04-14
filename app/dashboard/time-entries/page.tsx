import { TimeEntriesTable } from '@/sections/TimeEntriesTable'

export default function TimeEntriesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Time Entries</h1>
      <TimeEntriesTable />
    </div>
  )
}
