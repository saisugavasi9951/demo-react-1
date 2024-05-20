import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 container"
      justify
    >
      <Tab eventKey="home" title="Home" className='container mb-5'>
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile" className='container  mb-5'>
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab" className='container  mb-5'>
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" className='container  mb-5'>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;