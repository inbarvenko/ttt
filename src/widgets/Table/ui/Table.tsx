import React, { useMemo, useState } from "react";

import { GridChartsModule } from "@ag-grid-enterprise/charts-enterprise";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { SparklinesModule } from "@ag-grid-enterprise/sparklines";

import { ModuleRegistry } from "@ag-grid-community/core";
import { BiBarChartSquare, BiEditAlt } from "react-icons/bi";
import { ColDef } from "ag-grid-enterprise";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

import { AG_GRID_LOCALE_RU } from "../config/locale";
import TableWrapper from "./TableWrapper";

type Props = AgGridReactProps & {
  data: any[];
  editing?: boolean;
  columnDefs: ColDef<any, any>[];
};

ModuleRegistry.registerModules([
  ExcelExportModule,
  FiltersToolPanelModule,
  GridChartsModule,
  RangeSelectionModule,
  RowGroupingModule,
  SetFilterModule,
  RichSelectModule,
  SparklinesModule,
]);

const Table: React.FC<Props> = ({ data, columnDefs, ...props }: Props) => {
  const paginationPageSize = 25;
  const paginationPageSizeSelector = [25, 50, 100];

  const editColumnConfig = useMemo<ColDef[]>(
    () => [
      {
        field: "edit",
        floatingFilter: false,
        filter: false,
        sortable: false,
        editable: false,
        lockPosition: "right",
        width: 50,
        maxWidth: 50,
        cellStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        headerComponent: () => (
          <div onClick={() => console.log("header click")}>
            <BiBarChartSquare
              style={{ verticalAlign: "middle", cursor: "pointer" }}
              size={20}
              color="#808080"
            />
          </div>
        ),
        cellRenderer: () => (
          <div onClick={() => console.log("click")}>
            <BiEditAlt
              style={{ verticalAlign: "middle", cursor: "pointer" }}
              size={20}
            />
          </div>
        ),
      },
    ],
    [],
  );

  const [rowData, setRowData] = useState(data);
  const colDefsData = useMemo<ColDef[]>(
    () => (props.editing ? [...columnDefs, ...editColumnConfig] : columnDefs),
    [columnDefs, editColumnConfig, props.editing],
  );

  const defaultColDef = useMemo<ColDef>(
    () =>
      props.defaultColDef || {
        filter: true,
        editable: false,
        resizable: true,
        floatingFilter: true,
      },
    [],
  );

  return (
    <TableWrapper>
      <AgGridReact
        pagination
        enableCharts
        tooltipInteraction
        tooltipTrigger="hover"
        tooltipShowDelay={500}
        tooltipHideDelay={10000}
        className="ag-theme-quartz"
        containerStyle={{ height: "auto", width: "100%" }}
        suppressClickEdit={props.editing}
        localeText={AG_GRID_LOCALE_RU}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={colDefsData}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        {...props}
      />
    </TableWrapper>
  );
};

export default Table;
