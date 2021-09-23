import React from "react";
// import { useTranslation } from 'react-i18next';
// import TableData from "../components/TableData";
import SortableTable from "../components/TableDrag";

export default function Home({list}) {
  // const { t } = useTranslation()
  return (
    <div className="home">
      {/* <TableData data={list}/> */}
      <SortableTable/>
    </div>
  );
}
