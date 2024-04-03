import {useMemo} from "react";
import {Table} from "@douyinfe/semi-ui";

const StatisticTable = ({dataSource}) => {
  const statistic_column = [
    {
      title: "APK",
      dataIndex: "ApkName",
      width: 400,
    }, {
      title: "分析时间/s",
      dataIndex: "Time",
      width: 130,
      sorter: (a, b) => (a.Time - b.Time > 0 ? 1 : -1),
      render: text => `${text.toFixed(2)} s`
    }, {
      title: "缺少描述",
      dataIndex: "CdIssue",
      sorter: (a, b) => (a.CdIssue - b.CdIssue > 0 ? 1 : -1),
    }, {
      title: "对比度",
      dataIndex: "ColorIssue",
      sorter: (a, b) => (a.ColorIssue - b.ColorIssue > 0 ? 1 : -1),
    }, {
      title: "非法禁用",
      dataIndex: "DisabledIssue",
      sorter: (a, b) => (a.DisabledIssue - b.DisabledIssue > 0 ? 1 : -1),
    }, {
      title: "无法聚焦",
      dataIndex: "InaccessIssue",
      sorter: (a, b) => (a.InaccessIssue - b.InaccessIssue > 0 ? 1 : -1),
    }, {
      title: "缺少标签",
      dataIndex: "MissingLabelIssue",
      sorter: (a, b) => (a.MissingLabelIssue - b.MissingLabelIssue > 0 ? 1 : -1),
    }, {
      title: "误用",
      dataIndex: "MisuseIssue",
      sorter: (a, b) => (a.MisuseIssue - b.MisuseIssue > 0 ? 1 : -1),
    }
  ];
  const statistic_table_scroll = useMemo(() => ({ y: 300 }), []);
  const handle_row = (record, index) => {
    // 给偶数行设置斑马纹
    if (index % 2 === 0) {
      return {
        style: {
          background: 'var(--semi-color-fill-0)',
        },
      };
    } else {
      return {};
    }
  };

  return (
    <>
      <Table
        columns={statistic_column}
        dataSource={dataSource}
        pagination="false"
        scroll={statistic_table_scroll}
        onRow={handle_row}
      />
    </>
  )
}

export default StatisticTable;