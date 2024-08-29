import { Select } from 'antd';
import CalendarSelection from './calendar.jsx'; 
import { Button } from "antd";
import { useState } from 'react';
//import ColorSelector from './ColorPicker.jsx';
import MultiSelect from './MultiSelect.jsx';

export default function CreateReminder() {
  const [showCalender, setShowCalendar] = useState(false);

  function showCalendarComponent() {
    setShowCalendar(!showCalender);  
  }

  return (
    <div className="flex flex-col gap-1 pl-2">
      <div className="py-2">
        <div className="text-lg">Title :</div>
        <input type="text" className="w-3/4 rounded-md h-8" />
      </div>

      <div className="py-1">
        <div className="text-lg">Description :</div>
        <textarea type="text" className="w-3/4 rounded-md h-20" />
      </div>
      
      <div className="gap-2 pt-2 pb-4 flex flex-row">
        <div className="text-lg mr-2 ">Send to :</div>
        <Select
          className="w-36 mr-2"
          placeholder="Select"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            { value: '0', label: 'Employee ' },
            { value: '1', label: 'Group Employee' },
            { value: '2', label: 'Department ' },
            { value: '3', label: 'All Company' },
          ]}
        />
        <MultiSelect />
      </div>

      <div className="gap-2 py-2 flex flex-row">
        <div className="text-lg mr-2">Priority:</div>
        <Select
          className="w-24 mr-2"
          showSearch
          placeholder="Priority"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            { value: '0', label: 'None', color:'#f8f9fa' },
            { value: '1', label: 'Low', color:'#f0ead2'},
            { value: '2', label: 'Medium', color:'#fcbf49'},
            { value: '3', label: 'High', color: '#d90429' },
          ]}
        />
        <div className='mr-2'>Date :</div>
        <button onClick={showCalendarComponent}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
        </button>
        {showCalender && <CalendarSelection />}
      </div>


      <div className="flex justify-end">
  <Button type="primary" className="mr-2 ">Send</Button>
</div>

    </div>
  );
}
