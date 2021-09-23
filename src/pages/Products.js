import React from "react";
import { useTranslation } from 'react-i18next';
export default function Products() {
  const { t } = useTranslation()
  return (
    <div className="products">
      <h1>{t('content.PRODUCTS')}</h1>
    </div>
  );
}
