import * as React from "react";
// MUI
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker";

export default function DatePicker() {
    const [value, setValue] = React.useState([null, null]);

    return (
        <Stack spacing={3}>
            {window.innerWidth < 700 ? (
                <LocalizationProvider  dateAdapter={AdapterDateFns} localeText={{ start: "Start", end: "Until" }}>
                    <MobileDateRangePicker 
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField
                                    {...startProps}
                                />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
            ) : (
                <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: "Start", end: "Until" }}>
                    <DesktopDateRangePicker
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
            )}
        </Stack>
    );
}
