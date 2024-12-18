import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import React, { useMemo } from "react";

import Layout from "../../../shared/ui/Layout/Layout";
import { tableData } from "./table.data";
import PersonChecklistsPageWrapper from "./PersonChecklistsPageWrapper";
import { Table } from "../../../widgets/Table";
import { ColDef } from "ag-grid-enterprise";
import { StatusCellRenderer } from "../../../shared/lib/ag-grid/ui/StatusCellRender/StatusCellRender";
import { SizeColumnsToFitGridStrategy } from "@ag-grid-community/core";
import { Button } from "../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { DateCellRenderer } from "../../../shared/lib/ag-grid/ui/DateCellRenderer/DateCellRender";

const PersonChecklistsPage: React.FC = () => {
  const navigate = useNavigate();

  const colDefsData = useMemo<ColDef[]>(
    () => [
      {
        headerName: "Идентификационный номер",
        field: "CHL_id",
        resizable: true,
      },
      {
        headerName: "Статус",
        field: "CHL_status",

        valueFormatter: (p) => {
          return p.value === 1 ? "Разблокирован" : "Заблокирован";
        },
        cellRenderer: StatusCellRenderer,
        cellEditor: "agRichSelectCellEditor",
        maxWidth: 130,
        cellEditorParams: {
          values: ["Разблокирован", "Подготовлен"],
        },
        cellStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      {
        headerName: "Филиал",
        field: "CHL_filial",
      },
      {
        headerName: "Структурное подразделение",
        field: "CHL_responsibleDepartment",
      },
      {
        headerName: "Объект выполнения КП",
        field: "CHL_controlObject",
      },
      {
        headerName: "Дата создания",
        field: "CHL_createDate",
        cellDataType: "date",
        cellRenderer: DateCellRenderer,
        filter: "agDateColumnFilter",
        // cellEditor: "agDateCellEditor",
      },
      {
        headerName: "Дата изменения",
        field: "CHL_editDate",
        cellDataType: "date",
        cellRenderer: DateCellRenderer,
        filter: "agDateColumnFilter",

        // cellEditor: "agDateCellEditor",
      },
      {
        headerName: "Исполнитель",
        field: "CHL_executor",
      },
    ],
    [],
  );

  const autoSize: SizeColumnsToFitGridStrategy = useMemo(
    () => ({
      type: "fitGridWidth",
      defaultMinWidth: 100,
      columnLimits: [
        {
          colId: "CHL_id",
          minWidth: 150,
        },
        {
          colId: "CHL_executor",
          minWidth: 250,
        },
      ],
    }),
    [],
  );

  return (
    <PersonChecklistsPageWrapper>
      <Layout
        title="Журнал чек-листов"
        headerClassName="header-style"
        bodyClassName="body-style"
      >
        <div className="table-header">
          <Button
            title="Создать новый чек-лист"
            className="table-header-button"
            onClick={() => navigate("checklist", { relative: "path" })}
          />
        </div>
        <Table
          data={tableData}
          columnDefs={colDefsData}
          autoSizeStrategy={autoSize}
        />
      </Layout>
    </PersonChecklistsPageWrapper>
  );
};

export default PersonChecklistsPage;
