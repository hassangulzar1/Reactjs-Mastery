import MeetupList from "@/components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2303361757/display_1500/stock-photo-woman-pouring-tea-for-girlfriend-in-cup-standing-at-park-during-winter-2303361757.jpg",
    address: "Some Address 5, 123 Some City",
    desctiption: "This is first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2303361757/display_1500/stock-photo-woman-pouring-tea-for-girlfriend-in-cup-standing-at-park-during-winter-2303361757.jpg",
    address: "Some Address 5, 123 Some City",
    desctiption: "This is second meetup",
  },
  {
    id: "m3",
    title: "A third Meetup",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2303361757/display_1500/stock-photo-woman-pouring-tea-for-girlfriend-in-cup-standing-at-park-during-winter-2303361757.jpg",
    address: "Some Address 5, 123 Some City",
    desctiption: "This is Third meetup",
  },
];

export default function Home() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
