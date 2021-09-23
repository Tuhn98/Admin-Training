import React from 'react';
import 'antd/dist/antd.css';
import '../style/TableDrag.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import { arrayMoveImmutable } from 'array-move';
import data from '../data.json'
import ReactDragListView from 'react-drag-listview';

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);



export default class SortableTable extends React.Component {
    state = {
        dataSource: data,
        searchText: '',
        searchedColumn: '',
        columns: [
            {
                title: 'Sort',
                dataIndex: 'sort',
                width: 30,
                className: 'drag-visible',
                render: () => <DragHandle />,
            },
            {
                title: 'Name',
                dataIndex: 'name',
                className: 'drag-visible',
                // ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Age',
                dataIndex: 'age',
                // ...this.getColumnSearchProps('age')
            },
            {
                title: 'Address',
                dataIndex: 'address',
                // ...this.getColumnSearchProps('address'),
            },
        ]
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    className="inputSearch"
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        className="btnSearch"
                    >
                        Search
                    </Button>
                    <Button className="btnSearch" onClick={() => this.handleReset(clearFilters)} size="small">
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
        const { dataSource } = this.state;
        if (oldIndex !== newIndex) {
            const newData = arrayMoveImmutable([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
            console.log('Sorted items: ', newData);
            this.setState({ dataSource: newData });
        }
    };

    DraggableContainer = props => (
        <SortableContainer
            useDragHandle
            disableAutoscroll
            helperClass="row-dragging"
            onSortEnd={this.onSortEnd}
            {...props}
        />
    );

    DraggableBodyRow = ({ className, style, ...restProps }) => {
        const { dataSource } = this.state;
        const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
        return <SortableItem index={index} {...restProps} />;
    };

    hiddenColName = () => {
        const hideCol = [...this.state.columns]
        hideCol.map((col) => {
            if (col.title === "Name") {
                if (col.className === "drag-visible") col.className="drag-hidden"
                else col.className="drag-visible"
            }
        })
        this.setState({
            columns: hideCol
        })
    }

    showLabelBtnHiddenName = (hideCol) => {
       return hideCol.map((col) => {
            if (col.title === "Name") {
                if (col.className === "drag-visible") return "hidden Name"
                else return "visible Name"
            }
        })
    }
    render() {
        const { dataSource } = this.state;
        const that = this
        const columnss = [
            {
                title: 'Sort',
                dataIndex: 'sort',
                width: 30,
                // className: 'drag-visible',
                render: () => <DragHandle />,
            },
            {
                title: 'Name',
                dataIndex: 'name',
                className: 'drag-visible',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Age',
                dataIndex: 'age',
                ...this.getColumnSearchProps('age')
            },
            {
                title: 'Address',
                dataIndex: 'address',
                ...this.getColumnSearchProps('address'),
            },
        ]
        this.dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const columns = [...columnss];
                const item = columns.splice(fromIndex, 1)[0];
                columns.splice(toIndex, 0, item);
                that.setState({
                    columns
                });
            },
            nodeSelector: "th"
        };

        return (

            <ReactDragListView.DragColumn {...this.dragProps}>
                <button style={{ width: 150, marginBottom: 15, height: 50, fontSize: 20 }} onClick={this.hiddenColName}>{this.showLabelBtnHiddenName(this.state.columns)}</button>
                <Table
                    pagination={false}
                    dataSource={dataSource}
                    columns={this.state.columns}
                    rowKey="index"
                    bordered
                    components={{
                        body: {
                            wrapper: this.DraggableContainer,
                            row: this.DraggableBodyRow,
                        },
                    }}
                />
            </ReactDragListView.DragColumn>

        );
    }
}