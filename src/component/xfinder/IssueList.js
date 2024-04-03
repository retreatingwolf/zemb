import {Avatar, List, Pagination} from "@douyinfe/semi-ui";
import {useState} from "react";

const IssueList = ({apk, issues}) => {
  // issue 列表分页展示
  const [issuePage, onIssuePageChange] = useState(1);
  const issuePageSize = 5;
  const getIssuePage = (page) => {
    let start = (page - 1) * issuePageSize;
    let end = page * issuePageSize;
    return issues.slice(start, end);
  };

  return (
    <>
      <List
        header={<h2>Issues in {apk}</h2>}
        dataSource={getIssuePage(issuePage)}
        bordered
        className='issue-list'
        style={{ border: '1px solid var(--semi-color-border)', flexBasis: '100%', flexShrink: 0 }}
        renderItem={item => (
          <List.Item
            className='issue-list-item'
            header={<Avatar color={item.UnderOrOver[0] === "U" ? 'red' : 'light-blue'}>{item.UnderOrOver[0]}</Avatar>}
            main={
              // 这里修改具体每个列表的样式
              <div>
                  <span
                    style={{
                      color: 'var(--semi-color-text-0)',
                      fontWeight: 500,
                      fontSize: '19px'
                    }}>
                    {item.Message}
                  </span>
                <p
                  style={{
                    color: 'var(--semi-color-text-1)',
                    margin: '4px 0',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '16px'
                  }}>
                  {item.Location}
                </p>
                <p
                  style={{
                    color: 'var(--semi-color-text-1)',
                    margin: '4px 0',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '16px'
                  }}>
                  {item.XPath}
                </p>
              </div>
            }
          />
        )}
      />
      <Pagination
        size='large' style={{ width: '100%', flexBasis: '100%', justifyContent: 'center', margin: '6px 0' }}
        pageSize={issuePageSize} total={issues.length} currentPage={issuePage}
        onChange={cPage => onIssuePageChange(cPage)}
      />
    </>
  )
}

export default IssueList;