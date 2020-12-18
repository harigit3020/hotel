import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';
class Sidebar extends React.Component{
    render(){
        return(
            <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <Link to='/'>Home</Link>
                    </NavText>
                </NavItem>
               
                <NavItem eventKey="menu">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                       <Link to='menu'>Menu</Link>
                    </NavText>
                    {/* <NavItem eventKey="charts/linechart">
                        <NavText>
                            <b>Chinese</b>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            <b>Arabian</b>
                        </NavText>
                    </NavItem> */}
                </NavItem>   
                <NavItem eventKey="analog">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <Link to='analog'>Analog Clock</Link>
                    </NavText>
                </NavItem>


                <NavItem eventKey="clocks">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                    Digital Clock
                    </NavText>
                    <NavItem eventKey="clock/12hour">
                        <NavText>
                        <Link to='clock'>12 Hour</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="clock/24hour">
                        <NavText>
                        <Link to='clock24'>24 Hour</Link>
                        </NavText>
                    </NavItem>
                </NavItem>   
            </SideNav.Nav>
        </SideNav>
        );
    }
}
export default Sidebar;
