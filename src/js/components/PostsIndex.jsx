    import React from 'react';
    import Table from 'material-ui/lib/table/table';
    import TableHeader from 'material-ui/lib/table/table-header';
    import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
    import TableRow from 'material-ui/lib/table/table-row';
    import TableRowColumn from 'material-ui/lib/table/table-row-column';
    import TableBody from 'material-ui/lib/table/table-body';

    // Retrieve table data from API
    const tableData = [
      {
        id: 1,
        name: 'John Smith',
        status: 'Employed',
      },
      {
        id: 2,
        name: 'Randal White',
        status: 'Unemployed',
      },
      {
        id: 3,
        name: 'Stephanie Sanders',
        status: 'Employed',
      },
      {
        id: 4,
        name: 'Steve Brown',
        status: 'Employed',
      },
      {
        id: 5,
        name: 'Joyce Whitten',
        status: 'Employed',
      },
      {
        id: 6,
        name: 'Samuel Roberts',
        status: 'Employed',
      },
      {
        id: 7,
        name: 'Adam Moore',
        status: 'Employed',
      },
    ];

    // Retrieve which columns to show from ???
    const tableColumns = [
      {
        key: 'id',
        label: 'ID'
      },
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'status',
        label: 'Status',
      },
      {
        key: 'debug',
        label: 'Debug',
      },
    ];

    export default class PostsIndex extends React.Component {

      constructor(props) {
        super(props);

        this.state = {
          fixedHeader: true,
          stripedRows: true,
          showRowHover: true,
          selectable: true,
          multiSelectable: true,
          displaySelectAll: true,
          enableSelectAll: true,
          deselectOnClickaway: false,
          showMassActions: false,
          selectedRows: [],
        };

        this.handleRowSelection = this.handleRowSelection.bind(this);
      }

      handleRowSelection(selectedRows) {
        if (selectedRows === 'all') {
          selectedRows = Array.apply(null, {length: tableData.length}).map(Number.call, Number);
        }

        if (selectedRows === 'none') {
          selectedRows = [];
        }

        console.log(selectedRows);

        this.setState({
          showMassActions: selectedRows.length > 0,
          selectedRows: selectedRows,
        });
      }

      showColumn(col, row, i, j) {
        var key = 'row-' + i + '-col-' + j;
        if (col.key === 'debug') {
          return (
            <TableRowColumn key={key}><span>{this.state.selectedRows.indexOf(i)}</span></TableRowColumn>
          );
        }
        return (
          <TableRowColumn key={key}>{row[col.key]}</TableRowColumn>
        );
      }

      render() {
        return (
          <div>
            <Table
              fixedHeader={this.state.fixedHeader}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
              displaySelectAll={this.state.displaySelectAll}
              enableSelectAll={this.state.enableSelectAll}
              onRowSelection={this.handleRowSelection}
            >
              <TableHeader enableSelectAll={this.state.enableSelectAll}>
                <TableRow>
                  {tableColumns.map( (col, i) => (
                    <TableHeaderColumn key={'col-' + i}>{col.label}</TableHeaderColumn>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {tableData.map( (row, i) => (
                  <TableRow key={'row-' + i} selected={this.state.selectedRows.indexOf(i) !== -1}>
                    {tableColumns.map( (col, j) => (
                      this.showColumn(col, row, i, j)
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      }
    }
