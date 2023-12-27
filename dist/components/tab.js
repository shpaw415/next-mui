import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Tab, Tabs, ThemeProvider, Typography, } from "@mui/material";
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
import { ThemeContext, createregisterKeys } from "..";
function CustomTabPanel(props) {
    const { children, value, index, id, containerSx } = props;
    return (_jsx("div", { role: "tabpanel", hidden: value !== index, id: `${id}-tabpanel-${index}`, "aria-labelledby": `${id}-tab-${index}`, children: value === index && (_jsx(Box, { sx: { p: 3, ...containerSx }, children: _jsx(Typography, { children: children }) })) }));
}
function a11yProps(index, id) {
    return {
        id: `${id}-tab-${index}`,
        "aria-controls": `${id}-tabpanel-${index}`,
    };
}
export function ScrollableTabs({ items, id, color, containersx, tabHeadersx, registerkeys, }) {
    const [value, setValue] = useState(0);
    const theme = React.useContext(ThemeContext);
    useRegister(createregisterKeys({
        keys: {
            primary: registerkeys?.primary,
            secondary: registerkeys?.secondary,
        },
        registerOptions: {
            setTab: setValue,
        },
    }));
    let index = 0;
    let index2 = 0;
    const component = (_jsxs(Box, { sx: { width: "100%" }, children: [_jsx(Box, { sx: {
                    maxWidth: { xs: 320, sm: 480 },
                    bgcolor: "primary.light",
                    ...tabHeadersx,
                }, children: _jsx(Tabs, { value: value, onChange: (e, value) => {
                        setValue(value);
                        e;
                    }, variant: "scrollable", scrollButtons: "auto", "aria-label": "scrollable auto tabs example", indicatorColor: color || "secondary", textColor: color || "secondary", children: items.map((item) => {
                        index++;
                        return (_jsx(Tab, { label: item.label, ...a11yProps(index - 1, id) }, `tab-${id}-${index}`));
                    }) }) }), items.map((item) => {
                index2++;
                return (_jsx(CustomTabPanel, { value: value, index: index2 - 1, id: id, containerSx: containersx, children: item.children }, `panel-${id}-${index2}`));
            })] }));
    return theme.theme ? (_jsx(ThemeProvider, { theme: theme, children: component })) : (component);
}
export function GroupingTable(data) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (_jsxs(Paper, { sx: { width: "100%", bgcolor: "primary.main" }, children: [_jsx(TableContainer, { sx: { maxHeight: 440 }, children: _jsxs(Table, { stickyHeader: true, "aria-label": "sticky table", children: [_jsxs(TableHead, { children: [data.tableCell && (_jsx(TableRow, { sx: { bgcolor: "color.main" }, children: data.tableCell.map((el) => (_jsx(TableCell, { align: el.align ? el.align : "center", colSpan: el.colspan, children: el.value }))) })), _jsx(TableRow, { children: data.header.map((column) => (_jsx(TableCell, { align: column.align, style: { top: 57, minWidth: column.minWidth }, children: column.label }, column.id))) })] }), _jsx(TableBody, { children: data.columns
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                return (_jsx(TableRow, { hover: true, role: "checkbox", tabIndex: -1, children: data.header.map((column) => {
                                        const value = row[column.id];
                                        return (_jsx(TableCell, { align: column.align, children: column.format && typeof value === "number"
                                                ? column.format(value)
                                                : value }, column.id));
                                    }) }, row.code));
                            }) })] }) }), _jsx(TablePagination, { rowsPerPageOptions: [10, 25, 100], component: "div", count: data.columns.length, rowsPerPage: rowsPerPage, page: page, onPageChange: handleChangePage, onRowsPerPageChange: handleChangeRowsPerPage })] }));
}
