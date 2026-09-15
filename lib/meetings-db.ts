import type { SacramentMeeting } from "./types";

// In-memory sample data, stored oldest to newest. October 4, 2026 is
// general conference Sunday, so there is no ward meeting that week.
const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-09-06",
    meetingType: "testimony",
    presiding: "Bishop Daniel Carter",
    conducting: "Brother James Ellison",
    announcements: [
      "Ward temple night is Thursday, September 10, at 7:00 p.m.",
      "Primary program practice will be held after church in the Relief Society room.",
    ],
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Emily Nguyen",
    wardBusiness: [
      { description: "Release of Sister Hannah Brooks as Primary secretary" },
      { description: "Sustaining of Brother Samuel Ortiz as a Sunday School teacher" },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 196, title: "Jesus, Once of Humble Birth" },
    speakers: [
      {
        name: "Brother James Ellison",
        topic: "Bishopric testimony, followed by testimonies from the congregation",
        type: "speaker",
      },
    ],
    closingHymn: { number: 136, title: "I Know That My Redeemer Lives" },
    closingPrayer: "Brother Michael Adeyemi",
  },
  {
    id: 2,
    date: "2026-09-13",
    meetingType: "regular",
    presiding: "Bishop Daniel Carter",
    conducting: "Brother Aaron Whitfield",
    announcements: ["The ward service project at the community garden is Saturday at 9:00 a.m."],
    openingHymn: { number: 85, title: "How Firm a Foundation" },
    openingPrayer: "Sister Olivia Martinez",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "As Now We Take the Sacrament" },
    speakers: [
      { name: "Sister Lily Chen", topic: "Keeping covenants as a youth", type: "speaker" },
      { name: "Primary children", topic: "I Am a Child of God", type: "musical-number" },
      { name: "Brother Thomas Reid", topic: "The blessings of the Sabbath day", type: "speaker" },
    ],
    closingHymn: { number: 223, title: "Have I Done Any Good?" },
    closingPrayer: "Brother David Kim",
  },
  {
    id: 3,
    date: "2026-09-20",
    meetingType: "stake",
    presiding: "President Robert Hale, Stake Presidency",
    conducting: "Bishop Daniel Carter",
    announcements: ["Stake youth devotional is Sunday, September 27, at 7:00 p.m. at the stake center."],
    openingHymn: { number: 30, title: "Come, Come, Ye Saints" },
    openingPrayer: "Sister Rachel Moore",
    wardBusiness: [{ description: "Sustaining of Sister Megan Porter as Relief Society secretary" }],
    stakeBusiness: true,
    sacramentHymn: { number: 193, title: "I Stand All Amazed" },
    speakers: [
      { name: "Sister Rachel Moore", topic: "Prayer and personal revelation", type: "speaker" },
      { name: "Ward choir", topic: "Come, Follow Me", type: "musical-number" },
      { name: "Brother Peter Lawson, High Council", topic: "Ministering like the Savior", type: "speaker" },
    ],
    closingHymn: { number: 152, title: "God Be with You Till We Meet Again" },
    closingPrayer: "Brother Samuel Ortiz",
  },
  {
    id: 4,
    date: "2026-09-27",
    meetingType: "regular",
    presiding: "Bishop Daniel Carter",
    conducting: "Brother James Ellison",
    openingHymn: { number: 19, title: "We Thank Thee, O God, for a Prophet" },
    openingPrayer: "Brother Evan Holloway",
    wardBusiness: [{ description: "Welcome to the Porter family, who moved into the ward" }],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: "In Humility, Our Savior" },
    speakers: [
      { name: "Sister Megan Porter", topic: "Gratitude in all things", type: "speaker" },
      { name: "Sister Grace Holloway", topic: "Abide with Me!", type: "musical-number" },
      { name: "Brother Jacob Porter", topic: "Preparing to serve a mission", type: "speaker" },
    ],
    closingHymn: { number: 241, title: "Count Your Blessings" },
    closingPrayer: "Sister Emily Nguyen",
  },
  {
    id: 5,
    date: "2026-10-11",
    meetingType: "regular",
    presiding: "Bishop Daniel Carter",
    conducting: "Brother Aaron Whitfield",
    announcements: ["Sunday School will discuss favorite general conference talks next week."],
    openingHymn: { number: 26, title: "Joseph Smith's First Prayer" },
    openingPrayer: "Sister Hannah Brooks",
    wardBusiness: [{ description: "Recognition of Elder Nathan Brooks, returned from full-time missionary service" }],
    stakeBusiness: false,
    sacramentHymn: { number: 194, title: "There Is a Green Hill Far Away" },
    speakers: [
      { name: "Sister Hannah Brooks", topic: "The power of personal testimony", type: "speaker" },
      { name: "Youth choir", topic: "I Believe in Christ", type: "musical-number" },
      { name: "Elder Nathan Brooks", topic: "Lessons from full-time missionary service", type: "speaker" },
    ],
    closingHymn: { number: 219, title: "Because I Have Been Given Much" },
    closingPrayer: "Brother Thomas Reid",
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter((m) => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((m) => m.id === id) ?? null;
}
