import { Select } from 'antd';
import { Calendar, theme } from 'antd';

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

export default function CreateReminder(){
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,};

    return(
<div className="flex flex-col gap-6 p-4">
<div className="  gap-6 pt-2 pb-4">
  <p className="text-lg">Title :</p>
  <input type="text" className="w-3/4 rounded-md h-8" />
</div>

<div className="  gap-6 pt-2 pb-4 ">
  <p className="text-lg">Description :</p>
  <textarea type="text" className="w-3/4 rounded-md h-20" />
</div>
<div className="  gap-4 pt-2 pb-4  flex flex-row">
  <p className="text-lg pr-4 ">priority:
  <Select className='w-24 pl-3'
    showSearch
    placeholder="Select Priority"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
        {
            value:'0',
            label:'None',
        },
      {
        value: '1',
        label: 'Low',
      },
      {
        value: '2',
        label: 'Medium',
      },
      {
        value: '3',
        label: 'High',
      },
    ]}
  />
  </p>
  <p>Date : </p>
  <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
</div>
 
</div>

    );
    
}