import React from "react";
import { makeStyles } from "@mui/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";

const TimePicker = () => {
  const { font, fontHolder, background, backgroundHolder, border } =
    useSelector((state) => state);

  const useStyles = makeStyles({
    root: {
      width: "100%",
      borderColor: border,
      color: font,
      "&::hover": {
        borderColor: border,
      },
      svg: { font },
      input: {
        "&::placeholder": {
          textOverflow: "ellipsis !important",
          color: font,
        },
      },
    },
  });
  const classes = useStyles();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        defaultValue={dayjs("2022-04-17T15:30")}
        className={classes.root}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
