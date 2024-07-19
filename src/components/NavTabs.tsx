import { FunctionComponent } from 'react';
import { Sheet } from '@mui/joy';
import { styled } from '@mui/joy/styles';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { ITabs } from '../interfaces';

const NavTabsContainer = styled(Sheet)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '19%'
});

export const NavTabs: FunctionComponent<ITabs> = ({tabsList, tabsContent}) => {
    return (
        <NavTabsContainer>
            <Tabs aria-label="Basic tabs" defaultValue={0}>
                <TabList>
                    {tabsList.map((tab, index) => (
                        <Tab key={index}>{tab}</Tab>
                    ))}
                </TabList>
                {/* {tabsContent?.map((content, index) => (
                    <TabPanel value={index}>
                        {console.log(content)}
                    </TabPanel>
                ))} */}
            </Tabs>
        </NavTabsContainer>
    )
}