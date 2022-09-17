import {
  ColDef,
  ColGroupDef,
} from 'ag-grid-community';
import { KeyValues } from './types';

export const columnDef: (ColDef | ColGroupDef | KeyValues)[] = [
  {
    headerName: 'File Name',
    field: 'name',
    sortable: true,
    filter: 'agTextColumnFilter',
    pinned: 'left'
  },
  {
    headerName: 'Code',
    field: 'subCode',
    sortable: true,
    filter: 'agTextColumnFilter',
    minWidth: 200,
  },
  {
    headerName: 'PDF For',
    field: 'pdfFor',
    sortable: true,
    filter: 'agTextColumnFilter',
    minWidth: 200,
  },
  {
    headerName: 'Sem',
    field: 'sem',
    sortable: true,
    filter: 'agNumberColumnFilter',
  },
  {
    headerName: 'Year',
    field: 'year',
    sortable: true,
    filter: 'agTextColumnFilter',
    // minWidth: 300,
  },
  {
    headerName: 'Teacher',
    field: 'teacher',
    sortable: true,
    filter: 'agTextColumnFilter',
    // minWidth: 300,
  },
  // {
  //   headerName: 'Actions',
  //   field: '',
  //   sortable: true,
  //   filter: 'agTextColumnFilter',
  // },
]