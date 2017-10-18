import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { routerRedux } from 'dva/router'
import List from './List'

const TabPane = Tabs.TabPane

const EnumPostStatus = {
  UNPUBLISH: 1,
  PUBLISHED: 2,
}


const GrainHistory = ({ post, dispatch, loading, location }) => {
  const { list, pagination } = post
  const { query = {}, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['grainhistory/query'],
    onChange (page) {
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
  }

  const handleTabClick = (key) => {
    dispatch(routerRedux.push({
      pathname,
      query: {
        status: key,
      },
    }))
  }


  return (<div className="content-inner">
    <Tabs activeKey={query.status === String(EnumPostStatus.UNPUBLISH) ? String(EnumPostStatus.UNPUBLISH) : String(EnumPostStatus.PUBLISHED)} onTabClick={handleTabClick}>
      <TabPane tab="历史记录" key={String(EnumPostStatus.PUBLISHED)}>
        <List {...listProps} />
      </TabPane>
      <TabPane tab="报警记录" key={String(EnumPostStatus.UNPUBLISH)}>
        <List {...listProps} />
      </TabPane>
    </Tabs>
  </div>)
}

GrainHistory.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ post, loading }) => ({ post, loading }))(GrainHistory)
