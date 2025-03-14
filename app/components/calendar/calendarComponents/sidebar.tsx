
import CreateEventButton from "./createEventButton";
import SmallCalendar from "./smallCalendar";
import Labels from "./labels";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-[25%]">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
