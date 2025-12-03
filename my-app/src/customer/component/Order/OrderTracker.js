import React from "react";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full bg-white p-4 rounded-md shadow-sm">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  color: "#9155FD",
                  fontSize: "1rem",
                  fontWeight: 600,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
