import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

class App extends Component {
	state = {};

	render() {
		return (
			<Provider store={store}>
				<Layout className="layout">
					<Header>
						<div className="logo" />
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={["2"]}
							style={{ lineHeight: "64px" }}
						>
							<Menu.Item key="1">nav 1</Menu.Item>
							<Menu.Item key="2">nav 2</Menu.Item>
							<Menu.Item key="3">nav 3</Menu.Item>
						</Menu>
					</Header>
					<Content style={{ padding: "0 50px" }}>
						<Breadcrumb style={{ margin: "16px 0" }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>Page</Breadcrumb.Item>
						</Breadcrumb>
						Component
					</Content>
					<Footer />
				</Layout>
			</Provider>
		);
	}
}

export default App;
