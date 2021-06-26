import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MdKeyboardArrowRight } from 'react-icons/md';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function DashboardTabs() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabItems = () => {
    return (
      <div className='notifications-content'>
        <div className='not-dot'></div>
        <div className='user-image'>
          <img src='/images/img6.jpg' alt='' />
        </div>
        <div className='user-info'>
          <p className='user-name'>Mark Williams</p>
          <p className='user-email'>mark@example.com</p>
        </div>
        <p className='content-date'>3DY</p>
      </div>
    );
  };
  let data = [
    <TabItems />,
    <TabItems />,
    <TabItems />,
    <TabItems />,
    <TabItems />,
    <TabItems />,
    <TabItems />,
  ];
  return (
    <div className=''>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >
          <Tab label='Messages (3)' {...a11yProps(0)} />
          <Tab label='Archived' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {data.map((item, idx) => {
          return <Fragment key={idx}>{item}</Fragment>;
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {data.map((item, idx) => {
          return <Fragment key={idx}>{item}</Fragment>;
        })}
      </TabPanel>
      <p className='all-notifications'>
        View all notifications <MdKeyboardArrowRight />
      </p>
    </div>
  );
}
