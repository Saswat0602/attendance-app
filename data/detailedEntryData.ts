
export const detailedEntryData = {
  entryId: 68750,
  employee: {
    name: "Jose Rodriguez",
    employeeId: "12345678",
    profilePicture: "/images/jose_rodriguez_profile.jpg",
    facialIdScore: "90% Match",
    facialCaptures: [
      "/images/facial_capture_1.jpg",
      "/images/facial_capture_2.jpg",
      "/images/facial_capture_3.jpg"
    ],
  },
  clockIn: {
    time: "11/01/24 8:55am",
    location: {
      lat: "37.774929",
      long: "-122.419416",
      address: "Sunset Park, 2233 Market St, San Francisco, CA 94114",
    }
  },
  clockOut: {
    time: "11/01/24 5:58pm",
    location: {
      lat: "37.779026",
      long: "-122.419906",
      address: "Sunset Park, 2250 Market St, San Francisco, CA 94114",
    }
  },
  hours: "10h 00m",
  status: "Auto-Approved ✅",
  phaseCode: "3255",
  projectCode: "5582",
  projectName: "4842 - 5000 Saultbridge Boulevard",
  passwordUsed: "2009 - First time CMP",
  department: "Field",
  approvalMode: "Web",
  approvedBy: "John Doe (Project Manager)",
  comments: [
    {
      author: "Frank Gomez",
      timeAgo: "17 hours ago",
      comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit..."
    },
    {
      author: "Lesly Smith",
      timeAgo: "1 day ago",
      comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit..."
    },
    {
      author: "Elena Burquez",
      timeAgo: "22 hrs ago",
      comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit..."
    }
  ],
  activityLog: [
    {
      datetime: "11/01/24 - 5:45pm",
      action: "Jose Rodriguez clocked-out (via Web)"
    },
    {
      datetime: "11/01/24 - 8:55am",
      action: "Jose Rodriguez clocked-in (via Web)"
    },
    {
      datetime: "11/01/24 - 6:30am",
      action: "Annie Cabraladino updated the Phase Code from 0000 to 5582"
    },
    {
      datetime: "11/01/24 - 6:00am",
      action: "Annie Cabraladino changed the entry status to Manual - Approved"
    },
    {
      datetime: "11/01/24 - 5:00am",
      action: "Annie Cabraladino created the entry"
    }
  ],
  recentEntries: [
    {
      entryId: 68745,
      date: "10/31/24",
      phaseCode: "3201",
      projectCode: "4648",
      match: "30% Match",
      clockIn: "8:00am",
      clockOut: "4:00pm",
      hours: "8h 00m",
      location: "Onsite",
      status: "Needs Review"
    },
    {
      entryId: 68746,
      date: "10/30/24",
      phaseCode: "3255",
      projectCode: "5582",
      match: "40% Match",
      clockIn: "8:30am",
      clockOut: "5:30pm",
      hours: "9h 00m",
      location: "Onsite",
      status: "Manual-Approved"
    },
    {
      entryId: 68747,
      date: "10/29/24",
      phaseCode: "3255",
      projectCode: "5582",
      match: "40% Match",
      clockIn: "8:00am",
      clockOut: "6:00pm",
      hours: "10h 00m",
      location: "Offsite",
      status: "Manual-Approved"
    },
    {
      entryId: 68748,
      date: "10/28/24",
      phaseCode: "3255",
      projectCode: "5582",
      match: "100% Match",
      clockIn: "8:55am",
      clockOut: "5:58pm",
      hours: "10h 00m",
      location: "Onsite",
      status: "Auto-Approved"
    }
  ]
};
