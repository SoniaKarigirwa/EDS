import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { Table } from 'antd';
import { Button } from 'antd';

const DragIndexContext = createContext({
  active: 3,
  over: 3,
});
const dragActiveStyle = (dragState, id) => {
  const { active, over, direction } = dragState;
  // drag active style
  let style = {};
  if (active && active === id) {
    style = {
      backgroundColor: 'red',
      opacity: 0.5,
    };
  }
  // dragover dashed style
  else if (over && id === over && active !== over) {
    style =
      direction === 'right'
        ? {
          borderRight: '1px dashed gray',
        }
        : {
          borderLeft: '1px dashed gray',
        };
  }
  return style;
};
const TableBodyCell = (props) => {
  const dragState = useContext(DragIndexContext);
  return (
    <td
      {...props}
      style={{
        ...props.style,
        ...dragActiveStyle(dragState, props.id),
      }}
    />
  );
};
const TableHeaderCell = (props) => {
  const dragState = useContext(DragIndexContext);
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: props.id,
  });
  const style = {
    ...props.style,
    cursor: 'move',
    ...(isDragging
      ? {
        position: 'relative',
        zIndex: 9999,
        userSelect: 'none',
      }
      : {}),
    ...dragActiveStyle(dragState, props.id),
  };
  return <th {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
}


const baseColumns = [
  {
    title: 'FirstName',
    dataIndex: 'firstName',
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
  },
  {
    title: 'NationalID',
    dataIndex: 'nationalIdentity',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Telephone',
    dataIndex: 'telephone',
  },
  {
    title: 'Department',
    dataIndex: 'department'
  },
  {
    title: 'Position',
    dataIndex: 'position'
  },
  {
    title: 'Manufacturer',
    dataIndex: 'laptopManufacturer'
  },
  {
    title: 'Model',
    dataIndex: 'laptopModel'
  },
  {
    title: 'SN',
    dataIndex: 'serialNumber'
  },
  {
    title:'Action',
    dataIndex:'action',
    render: (text, record) => (
      <div>
        <Button onClick={() => handleEdit(record)} type="primary" style={{ marginRight: 8,backgroundColor:"#1D5FAD" }}>Edit</Button>
        <Button onClick={() => handleDelete(record)} type="danger" style={{ Color:"#1D5FAD" }}>Delete</Button>
      </div>
    )
  }
];

const handleEdit = (record) => {
  console.log("Edit", record);

};
const handleDelete = (record) => {
  console.log("Delete", record);
  // Implement delete functionality here
};

const TableList = ({data}) => {
  const [dragIndex, setDragIndex] = useState({
    active: -1,
    over: -1,
  });
  const [columns, setColumns] = useState(() =>
    baseColumns.map((column, i) => ({
      ...column,
      key: `${i}`,
      onHeaderCell: () => ({
        id: `${i}`,
      }),
      onCell: () => ({
        id: `${i}`,
      }),
    })),
  );
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // https://docs.dndkit.com/api-documentation/sensors/pointer#activation-constraints
        distance: 1,
      },
    }),
  );
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setColumns((prevState) => {
        const activeIndex = prevState.findIndex((i) => i.key === active?.id);
        const overIndex = prevState.findIndex((i) => i.key === over?.id);
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
    setDragIndex({
      active: -1,
      over: -1,
    });
  };
  const onDragOver = ({ active, over }) => {
    const activeIndex = columns.findIndex((i) => i.key === active.id);
    const overIndex = columns.findIndex((i) => i.key === over?.id);
    setDragIndex({
      active: active.id,
      over: over?.id,
      direction: overIndex > activeIndex ? 'right' : 'left',
    });
  };
 
  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      collisionDetection={closestCenter}
    >
      <SortableContext items={columns.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
        <DragIndexContext.Provider value={dragIndex} >
          <Table
            rowKey="key"
            columns={columns}
            dataSource={data}
            components={{
              header: {
                cell: TableHeaderCell,
              },
              body: {
                cell: TableBodyCell,
              },
            }}
          />
        </DragIndexContext.Provider>
      </SortableContext>
      <DragOverlay>
        <th
          style={{
            backgroundColor: 'gray',
            padding: 16,
          }}
        >
          {columns[columns.findIndex((i) => i.key === dragIndex.active)]?.title}
        </th>
      </DragOverlay>
    </DndContext>
  );
};
export default TableList;