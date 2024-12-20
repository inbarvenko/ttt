import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import React, { useMemo } from "react";

import Layout from "../../../shared/ui/Layout/Layout";
import { tableData } from "./table.data";
import PersonChecklistsPageWrapper from "./PersonChecklistsPageWrapper";
import { Table } from "../../../widgets/Table";
import {
  ColDef,
  ITooltipParams,
  RowDoubleClickedEvent,
} from "ag-grid-enterprise";
import { StatusCellRenderer } from "../../../shared/lib/ag-grid/ui/StatusCellRender/StatusCellRender";
import { SizeColumnsToFitGridStrategy } from "@ag-grid-community/core";
import { Button } from "../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { DateCellRenderer } from "../../../shared/lib/ag-grid/ui/DateCellRenderer/DateCellRender";
import { UserContext } from "../../../shared/model/UserContext";
import UserTooltip from "../../../shared/ui/UserTooltip/UserTooltip";

const PersonChecklistsPage: React.FC = () => {
  const navigate = useNavigate();
  const user = React.useContext(UserContext);

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
        headerName: "Исполнитель",
        field: "CHL_executor",
        tooltipValueGetter: (p: ITooltipParams) => {
          return p.value;
        },
        tooltipComponentParams: { value: (params: any) => params.value },
        tooltipComponent: UserTooltip,
      },
      // {
      //   headerName: "Объект выполнения КП",
      //   field: "CHL_controlObject",
      // },
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
          minWidth: 220,
        },
      ],
    }),
    [],
  );

  const navigateCheckList = (e: RowDoubleClickedEvent<any, any>) => {
    const id = (e.data.CHL_id as string).slice(1);
    navigate(`checklist?id=${id}`, { relative: "path" });
  };

  return (
    <PersonChecklistsPageWrapper>
      <Layout
        title="Журнал чек-листов"
        headerClassName="header-style"
        bodyClassName="body-style"
      >
        <div className="table-header">
          {user.role === 2 && (
            <Button
              title="Мои чек-листы"
              className="table-header-button"
              onClick={() => console.log("filter mine")}
            />
          )}
          <Button
            title="Создать новый чек-лист"
            className="table-header-button"
            onClick={() => navigate("checklist", { relative: "path" })}
          />
        </div>
        <Table
          // enableBrowserTooltips
          data={tableData}
          columnDefs={colDefsData}
          autoSizeStrategy={autoSize}
          onRowDoubleClicked={navigateCheckList}
        />
      </Layout>
    </PersonChecklistsPageWrapper>
  );
};

export default PersonChecklistsPage;
