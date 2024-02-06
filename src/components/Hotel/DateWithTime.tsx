import moment from "moment";
import "rc-time-picker/assets/index.css";

import TimePicker from "rc-time-picker";
const DateWithTime = () => {
  const format = "h:mm a";

  const now = moment().hour(0).minute(0);
  return (
    <TimePicker
    
      showSecond={false}
      defaultValue={now}
      className="xxx"
      format={format}
      use12Hours
      inputReadOnly
    />
  );
};

export default DateWithTime;
