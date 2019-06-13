import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDom from 'react-dom';

import { SearchConditionPart, TablePart } from '../../Parts';

import { Row, Col } from '../../Components';

class ListTemplate extends Component {
  constructor() {
    super();

    this.state = {
      listData: [],
      isLoading: false,
      searchParams: null,
      labelData: {}
    };

    this.beforeSearch = this.beforeSearch.bind(this);
    this.success = this.success.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(params) {
    this.setState({
      searchParams: params
    });

    this.table.search(params);
  }
  beforeSearch() {
    this.setState({
      isLoading: true,
      listData: []
    });
  }
  success(data, allData) {
    this.setState({
      isLoading: false,
      listData: data,
      labelData: allData
    });
  }

  render() {
    const {
      listFormat,
      operations,
      searchCondition,
      searchUrl,
      method,
      header,
      operationsRule,
      operationsFix,
      showIndex,
      labelFormat,
      ...others
    } = this.props;

    const { isLoading, listData, searchParams, labelData } = this.state;
    return (
      <Row>
        <Col className="border-all border-color-f5f5f5 padding-all">
        <SearchConditionPart
          title="查询条件"
          conditions={searchCondition}
          onSearch={this.onSearch}
          beforeSearch={this.beforeSearch}
          {...others}
        />
        </Col>
        <Col className="border-all margin-top-1r border-color-f5f5f5">
        <TablePart
          title="查询结果"
          items={listData}
          minWidth={1200}
          maxHeight={400}
          isLoading={isLoading}
          itemFormat={listFormat}
          operations={operations}
          operationsRule={operationsRule}
          ref={(item) => {
            this.table = item;
          }}
          beforeSearch={this.beforeSearch}
          success={this.success}
          searchParams={searchParams}
          url={searchUrl}
          method={method}
          header={header}
          operationsFix={operationsFix}
          showIndex={showIndex}
          {...others}
        />
         </Col>
      </Row>
    );
  }
}

ListTemplate.propTypes = {
  searchCondition: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  listFormat: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  operations: PropTypes.arrayOf(PropTypes.shape()),
  operationsRule: PropTypes.shape(),
  operationsFix: PropTypes.bool,
  searchUrl: PropTypes.string.isRequired,
  method: PropTypes.string,
  header: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({})), PropTypes.shape({})]),
  showIndex: PropTypes.bool,
  labelFormat: PropTypes.arrayOf(PropTypes.shape()),
};

ListTemplate.defaultProps = {
  operations: [],
  operationsRule: {},
  operationsFix: false,
  method: 'POST',
  showIndex: false,
  labelFormat: [],
  header: []
};

export default ListTemplate
