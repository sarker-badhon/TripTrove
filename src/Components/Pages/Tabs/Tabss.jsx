import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

const Tabss = () => {
  const [value, setValue] = useState("1");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-slate-200 p-3 rounded ">
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant={isSmallScreen ? "scrollable" : "standard"}
            scrollButtons={isSmallScreen ? "auto" : false}
            centered={!isSmallScreen}
          >
            <Tab
              label="TOUR"
              value="1"
              // sx={{ color: 'white' }}
            />
            <Tab
              label="HOTEL"
              value="2"
              sx={{
                // color: 'white',
                border: "1px solid white",
              }}
            />
            <Tab
              label="VISA"
              value="3"
              // sx={{ color: 'white' }}
            />
            <Tab
              label="ACTIVITIES"
              value="4"
              // sx={{ color: 'white' }}
            />
            <Tab
              label="TRANSPORT"
              value="5"
              // sx={{ color: 'white' }}
            />
          </TabList>
        </Box>
        <div className="text-center ">
          <TabPanel value="1">
            <Grid container spacing={1}>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <FormControl fullWidth sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel htmlFor={`grouped-native-select-${index}`}>
                      Grouping
                    </InputLabel>
                    <Select
                      native
                      defaultValue=""
                      id={`grouped-native-select-${index}`}
                      label="Grouping"
                    >
                      <option aria-label="None" value="" />
                      <optgroup label="Category 1">
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                      </optgroup>
                    </Select>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
           
          </TabPanel>

          <TabPanel value="2">
            <Grid container>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <FormControl fullWidth sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel htmlFor={`grouped-native-select-${index}`}>
                      Grouping
                    </InputLabel>
                    <Select
                      native
                      defaultValue=""
                      id={`grouped-native-select-${index}`}
                      label="Grouping"
                    >
                      <option aria-label="None" value="" />
                      <optgroup label="Category 1">
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                      </optgroup>
                    </Select>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
         
          </TabPanel>

          <TabPanel value="3">
            <Grid container>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <FormControl fullWidth sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel htmlFor={`grouped-native-select-${index}`}>
                      Grouping
                    </InputLabel>
                    <Select
                      native
                      defaultValue=""
                      id={`grouped-native-select-${index}`}
                      label="Grouping"
                    >
                      <option aria-label="None" value="" />
                      <optgroup label="Category 1">
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                      </optgroup>
                    </Select>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
           
          </TabPanel>

          <TabPanel value="4">
            <Grid container>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <FormControl fullWidth sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel htmlFor={`grouped-native-select-${index}`}>
                      Grouping
                    </InputLabel>
                    <Select
                      native
                      defaultValue=""
                      id={`grouped-native-select-${index}`}
                      label="Grouping"
                    >
                      <option aria-label="None" value="" />
                      <optgroup label="Category 1">
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                      </optgroup>
                    </Select>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
            
          </TabPanel>

          <TabPanel value="5">
            <Grid container>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <FormControl fullWidth sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel htmlFor={`grouped-native-select-${index}`}>
                      Grouping
                    </InputLabel>
                    <Select
                      native
                      defaultValue=""
                      id={`grouped-native-select-${index}`}
                      label="Grouping"
                    >
                      <option aria-label="None" value="" />
                      <optgroup label="Category 1">
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                      </optgroup>
                    </Select>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
         
          </TabPanel>
        </div>
      </TabContext>
      <Grid container justifyContent="center" sx={{ }}>
        <button className="bg-red-400 text-white px-10 py-4 rounded mb-4">
          Search Now <SearchIcon />
        </button>
      </Grid>
    </div>
  );
};

export default Tabss;
