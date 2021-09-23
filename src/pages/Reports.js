import React from "react";
import { useTranslation } from 'react-i18next';
export default function Reports() {
  const { t } = useTranslation()
  return (
    <div className="reports">
      <h1>{t('content.REPORTS')}</h1>
    </div>
  );
}
