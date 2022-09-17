import { PDF } from "@/constants";
import React, { useMemo, useRef, useState } from "react";
import { ColDef, ColGroupDef, GridOptions, SideBarDef } from "ag-grid-community";
import { columnDef } from "@/constants/ColumnDefs";
import { AgGridReact } from "ag-grid-react";

interface Props {
  documents: PDF[]
}

const DocumentsTable = (props: Props): JSX.Element => {
  const { documents } = props;

  const gridRef = useRef<AgGridReact>(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: '580px' }), []);
  const rowData = documents;
  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>(columnDef);

  const gridOptions: GridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    rowSelection: 'single',
    animateRows: true,
    overlayLoadingTemplate:
      '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>',
    // onCellClicked: (e) => navigate(`plots/${e.data.plotId}`, { replace: true, state })
  };

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      resizable: true,
      floatingFilter: true,
      menuTabs: ['filterMenuTab'],
    };
  }, []);

  const sideBar = useMemo<SideBarDef | string | string[] | boolean | null>(() => {
    return {
      toolPanels: ['filters'],
    };
  }, []);


  return (
    <>
      <div style={containerStyle} className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          // onGridReady={onGridReady}
          defaultColDef={defaultColDef}
          sideBar={sideBar}
          animateRows={true}
          pagination={true}
          paginationPageSize={10}
          gridOptions={gridOptions}
        // domLayout="autoHeight"
        // onRowDataUpdated={onRowDataUpdated}
        // onPaginationChanged={onPaginationChanged}
        // onSortChanged={handleColumnSort}
        // onFilterChanged={handleColumnFilter}
        />
      </div>
      {/* <div>
        {
          documents.map((document: PDF): JSX.Element => {
            const { id, name, subCode, sem, pdfFor, teacher, viewLink, views, year } = document;
            return (
              <Grid container key={id}>
                <Grid item xs={2} >{name}</Grid>
                <Grid item xs={2}>{subCode}</Grid>
                <Grid item xs={2}>{pdfFor}</Grid>
                <Grid item xs={2}>Sem: {sem} Year: {year}</Grid>
                <Grid item xs={2}>{teacher}</Grid>
                <Grid item xs={2} mb={1} >
                  <IconButton><RemoveRedEyeTwoTone color="action" /></IconButton>
                  <Modal
                    title="Edit"
                    text={<EditTwoTone color="primary" />}
                    content={<span>this should be the modal content</span>}
                    icon
                  />
                  <Modal
                    title="Delete"
                    text={<DeleteTwoTone color='error' />}
                    content={<span>this should be the modal content</span>}
                    icon
                  />
                </Grid>
              </Grid>
            )
          })
        }
      </div> */}
    </>
  )
}

export default DocumentsTable;