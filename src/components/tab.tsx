import {
  Box,
  SxProps,
  Tab,
  Tabs,
  Theme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRegister } from "../register/register";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ThemeContext, createregisterKeys, registerKey } from "..";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  id: string;
  containerSx?: SxProps<Theme>;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, id, containerSx } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3, ...containerSx }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number, id: string) {
  return {
    id: `${id}-tab-${index}`,
    "aria-controls": `${id}-tabpanel-${index}`,
  };
}

interface scrollTabsProps {
  items: Array<tabStruct>;
  id: string;
  color?: "primary" | "secondary";
  containersx?: SxProps<Theme>;
  tabHeadersx?: SxProps<Theme>;
  registerkeys?: registerKey;
}
interface tabStruct {
  label: string;
  children: JSX.Element;
}

export interface ScrollableTabsRegister {
  setTab: (value: number) => void;
}

export function ScrollableTabs({
  items,
  id,
  color,
  containersx,
  tabHeadersx,
  registerkeys,
}: scrollTabsProps) {
  const [value, setValue] = useState(0);
  const theme = React.useContext(ThemeContext);
  useRegister(
    createregisterKeys<ScrollableTabsRegister>({
      keys: {
        primary: registerkeys?.primary,
        secondary: registerkeys?.secondary,
      },
      registerOptions: {
        setTab: setValue,
      },
    })
  );

  let index = 0;
  let index2 = 0;

  const component = (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          maxWidth: { xs: 320, sm: 480 },
          bgcolor: "primary.light",
          ...tabHeadersx,
        }}
      >
        <Tabs
          value={value}
          onChange={(e, value) => {
            setValue(value);
            e;
          }}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          indicatorColor={color || "secondary"}
          textColor={color || "secondary"}
        >
          {items.map((item) => {
            index++;
            return (
              <Tab
                key={`tab-${id}-${index}`}
                label={item.label}
                {...a11yProps(index - 1, id)}
              />
            );
          })}
        </Tabs>
      </Box>
      {items.map((item) => {
        index2++;
        return (
          <CustomTabPanel
            key={`panel-${id}-${index2}`}
            value={value}
            index={index2 - 1}
            id={id}
            containerSx={containersx}
          >
            {item.children}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
  return theme.theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

/////////////////////////////////////////////////////////////

export interface _GroupTable {
  header: Array<Column>;
  /* data to display {[keyof header.id]: string, ...} */
  columns: Array<{ [key: string]: string }>;
  /* header grouping */
  tableCell?: Array<{
    value: string;
    colspan: number;
    align?: "center" | "left" | "right";
  }>;
}
interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export function GroupingTable(data: _GroupTable) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", bgcolor: "primary.main" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            {data.tableCell && (
              <TableRow sx={{ bgcolor: "color.main" }}>
                {data.tableCell.map((el) => (
                  <TableCell
                    align={el.align ? el.align : "center"}
                    colSpan={el.colspan}
                  >
                    {el.value}
                  </TableCell>
                ))}
              </TableRow>
            )}
            <TableRow>
              {data.header.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.columns
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {data.header.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.columns.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
