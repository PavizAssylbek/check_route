import { Button, Layout, Menu, Spin } from 'antd';
import { useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { homeMenuLists, updateJournalList } from './utils';

const { Content, Sider, Header } = Layout;

const LayoutMenu = ({ date }: any) => {
  const updateHomeMenuList = useMemo(
    () =>
      homeMenuLists.map((el: any) => {
        if (el?.key === 'journal') {
          const updateList = updateJournalList([
            {
                "id": 1,
                "name": "Отчеты",
                "pos": 1,
                "isActive": true,
                "isVisible": true,
                "createdDate": "2022-08-23T09:59:36.509201+06:00",
                "subject": "",
                "parId": 0,
                "childs": [
                    {
                        "id": 10,
                        "name": "Управленческие отчеты",
                        "pos": 1,
                        "isActive": true,
                        "isVisible": true,
                        "createdDate": "2022-08-09T16:03:34.598568+06:00",
                        "subject": "",
                        "parId": 1,
                        "childs": null,
                        "isParent": true
                    },
                    {
                        "id": 11,
                        "name": "Финансовый мониторинг",
                        "pos": 2,
                        "isActive": true,
                        "isVisible": true,
                        "createdDate": "2022-08-09T16:03:34.598568+06:00",
                        "subject": "",
                        "parId": 1,
                        "childs": null,
                        "isParent": true
                    },
                    {
                        "id": 12,
                        "name": "НБ РК",
                        "pos": 3,
                        "isActive": true,
                        "isVisible": true,
                        "createdDate": "2022-08-09T16:03:34.598568+06:00",
                        "subject": "",
                        "parId": 1,
                        "childs": null,
                        "isParent": true
                    }
                ],
                "isParent": true
            },
            {
                "id": 2,
                "name": "Кредиты",
                "pos": 2,
                "isActive": true,
                "isVisible": true,
                "createdDate": "2022-08-23T09:59:36.509201+06:00",
                "subject": "",
                "parId": 0,
                "childs": null,
                "isParent": true
            },
            {
                "id": 3,
                "name": "Шаблоны",
                "pos": 3,
                "isActive": true,
                "isVisible": true,
                "createdDate": "2022-08-23T09:59:36.509201+06:00",
                "subject": "",
                "parId": 0,
                "childs": null,
                "isParent": true
            },
            {
                "id": 4,
                "name": "Справочники",
                "pos": 4,
                "isActive": true,
                "isVisible": true,
                "createdDate": "2022-08-23T12:10:18.636872+06:00",
                "subject": "",
                "parId": 0,
                "childs": null,
                "isParent": false
            }
        ]);
          el?.children.push(...updateList);
        }
        return el;
      }),
    [date]
  );
  console.log(
    '🚀 ~ file: LayoutHome.tsx ~ line 26 ~ LayoutMenu ~ updateHomeMenuList',
    updateHomeMenuList
  );

  const { pathname } = useLocation();
  console.log('🚀 ~ file: LayoutHome.tsx ~ line 28 ~ LayoutMenu ~ pathname', pathname);

  return (
    <Menu
      theme="dark"
      mode={'inline'}
      selectedKeys={[pathname]}
      defaultSelectedKeys={[pathname]}
      items={updateHomeMenuList}
    />
  );
};

const LayoutHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [journal, setJournal] = useState([]);


  return (
    <Layout >
      <Sider >
        <div >
        </div>
        {!isLoading ? <LayoutMenu date={journal} /> : <Spin />}
      </Sider>
      <Layout>
        <Header >
          <Button >Создать отчет</Button>
          <div >
            <p>ke</p>
          </div>
        </Header>
        <Content style={{height: '100vh'}}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutHome;
