import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap,
    SidebarMenu
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Benefits
                    </SidebarLink>
                    <SidebarLink to='profits' onClick={toggle}>
                        Profits
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        How To Join
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/premium'>Get Premium</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar