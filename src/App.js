import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from './components/Button'

function App () {
  return (
    <Tabs defaultIndex={3}>
      <TabList>
        <Tab>Colors</Tab>
        <Tab>Typography</Tab>
        <Tab>Spaces</Tab>
        <Tab>Buttons</Tab>
        <Tab>Inputs</Tab>
        <Tab>Grid</Tab>
      </TabList>
      <TabPanel>ColorsContent</TabPanel>
      <TabPanel>TypographyContent</TabPanel>
      <TabPanel>SpacesContent</TabPanel>
      <TabPanel><Button></Button></TabPanel>
      <TabPanel>InputsContent</TabPanel>
      <TabPanel>GridContent</TabPanel>
    </Tabs >
  );
}

export default App;
