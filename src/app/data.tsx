import {
  BiFileBlank,
  BiFolder,
  BiGitRepoForked,
  BiHelpCircle,
  BiHomeAlt2,
} from "react-icons/bi";

import { SiderItemType } from "../widgets/Sidebar/types/types";
import NewChecklistPage from "../pages/CheckList/NewChecklistPage/NewChecklistPage";
import PersonChecklistsPage from "../pages/CheckList/PersonChecklistsPage/PersonChecklistsPage";
import TableCPPage from "../pages/TablesPages/TableCPPage";
import EmptyPage from "../pages/Program/EmptyPage/EmptyPage";
import HelpPage from "../pages/Program/HelpPage/HelpPage";
import AddKPPage from "../pages/CheckList/AddKPPage/AddKPPage";

export const routersData: SiderItemType[] = [
  {
    label: "Статистика выполнения КП",
    path: "/",
    icon: <BiHomeAlt2 size={20} />,
    element: <EmptyPage />,
  },
  {
    label: "Отчётность",
    icon: <BiFileBlank size={20} />,
    path: "/reporting",
    children: [
      {
        label: "Чек-листы",
        icon: <BiFileBlank size={20} />,
        path: "/all-checklists",
        element: <PersonChecklistsPage />,
        doNotShowChildrenInSidebar: true,
        children: [
          {
            label: "Новый чек-лист",
            path: "/checklist",
            element: <NewChecklistPage />,
            children: [
              {
                label: "Форма добавления КП",
                path: "/new-KP",
                element: <AddKPPage />,
              },
            ],
          },
        ],
      },
      {
        label: "Результат проведения КП",
        path: "/results",
        element: <EmptyPage />,
      },
      {
        label: "Сводный результат КП",
        path: "/summary",
        element: <EmptyPage />,
      },
      {
        label: "Результат КП оп Обществу",
        path: "/total-results",
        element: <EmptyPage />,
      },
    ],
  },
  {
    label: "Журналы",
    path: "/journals",
    icon: <BiGitRepoForked size={20} />,
    element: <EmptyPage />,
  },
  {
    label: "Справочники",
    path: "/tables",
    icon: <BiFolder size={20} />,
    children: [
      {
        label: "Контрольные процедуры",
        path: "/KP",
        element: <TableCPPage />,
      },
      {
        label: "Структурные подразделения",
        path: "/structure",
        element: <EmptyPage />,
      },
      {
        label: "Объекты контроля",
        path: "/objects",
        element: <EmptyPage />,
      },
      {
        label: "Правила подсчета КП",
        path: "/rules",
        element: <EmptyPage />,
      },
    ],
  },
  {
    label: "Помощь",
    path: "/help",
    icon: <BiHelpCircle size={20} />,
    element: <HelpPage />,
  },
];

export const executorRoutersData: SiderItemType[] = [
  {
    label: "Главная страница",
    path: "/",
    icon: <BiHomeAlt2 size={20} />,
    element: <EmptyPage />,
  },
  {
    label: "Чек-листы",
    icon: <BiFileBlank size={20} />,
    path: "/all-checklists",
    element: <PersonChecklistsPage />,
    doNotShowChildrenInSidebar: true,
    children: [
      {
        label: "Новый чек-лист",
        path: "/checklist",
        element: <NewChecklistPage />,
        children: [
          {
            label: "Форма добавления КП",
            path: "/new-KP",
            element: <NewChecklistPage />,
          },
        ],
      },
    ],
  },
  {
    label: "Справочник КП",
    path: "/tables",
    icon: <BiFolder size={20} />,
    element: <EmptyPage />,
  },
  {
    label: "Помощь",
    path: "/help",
    icon: <BiHelpCircle size={20} />,
    element: <HelpPage />,
  },
];