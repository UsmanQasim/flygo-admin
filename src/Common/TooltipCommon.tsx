"use client";
import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const TooltipCommon = ({ id }: { id: string }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Tooltip placement="left" isOpen={tooltipOpen} target={id} toggle={toggle}>
      cancel
    </Tooltip>
  );
};

export default TooltipCommon;
