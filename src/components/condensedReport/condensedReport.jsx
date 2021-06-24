import numbro from "numbro";
import PropTypes from "prop-types";
import React from "react";

const headStyle = {
	"text-align": "right"
};

const rowHeadStyle = (isSum = false) => ({
	background: isSum ? "#f6f6f6" : "transparent"
});

const rowStyle = (isSum = false) => ({
	textAlign: "right",
	fontWeight: isSum ? "bold" : "normal",
	...rowHeadStyle(isSum)
});

const CondensedReport = ({ columns = [], rows = [], cells = [] }) => (
    <>
      <h2>Income statement for July 2021</h2>
      <table className="wk-table wk-table-small">
        <thead>
          <tr>
            <th></th>
            <ColumnHeadings columns={columns}/>
          </tr>
        </thead>
        <tbody>
          <Rows cells={cells} rows={rows} />
        </tbody>
      </table>
    </>
);

CondensedReport.propTypes = {
	cells: PropTypes.array,
	columns: PropTypes.array,
	rows: PropTypes.array
};

const ColumnHeadings = ({ columns }) => columns.map((column, index) => <th key={index} style={headStyle}>{column}</th>);

const Rows = ({ rows, cells }) => rows.map((row, index) => <Row key={index} cells={cells[index]} { ...row } />);

const Row = ({ label, isSum = false, cells = [] }) => (
    <tr>
      <th style={rowHeadStyle(isSum)}>{label}</th>
      {cells.map((cell, index) => (
          <td
            key={index}
            style={rowStyle(isSum)}
          >
            {numbro(cell).format({ thousandSeparated: true })}
          </td>
      ))}
    </tr>
);

Row.propTypes = {
	cells: PropTypes.array,
	isSum: PropTypes.bool,
	label: PropTypes.string.isRequired
};

export default CondensedReport;
