import { Button,  Tabs } from 'antd';
import {  useState } from 'react';


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
        Созданные мной
        </TabPane>
        <TabPane tab="Все" key="2">
        Все
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
