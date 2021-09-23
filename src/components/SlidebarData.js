import React from "react";
import { Translation } from 'react-i18next';

export const SidebarData = [
  {
    title: <Translation>
      {
        (t, { i18n }) => <p>{t('content.HOME')}</p>
      }
    </Translation>,
    path: "/",
    submenu: [
      {
        title: "Sub Menu 1"
      },
      {
        title: "Sub Menu 2"
      }
    ]
  },
  {
    title: <Translation>
      {
        (t, { i18n }) => <p>{t('content.REPORTS')}</p>
      }
    </Translation>,
    path: "/reports",
    submenu: [
      {
        title: "Sub Menu 1"
      },
      {
        title: "Sub Menu 2"
      }
    ]
  },
  {
    title: "Menu 3",
    submenu: [
      {
        title: "Sub Menu 1",
        submenu: [
          {
            title: "Boom 1"
          },
          {
            title: "Boom 2",
          }
        ]
      },
      {
        title: "Sub Menu 2",
        submenu: [
          {
            title: "Deep 1"
          },
          {
            title: "Deep 2",
            submenu: [
              {
                title: "Lorem 1"
              },
              {
                title: "Lorem 2",
                submenu: [
                  {
                    title: "Super Deep"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Sub Menu 3"
      },
      {
        title: "Sub Menu 4",
        submenu: [
          {
            title: "Last 1"
          },
          {
            title: "Last 2"
          },
          {
            title: "Last 3"
          }
        ]
      }
    ]
  },
  {
    title: <Translation>
      {
        (t, { i18n }) => <p>{t('content.PRODUCTS')}</p>
      }
    </Translation>,
    path: "/products",
  },
  {
    title: <Translation>
      {
        (t, { i18n }) => <p>{t('content.TEAM')}</p>
      }
    </Translation>,
    path: "/team",  
  },
  {
    title: <Translation>
      {
        (t, { i18n }) => <p>{t('content.MESSAGE')}</p>
      }
    </Translation>,
    path: "/message",   
  },
  {
    title: <Translation>
      {
        (t, { i18n }) => <p>{t('content.SUPPORT')}</p>
      }
    </Translation>,
    path: "/support",   
  }
];
