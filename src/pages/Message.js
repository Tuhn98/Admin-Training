import React from "react";
import { useTranslation } from 'react-i18next';

export default function Message() {
  const { t } = useTranslation()
  return (
    <div className="message">
      <h1>{t('content.MESSAGE')}</h1>
    </div>
  );
}