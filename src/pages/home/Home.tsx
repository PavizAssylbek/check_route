import { Button, Table, Tabs } from 'antd';
import { useEffect, useMemo, useState } from 'react';

import { getReactColumns } from './utils';

const { TabPane } = Tabs;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tabSelect, setTabSelect] = useState('1');
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);


  const onOpenDrawer = () => {
    setIsVisible(true);
  };

  const onChangeTabSelect = (activeKey: string) => {
    setTabSelect(activeKey);
  };

  const memoColumns = useMemo(() => getReactColumns(columns), [columns]);

  return (
    <div>
      <h1>Реестр</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onOpenDrawer}  size="large">
          Фильтр
        </Button>
      </div>
      <Tabs
        onChange={(activeKey) => onChangeTabSelect(activeKey)}
        tabBarStyle={{ marginTop: '-45px' }}
        defaultActiveKey={tabSelect}
        size="large"
      >
        <TabPane tab="Созданные мной" key="1">
          <Table
            columns={memoColumns}
            dataSource={rows}
            loading={isLoading}
            style={{ height: '100vh' }}
          />
        </TabPane>
        <TabPane tab="Все" key="2">
          <Table
            columns={memoColumns}
            dataSource={rows}
            loading={isLoading}
            style={{ height: '100vh' }}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
