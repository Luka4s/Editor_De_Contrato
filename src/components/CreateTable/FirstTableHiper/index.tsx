import React, { useState } from "react";
import { Input } from "@mui/material";
import styles from "../FirstTableHiper/firstTableHiper.module.css";

interface EditableTableCellProps {
  name: string;
  value: string;
  onValueChange: (newValue: string) => void;
}

const EditableTableCell: React.FC<EditableTableCellProps> = ({
  name,
  value,
  onValueChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (isNaN(Number(currentValue))) {
      alert("Valor inválido");
      return;
    }

    onValueChange(currentValue);
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        {isEditing ? (
          <Input
            value={currentValue}
            onChange={handleChange}
            onBlur={handleSave}
          />
        ) : (
          <div onClick={handleEdit}>{value}</div>
        )}
      </td>
    </tr>
  );
};

interface EditableTableProps {
  data: Array<{ name: string; value: string }>;
  onDataChange: (newData: Array<{ name: string; value: string }>) => void;
}

const TableHiper: React.FC<EditableTableProps> = ({ data, onDataChange }) => {
  const handleDataChange = (rowIndex: number, newValue: string) => {
    const newData = [...data];
    newData[rowIndex].value = newValue;
    onDataChange(newData);
  };

  return (
    <table className={styles.tableHiperTest}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => {
          return (
            <tr>
              <EditableTableCell
                key={item.name}
                name={item.name}
                value={item.value}
                onValueChange={(newValue) =>
                  handleDataChange(rowIndex, newValue)
                }
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableHiper;
