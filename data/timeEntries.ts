// attendanceData.ts

export interface AttendanceEntry {
    entryId: number;
    phaseCode: number;
    projectCode: number;
    facialStatus: {
        label: string;
        color: string;
        match: string;
    };
    employee: string;
    facialId: string;
    clockedInBy: string;
    clockIn: string;
    clockOut: string;
    hours: string;
    location: {
        label: string;
        color: string;
    };
    status: {
        label: string;
        color: string;
    };
}

export const statusColors = {
    "Needs Review": "#fbcfe8",
    "Manual-Approved": "#bbf7d0",
    "Rejected": "#fecaca",
    "Auto-Approved": "#bbf7d0",
    "In Progress": "#c7d2fe"
};

export const locationColors = {
    Onsite: "#bbf7d0",
    Offsite: "#fecaca"
};

export const facialStatusColors = {
    Pass: "#bbf7d0",
    Fail: "#fecaca"
};

export const attendanceData: AttendanceEntry[] = [
    {
        entryId: 68750,
        phaseCode: 3201,
        projectCode: 4648,
        facialStatus: { label: "Fail", color: facialStatusColors.Fail, match: "30%" },
        employee: "Carlos Rivera",
        facialId: "ID#75239",
        clockedInBy: "John Doe",
        clockIn: "11/01/24 4:00pm",
        clockOut: "4:00pm",
        hours: "0h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Needs Review", color: statusColors["Needs Review"] }
    },
    {
        entryId: 68750,
        phaseCode: 3208,
        projectCode: 4832,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "99%" },
        employee: "Martha Jiménez",
        facialId: "ID#8662",
        clockedInBy: "John Doe",
        clockIn: "11/01/24 8:02am",
        clockOut: "5:00pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Manual-Approved", color: statusColors["Manual-Approved"] }
    },
    {
        entryId: 68750,
        phaseCode: 3210,
        projectCode: 5388,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "100%" },
        employee: "Emily Watts",
        facialId: "ID#41257",
        clockedInBy: "John Doe",
        clockIn: "11/01/24 8:03am",
        clockOut: "In Progress",
        hours: "—",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Auto-Approved", color: statusColors["Auto-Approved"] }
    },
    {
        entryId: 68750,
        phaseCode: 3255,
        projectCode: 5622,
        facialStatus: { label: "Fail", color: facialStatusColors.Fail, match: "40%" },
        employee: "Jose Manuel",
        facialId: "ID#68750",
        clockedInBy: "John Doe",
        clockIn: "11/01/24 8:03am",
        clockOut: "5:45pm",
        hours: "10h00m",
        location: { label: "Offsite", color: locationColors.Offsite },
        status: { label: "Manual-Approved", color: statusColors["Manual-Approved"] }
    },
    {
        entryId: 68750,
        phaseCode: 3256,
        projectCode: 5422,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "100%" },
        employee: "Luis Hernandez",
        facialId: "ID#6901",
        clockedInBy: "John Doe",
        clockIn: "11/01/24 8:04am",
        clockOut: "6:00pm",
        hours: "10h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Rejected", color: statusColors["Rejected"] }
    },
    {
        entryId: 68750,
        phaseCode: 3257,
        projectCode: 9999,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "100%" },
        employee: "Tony Fields",
        facialId: "ID#52643",
        clockedInBy: "John Doe",
        clockIn: "11/01/24 8:05am",
        clockOut: "5:58pm",
        hours: "10h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Auto-Approved", color: statusColors["Auto-Approved"] }
    },
    {
        entryId: 68750,
        phaseCode: 3255,
        projectCode: 5582,
        facialStatus: { label: "Fail", color: facialStatusColors.Fail, match: "40%" },
        employee: "Jose Manuel",
        facialId: "ID#68750",
        clockedInBy: "John Doe",
        clockIn: "11/01/24 8:03am",
        clockOut: "6:00pm",
        hours: "10h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Auto-Approved", color: statusColors["Auto-Approved"] }
    },
    {
        entryId: 68750,
        phaseCode: 3201,
        projectCode: 4648,
        facialStatus: { label: "Fail", color: facialStatusColors.Fail, match: "30%" },
        employee: "Carlos Rivera",
        facialId: "ID#75239",
        clockedInBy: "John Doe",
        clockIn: "11/01/24 8:45am",
        clockOut: "5:58pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Auto-Approved", color: statusColors["Auto-Approved"] }
    },
    {
        entryId: 68751,
        phaseCode: 3301,
        projectCode: 4888,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "98%" },
        employee: "Natalie Chen",
        facialId: "ID#9001",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 8:01am",
        clockOut: "5:01pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Manual-Approved", color: statusColors["Manual-Approved"] }
    },
    {
        entryId: 68752,
        phaseCode: 3302,
        projectCode: 4889,
        facialStatus: { label: "Fail", color: facialStatusColors.Fail, match: "35%" },
        employee: "Mike Jordan",
        facialId: "ID#9002",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 9:01am",
        clockOut: "6:01pm",
        hours: "9h00m",
        location: { label: "Offsite", color: locationColors.Offsite },
        status: { label: "Needs Review", color: statusColors["Needs Review"] }
    },
    {
        entryId: 68753,
        phaseCode: 3303,
        projectCode: 4890,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "95%" },
        employee: "Rachel Green",
        facialId: "ID#9003",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 7:55am",
        clockOut: "4:55pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Auto-Approved", color: statusColors["Auto-Approved"] }
    },
    {
        entryId: 68754,
        phaseCode: 3304,
        projectCode: 4891,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "92%" },
        employee: "Liam Brown",
        facialId: "ID#9004",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 8:10am",
        clockOut: "5:10pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Manual-Approved", color: statusColors["Manual-Approved"] }
    },
    {
        entryId: 68755,
        phaseCode: 3305,
        projectCode: 4892,
        facialStatus: { label: "Fail", color: facialStatusColors.Fail, match: "28%" },
        employee: "Sophia Lee",
        facialId: "ID#9005",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 8:20am",
        clockOut: "5:20pm",
        hours: "9h00m",
        location: { label: "Offsite", color: locationColors.Offsite },
        status: { label: "Rejected", color: statusColors["Rejected"] }
    },
    {
        entryId: 68756,
        phaseCode: 3306,
        projectCode: 4893,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "100%" },
        employee: "David Smith",
        facialId: "ID#9006",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 8:00am",
        clockOut: "5:00pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Auto-Approved", color: statusColors["Auto-Approved"] }
    },
    {
        entryId: 68757,
        phaseCode: 3307,
        projectCode: 4894,
        facialStatus: { label: "Fail", color: facialStatusColors.Fail, match: "42%" },
        employee: "Olivia Moore",
        facialId: "ID#9007",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 8:30am",
        clockOut: "5:30pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Needs Review", color: statusColors["Needs Review"] }
    },
    {
        entryId: 68758,
        phaseCode: 3308,
        projectCode: 4895,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "97%" },
        employee: "Noah Davis",
        facialId: "ID#9008",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 8:45am",
        clockOut: "5:45pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Manual-Approved", color: statusColors["Manual-Approved"] }
    },
    {
        entryId: 68759,
        phaseCode: 3309,
        projectCode: 4896,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "99%" },
        employee: "Ava Taylor",
        facialId: "ID#9009",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 9:00am",
        clockOut: "6:00pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Auto-Approved", color: statusColors["Auto-Approved"] }
    },
    {
        entryId: 68760,
        phaseCode: 3310,
        projectCode: 4897,
        facialStatus: { label: "Fail", color: facialStatusColors.Fail, match: "34%" },
        employee: "Lucas White",
        facialId: "ID#9010",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 9:15am",
        clockOut: "6:15pm",
        hours: "9h00m",
        location: { label: "Offsite", color: locationColors.Offsite },
        status: { label: "Rejected", color: statusColors["Rejected"] }
    },
    {
        entryId: 68761,
        phaseCode: 3311,
        projectCode: 4898,
        facialStatus: { label: "Pass", color: facialStatusColors.Pass, match: "96%" },
        employee: "Mason Hall",
        facialId: "ID#9011",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 7:45am",
        clockOut: "4:45pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Auto-Approved", color: statusColors["Auto-Approved"] }
    },
    {
        entryId: 68762,
        phaseCode: 3312,
        projectCode: 4899,
        facialStatus: { label: "Fail", color: facialStatusColors.Fail, match: "38%" },
        employee: "Ella Clark",
        facialId: "ID#9012",
        clockedInBy: "Jane Smith",
        clockIn: "11/01/24 9:30am",
        clockOut: "6:30pm",
        hours: "9h00m",
        location: { label: "Onsite", color: locationColors.Onsite },
        status: { label: "Needs Review", color: statusColors["Needs Review"] }
    }
];
