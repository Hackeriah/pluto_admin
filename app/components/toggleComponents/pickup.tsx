import GoogleCalendarEmbed from "@/app/utils/googleCalendarEmbed"
import Calendar from "../calendar/calendar"

export default function Pickup() {
  return (
    <div className='flex gap-8'>
      {/* <GoogleCalendarEmbed className="w-[205%] bg-red-200" />
      <GoogleCalendarEmbed className="w-[75%] bg-green-200" /> */}

      <Calendar/>
    </div>
  )
}
