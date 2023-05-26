import { UploadOutlined, AreaChartOutlined} from '@ant-design/icons';

const menu = [
  {
    name: 'uploadData',
    id: '1',
    alias: '数据上传',
    icon: <UploadOutlined />,
    roles: ['admin', 'operate']
  },
  {
    name: 'analysisData',
    id: '2',
    alias: '数据分析',
    icon: <AreaChartOutlined />,
    roles: ['admin', 'analysis']
  }
] 

export default menu