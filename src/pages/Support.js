import React from "react";
import { useTranslation } from 'react-i18next';
export default function Support() {
  const { t } = useTranslation()
  return (
    <div className="support">
      <h1>{t('content.SUPPORT')}</h1>
    </div>
  );
}