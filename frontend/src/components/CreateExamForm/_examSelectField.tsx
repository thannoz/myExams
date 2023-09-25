import React, { FC, ReactElement } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { ISelectField } from "./interfaces/ISelectField";

const ExamSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    name = "",
    label = "",
    value = "",
    items = [{ value: "", label: "Add Items1" }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${value}-id`}
        id={`${name}-id-select`}
        value={value}
        name={name}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, idx) => (
          <MenuItem key={item.value + idx} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ExamSelectField;
