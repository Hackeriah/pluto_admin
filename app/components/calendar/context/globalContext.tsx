// context/GlobalContext.ts
import React from "react";

interface GlobalContextProps {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  smallCalendarMonth: number;
  setSmallCalendarMonth: (index: number) => void;
  daySelected: any;
  setDaySelected: (day: any) => void;
  showEventModal: boolean;
  setShowEventModal: (show: boolean) => void;
  dispatchCalEvent: ({ type, payload }: { type: string; payload: any }) => void;
  savedEvents: any[];
  selectedEvent: any;
  setSelectedEvent: (event: any) => void;
  setLabels: (labels: any) => void;
  labels: any[];
  updateLabel: (label: any) => void;
  filteredEvents: any[];
}

const GlobalContext = React.createContext<GlobalContextProps>({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index: number) => {},
  daySelected: null,
  setDaySelected: (day: any) => {},
  showEventModal: false,
  setShowEventModal: (show: boolean) => {},
  dispatchCalEvent: ({ type, payload }: { type: string; payload: any }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: [],
});

export default GlobalContext;
