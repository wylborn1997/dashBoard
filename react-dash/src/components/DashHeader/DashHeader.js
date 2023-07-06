import { Layout, theme } from 'antd';
import "./DashHeader.less";
const { Header } = Layout;
function DashHeader (params) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerTitle = '空桑发展报告'
  return (
    <Header
      className="title"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
    >
      {headerTitle}
        </Header>
  )
}
export default DashHeader