import { Tooltip } from "antd";
import React, { Children } from "react";
import {
    Avatar,
    Card,
    Initials,
    List,
    SideNav,
    StyledLink,
    StyledText,
} from "../../styledComponents/styles";
import Products from "./products";
import { CartProvider } from "react-use-cart";
const Sidebar = ({ children, mode }) => {
    const theme = (param1, param2) => {
        return mode === "light" ? param1 : param2;
    };
    const name = localStorage.getItem("userName")??"";
    const email = localStorage.getItem("userEmail")??"";
    return (
        <CartProvider>
        <div className="container-fluid page">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <SideNav
                        bgColor={theme("#b8c6db", "#537895")}
                        bgImage={
                            mode === "light"
                                ? "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"
                                : "linear-gradient(315deg, #537895 0%, #09203f 74%)"
                        }
                    >
                        <div>
                            <Card bgColor={theme("#fff", "#ffffff4a")} className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                            <Avatar color="blue">
                                                <Initials>
                                                    {name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .splice(0, 2)
                                                        .join("")}
                                                </Initials>
                                            </Avatar>
                                        </div>
                                        <div className="col-2"></div>
                                        <div className="col-6">
                                            <StyledText color={theme("#112B3C", "#fff")}>
                                                {name}
                                            </StyledText>
                                            <Tooltip title={email} color="#112B3C">
                                                <StyledText
                                                    className="text-nowrap text-truncate"
                                                    color={theme("#112B3C", "#fff")}
                                                >
                                                    {email}
                                                </StyledText>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <ul className="list-unstyled mt-4">
                            <StyledLink active={theme("#000", "#fff")} color={'#928c8c'} to="/market-place">
                                <List>
                                    <i className="ri-store-3-fill me-3"></i>
                                    Market
                                </List>
                            </StyledLink>
                            <StyledLink active={theme("#000", "#fff")} color={'#928c8c'} to="/your-cart">
                                <List>
                                    <i className="ri-shopping-cart-2-fill me-3"></i>
                                    Cart
                                </List>
                            </StyledLink>
                            <StyledLink active={theme("#000", "#fff")} color={'#928c8c'} to="/your-orders">
                                <List>
                                    <i className="ri-t-shirt-fill me-3"></i>
                                    Orders
                                </List>
                            </StyledLink>
                        </ul>
                    </SideNav>
                </div>
                <div className="space col-md-1"></div>
                <div className="col-lg-8 col-md-8">{children}</div>
            </div>
        </div>
        </CartProvider>
    );
};

export default Sidebar;
