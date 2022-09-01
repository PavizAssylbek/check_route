import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

export type MenuItem = Required<MenuProps>['items'][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const homeMenuLists: MenuItem[] = [
  getItem(<Link to="/">Реестр</Link>, '/'),
  getItem('Журнал', 'journal', null, []),
];

const CustomLink = (props: any) => {
  const { disabled, to, name, onClick, isParent } = props;
  if (disabled) {
    return <>{name}</>;
  }

  return (
    <Link to={`${to}?isParent=${isParent}`} onClick={() => onClick(props)}>
      {name}
    </Link>
  );
};

export const updateJournalList = (date: any) => {
  return date.map((element: any) => {
    if (element.childs === null) {
      return getItem(
        <CustomLink to={`/${element.id}`} {...element}>
          {element.name}
        </CustomLink>,
        `/${element.id}`
      );
    } else {
      return getItem(element.name, `/${element.id}`, null, [...updateJournalList(element.childs)]);
    }
  });
};
